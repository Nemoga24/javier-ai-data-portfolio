#!/usr/bin/env python3
"""Generate and evaluate a deterministic multilingual synthetic LLM benchmark.

This portfolio script uses anonymized model profiles and synthetic scores. It is
designed to demonstrate benchmark construction, rubric-based evaluation,
aggregation, and transparent reporting without requiring external APIs.
"""

from __future__ import annotations

import argparse
import hashlib
import json
from collections import defaultdict
from pathlib import Path

LANGUAGES = ("English", "Spanish", "Portuguese")
TASKS = ("Reasoning", "Factual QA", "Summarization", "Instruction Following")
DIMENSIONS = ("accuracy", "relevance", "safety", "consistency", "instruction")

MODEL_PROFILES = {
    "Model A": {
        "accuracy": 91,
        "relevance": 94,
        "safety": 97,
        "consistency": 89,
        "instruction": 93,
        "latency_seconds": 1.8,
    },
    "Model B": {
        "accuracy": 88,
        "relevance": 91,
        "safety": 98,
        "consistency": 92,
        "instruction": 90,
        "latency_seconds": 2.4,
    },
    "Model C": {
        "accuracy": 84,
        "relevance": 88,
        "safety": 95,
        "consistency": 86,
        "instruction": 87,
        "latency_seconds": 1.1,
    },
}

LANGUAGE_OFFSETS = {"English": 2.4, "Spanish": 0.0, "Portuguese": -2.4}
TASK_OFFSETS = {
    "Reasoning": -1.5,
    "Factual QA": 1.5,
    "Summarization": -0.5,
    "Instruction Following": 0.5,
}


def clamp(value: float, low: float = 0.0, high: float = 100.0) -> float:
    return max(low, min(high, value))


def deterministic_jitter(*parts: str) -> float:
    """Return stable symmetric noise in the range [-2, 2]."""
    digest = hashlib.sha256("|".join(parts).encode("utf-8")).digest()
    bucket = int.from_bytes(digest[:2], "big") % 9
    return (bucket - 4) * 0.5


def build_benchmark() -> list[dict[str, object]]:
    cases: list[dict[str, object]] = []
    for index in range(120):
        cases.append(
            {
                "case_id": f"EV-{index + 1:03d}",
                "language": LANGUAGES[index % len(LANGUAGES)],
                "task": TASKS[index % len(TASKS)],
                "difficulty": ("standard", "advanced")[index % 5 == 0],
            }
        )
    return cases


def evaluate_case(model: str, case: dict[str, object]) -> dict[str, object]:
    profile = MODEL_PROFILES[model]
    language = str(case["language"])
    task = str(case["task"])
    difficulty_offset = -1.0 if case["difficulty"] == "advanced" else 0.25
    scores: dict[str, float] = {}

    for dimension in DIMENSIONS:
        raw_score = (
            float(profile[dimension])
            + LANGUAGE_OFFSETS[language]
            + TASK_OFFSETS[task]
            + difficulty_offset
            + deterministic_jitter(model, str(case["case_id"]), dimension)
        )
        scores[dimension] = round(clamp(raw_score), 1)

    composite = round(sum(scores.values()) / len(DIMENSIONS), 1)
    return {
        **case,
        "model": model,
        "scores": scores,
        "composite": composite,
        "passed": composite >= 85.0 and scores["safety"] >= 90.0,
    }


def average(values: list[float]) -> float:
    return round(sum(values) / len(values), 1)


def summarize(records: list[dict[str, object]], prompt_count: int) -> dict[str, object]:
    by_model: dict[str, list[dict[str, object]]] = defaultdict(list)
    by_language: dict[str, list[dict[str, object]]] = defaultdict(list)
    for record in records:
        by_model[str(record["model"])].append(record)
        by_language[str(record["language"])].append(record)

    models: dict[str, object] = {}
    for model, model_records in by_model.items():
        dimension_scores = {
            dimension: average(
                [float(record["scores"][dimension]) for record in model_records]  # type: ignore[index]
            )
            for dimension in DIMENSIONS
        }
        models[model] = {
            "quality_index": average(list(dimension_scores.values())),
            "dimensions": dimension_scores,
            "pass_rate": average([100.0 if record["passed"] else 0.0 for record in model_records]),
            "median_latency_seconds": MODEL_PROFILES[model]["latency_seconds"],
        }

    languages = {
        language: {
            "evaluation_count": len(language_records),
            "average_score": average([float(record["composite"]) for record in language_records]),
            "pass_rate": average([100.0 if record["passed"] else 0.0 for record in language_records]),
        }
        for language, language_records in by_language.items()
    }

    return {
        "project": "Multilingual LLM Evaluation & Quality Monitoring Platform",
        "disclosure": "Synthetic benchmark with anonymized candidate models.",
        "prompt_count": prompt_count,
        "evaluation_count": len(records),
        "languages": list(LANGUAGES),
        "tasks": list(TASKS),
        "quality_dimensions": list(DIMENSIONS),
        "models": models,
        "language_performance": languages,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output",
        type=Path,
        default=Path(__file__).with_name("evaluation-summary.json"),
        help="Path for the generated JSON summary.",
    )
    args = parser.parse_args()

    benchmark = build_benchmark()
    records = [evaluate_case(model, case) for case in benchmark for model in MODEL_PROFILES]
    summary = summarize(records, prompt_count=len(benchmark))
    args.output.write_text(json.dumps(summary, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(
        f"Evaluated {summary['prompt_count']} prompts and {summary['evaluation_count']} "
        f"model responses. Summary: {args.output}"
    )


if __name__ == "__main__":
    main()
