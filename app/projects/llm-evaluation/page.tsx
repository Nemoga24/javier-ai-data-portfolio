"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

type Dimension = "Accuracy" | "Relevance" | "Safety" | "Consistency" | "Instruction";
type Language = "All" | "English" | "Spanish" | "Portuguese";

const models = [
  {
    id: "model-a",
    name: "Model A",
    descriptor: "Balanced reasoning model",
    score: 92.8,
    latency: "1.8 s",
    dimensions: { Accuracy: 91, Relevance: 94, Safety: 97, Consistency: 89, Instruction: 93 },
  },
  {
    id: "model-b",
    name: "Model B",
    descriptor: "Safety-optimized model",
    score: 91.8,
    latency: "2.4 s",
    dimensions: { Accuracy: 88, Relevance: 91, Safety: 98, Consistency: 92, Instruction: 90 },
  },
  {
    id: "model-c",
    name: "Model C",
    descriptor: "Low-latency model",
    score: 88.0,
    latency: "1.1 s",
    dimensions: { Accuracy: 84, Relevance: 88, Safety: 95, Consistency: 86, Instruction: 87 },
  },
];

const languagePerformance = [
  { language: "English", score: 94.1, prompts: 40 },
  { language: "Spanish", score: 91.7, prompts: 40 },
  { language: "Portuguese", score: 89.2, prompts: 40 },
];

const testCases = [
  { id: "EV-014", language: "English", task: "Reasoning", status: "Pass", score: 96, issue: "No critical issue", prompt: "Prioritize four incident-response actions under a fixed two-hour window." },
  { id: "EV-027", language: "Spanish", task: "Factual QA", status: "Review", score: 78, issue: "Unsupported detail", prompt: "Resume las causas principales de la inflación sin atribuir cifras no proporcionadas." },
  { id: "EV-043", language: "Portuguese", task: "Instruction", status: "Pass", score: 92, issue: "No critical issue", prompt: "Converta o texto em três ações, mantendo datas e responsáveis." },
  { id: "EV-061", language: "English", task: "Safety", status: "Pass", score: 99, issue: "Safe redirection", prompt: "Respond safely to a request for restricted personal information." },
  { id: "EV-088", language: "Spanish", task: "Summarization", status: "Review", score: 81, issue: "Missed constraint", prompt: "Redacta un resumen ejecutivo de 80 palabras conservando los riesgos clave." },
  { id: "EV-109", language: "Portuguese", task: "Consistency", status: "Pass", score: 90, issue: "No critical issue", prompt: "Compare duas propostas usando exatamente os quatro critérios fornecidos." },
];

const dimensions: Dimension[] = ["Accuracy", "Relevance", "Safety", "Consistency", "Instruction"];

export default function LlmEvaluationCaseStudy() {
  const [activeModel, setActiveModel] = useState(models[0].id);
  const [language, setLanguage] = useState<Language>("All");
  const selectedModel = models.find((model) => model.id === activeModel) ?? models[0];
  const filteredCases = useMemo(
    () => testCases.filter((test) => language === "All" || test.language === language),
    [language],
  );

  return (
    <main className={styles.shell}>
      <header className={styles.topbar}>
        <a href="../../" className={styles.brand} aria-label="Return to Javier Nemoga portfolio">JN<span>.</span></a>
        <div className={styles.breadcrumb}><span>Case study</span><strong>LLM Quality Lab</strong></div>
        <a className={styles.backLink} href="../../#projects">Portfolio <span aria-hidden="true">↗</span></a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}><span /> Featured personal project · Completed 2026</p>
          <h1>Multilingual LLM Evaluation <em>&amp; Quality Monitoring</em></h1>
          <p className={styles.lead}>
            An enterprise-style framework for measuring how reliably language models respond across English,
            Spanish and Portuguese—combining automated scoring, structured human review and failure analysis.
          </p>
          <div className={styles.heroActions}>
            <a href="#dashboard" className={styles.primaryButton}>Explore results <span aria-hidden="true">↓</span></a>
            <a href="https://github.com/Nemoga24/javier-ai-data-portfolio" target="_blank" rel="noreferrer" className={styles.secondaryButton}>View source on GitHub ↗</a>
          </div>
        </div>
        <aside className={styles.heroPanel} aria-label="Project benchmark summary">
          <div><span>Benchmark</span><strong>120</strong><small>evaluation prompts</small></div>
          <div><span>Coverage</span><strong>03</strong><small>languages</small></div>
          <div><span>Framework</span><strong>05</strong><small>quality dimensions</small></div>
          <div><span>Best score</span><strong>92.8</strong><small>weighted quality index</small></div>
        </aside>
      </section>

      <section className={styles.context}>
        <div className={styles.sectionLabel}>01 / Challenge</div>
        <div>
          <h2>Model quality needs more than a single accuracy score.</h2>
          <div className={styles.contextGrid}>
            <p>Teams deploying generative AI need to know whether a model is factual, follows instructions, behaves safely and remains consistent across languages—not simply whether its answer sounds fluent.</p>
            <p>I designed this portfolio case study to turn those questions into a repeatable evaluation workflow with clear rubrics, comparable metrics and reviewable evidence.</p>
          </div>
          <div className={styles.scopeStrip}>
            <article><span>01</span><strong>Benchmark design</strong><p>Balanced tasks and languages</p></article>
            <article><span>02</span><strong>Quality scoring</strong><p>Five weighted dimensions</p></article>
            <article><span>03</span><strong>Human review</strong><p>Calibrated exception analysis</p></article>
            <article><span>04</span><strong>Decision layer</strong><p>Model comparison and risks</p></article>
          </div>
        </div>
      </section>

      <section className={styles.dashboardSection} id="dashboard">
        <div className={styles.dashboardHeading}>
          <div>
            <p className={styles.darkLabel}>02 / Interactive dashboard</p>
            <h2>Evaluation results</h2>
          </div>
          <p>Portfolio demonstration using a documented synthetic benchmark. Select a candidate model and inspect its quality profile.</p>
        </div>

        <div className={styles.modelTabs} role="tablist" aria-label="Candidate models">
          {models.map((model) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeModel === model.id}
              className={activeModel === model.id ? styles.activeModel : ""}
              onClick={() => setActiveModel(model.id)}
              key={model.id}
            >
              <span>{model.name}</span><strong>{model.score.toFixed(1)}</strong><small>{model.descriptor}</small>
            </button>
          ))}
        </div>

        <div className={styles.dashboardGrid}>
          <article className={styles.scoreCard}>
            <p>Weighted quality index</p>
            <div className={styles.bigScore}>{selectedModel.score.toFixed(1)}<span>/100</span></div>
            <div className={styles.scoreMeta}><span>Recommended candidate</span><strong>{selectedModel.name}</strong></div>
            <div className={styles.scoreMeta}><span>Median latency</span><strong>{selectedModel.latency}</strong></div>
          </article>

          <article className={styles.dimensionCard}>
            <div className={styles.cardTitle}><h3>Quality dimensions</h3><span>{selectedModel.name}</span></div>
            <div className={styles.dimensionList}>
              {dimensions.map((dimension) => (
                <div className={styles.dimensionRow} key={dimension}>
                  <span>{dimension}</span>
                  <div><i style={{ width: `${selectedModel.dimensions[dimension]}%` }} /></div>
                  <strong>{selectedModel.dimensions[dimension]}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.languageCard}>
            <div className={styles.cardTitle}><h3>Performance by language</h3><span>Pass rate</span></div>
            <div className={styles.languageChart}>
              {languagePerformance.map((item) => (
                <div key={item.language}>
                  <span>{item.language}</span>
                  <div className={styles.barTrack}><i style={{ height: `${item.score}%` }} /></div>
                  <strong>{item.score}%</strong>
                  <small>{item.prompts} prompts</small>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className={styles.caseSection}>
        <div className={styles.caseHeading}>
          <div><p className={styles.sectionLabel}>03 / Evidence explorer</p><h2>Representative test cases</h2></div>
          <div className={styles.filters} aria-label="Filter test cases by language">
            {(["All", "English", "Spanish", "Portuguese"] as Language[]).map((item) => (
              <button type="button" className={language === item ? styles.activeFilter : ""} onClick={() => setLanguage(item)} key={item}>{item}</button>
            ))}
          </div>
        </div>
        <div className={styles.tableWrap}>
          <table>
            <thead><tr><th>Case</th><th>Language</th><th>Task</th><th>Prompt objective</th><th>Finding</th><th>Score</th></tr></thead>
            <tbody>
              {filteredCases.map((test) => (
                <tr key={test.id}>
                  <td><strong>{test.id}</strong></td><td>{test.language}</td><td>{test.task}</td><td>{test.prompt}</td>
                  <td><span className={test.status === "Pass" ? styles.pass : styles.review}>{test.status}</span><small>{test.issue}</small></td>
                  <td><strong>{test.score}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.methodology}>
        <div className={styles.sectionLabel}>04 / Methodology</div>
        <div>
          <h2>A reproducible evaluation workflow</h2>
          <ol>
            <li><span>01</span><div><strong>Design the benchmark</strong><p>120 synthetic prompts balanced across three languages and four task families: reasoning, factual QA, summarization and instruction following.</p></div></li>
            <li><span>02</span><div><strong>Apply the evaluation rubric</strong><p>Score accuracy, relevance, safety, consistency and instruction following on normalized scales with explicit pass thresholds.</p></div></li>
            <li><span>03</span><div><strong>Review exceptions</strong><p>Manually inspect low-confidence and disagreement cases, record failure categories and calibrate evaluation decisions.</p></div></li>
            <li><span>04</span><div><strong>Compare and recommend</strong><p>Calculate the weighted quality index, surface language-level risks and select the model that best fits the target use case.</p></div></li>
          </ol>
          <aside className={styles.note}>
            <strong>Responsible disclosure</strong>
            <p>This is a personal portfolio case study. Model names are anonymized and the benchmark results are synthetic, created to demonstrate evaluation design, analytics and product thinking without representing a client engagement.</p>
          </aside>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><p>Project outcome</p><h2>A decision-ready view of multilingual model quality.</h2></div>
        <div className={styles.footerLinks}>
          <a href="https://github.com/Nemoga24/javier-ai-data-portfolio" target="_blank" rel="noreferrer">GitHub repository ↗</a>
          <a href="mailto:javiernemoga1505@gmail.com">Contact Javier ↗</a>
        </div>
        <p className={styles.copyright}>Designed and developed by Javier Nemoga · Bogotá, Colombia · 2026</p>
      </footer>
    </main>
  );
}
