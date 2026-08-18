import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multilingual LLM Evaluation Platform | Javier Nemoga",
  description:
    "Interactive case study by Javier Nemoga: a multilingual benchmark and quality-monitoring framework for large language models.",
};

export default function LlmEvaluationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
