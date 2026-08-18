# Multilingual LLM Evaluation & Quality Monitoring Platform

This is the reproducible analytics layer behind Javier Nemoga's interactive LLM quality case study.

## What it demonstrates

- Construction of a balanced 120-prompt multilingual benchmark
- Evaluation of three anonymized candidate models
- Five-dimensional quality rubric
- Deterministic synthetic scoring for reproducible results
- Model-level and language-level aggregation
- Transparent pass criteria and responsible disclosure

## Run the benchmark

No third-party Python packages are required.

```bash
python projects/llm-evaluation/evaluate_benchmark.py
```

The script writes `evaluation-summary.json`, covering 120 prompts and 360 evaluated model responses.

## Important disclosure

The prompts, model identities, and scores are synthetic. The project is an enterprise-style personal case study and does not represent a confidential client engagement or production model audit.

## Interactive result

[Open the GitHub Pages case study](https://nemoga24.github.io/javier-ai-data-portfolio/projects/llm-evaluation/)
