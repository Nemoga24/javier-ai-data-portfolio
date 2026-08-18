const projects = [
  {
    number: "01",
    type: "Data Science · Academic Project",
    title: "Customer Segmentation with RFM & Machine Learning",
    description:
      "Built an end-to-end customer segmentation workflow using RFM analysis, K-Means clustering, PCA and the CRISP-DM methodology to identify Champions, Loyal Customers, VIPs and At-Risk segments.",
    tags: ["Python", "Pandas", "Scikit-learn", "PCA", "K-Means"],
    outcome: "4 actionable customer segments",
  },
  {
    number: "02",
    type: "Data Visualization · Academic Project",
    title: "Interactive Restaurant Analytics Dashboard",
    description:
      "Designed an interactive analytics experience for restaurant data in Colombia, with filters for city, category, price and rating, plus geographic exploration and decision-ready visualizations.",
    tags: ["Python", "Plotly", "Dash", "Folium", "Matplotlib"],
    outcome: "Interactive multi-filter analysis",
  },
  {
    number: "03",
    type: "NLP · Academic Project",
    title: "Text Classification & Information Retrieval",
    description:
      "Developed and compared NLP pipelines using TF-IDF and word embeddings with supervised and semi-supervised models. Evaluated search relevance and classification performance across multiple algorithms.",
    tags: ["NLP", "TF-IDF", "Word2Vec", "SVM", "spaCy"],
    outcome: "Reproducible model comparison",
  },
  {
    number: "04",
    type: "Automation · Applied Project",
    title: "AI-Powered Content Automation Workflow",
    description:
      "Created an automated content pipeline connecting generative AI, external media APIs and video assembly services, with structured prompts, validation steps and repeatable workflow orchestration.",
    tags: ["n8n", "APIs", "Generative AI", "Automation", "Prompting"],
    outcome: "Repeatable end-to-end workflow",
  },
];

const skillGroups = [
  {
    label: "AI & Machine Learning",
    skills: [
      "LLM Evaluation",
      "Prompt Engineering",
      "Model Behavior Analysis",
      "Machine Learning",
      "NLP",
      "AI Quality Assurance",
    ],
  },
  {
    label: "Data & Analytics",
    skills: [
      "Python",
      "SQL",
      "Power BI",
      "Excel",
      "Data Visualization",
      "ETL & Data Processing",
    ],
  },
  {
    label: "Development & Automation",
    skills: [
      "JavaScript",
      "HTML & CSS",
      "APIs",
      "n8n",
      "MySQL & MongoDB",
      "Git & GitHub",
    ],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to top">
          JN<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="header-link"
          href="https://www.linkedin.com/in/javier-nemoga"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Available for remote opportunities</p>
          <h1>
            Javier Nemoga
            <span>AI, Data &amp; Digital Solutions</span>
          </h1>
          <p className="hero-summary">
            Telecommunications Engineer and Data Science &amp; Analytics Specialist
            focused on evaluating intelligent systems, turning data into decisions,
            and building useful digital products.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="mailto:javiernemoga1505@gmail.com">
              Let&apos;s connect
            </a>
          </div>
        </div>

        <aside className="profile-card" aria-label="Professional summary">
          <div className="monogram" aria-hidden="true">JN</div>
          <div className="profile-line">
            <span>Based in</span>
            <strong>Bogotá, Colombia</strong>
          </div>
          <div className="profile-line">
            <span>Experience</span>
            <strong>AI · Data · Web</strong>
          </div>
          <div className="profile-line">
            <span>Languages</span>
            <strong>Spanish · English B2</strong>
          </div>
          <p className="profile-note">Remote experience with teams and projects across the United States and Brazil.</p>
        </aside>

        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll to discover</span><i />
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-label">01 / About</div>
        <div className="about-content">
          <h2>I connect technical precision with real business needs.</h2>
          <div className="about-copy">
            <p>
              I work at the intersection of artificial intelligence, data and
              software. My background in telecommunications gave me a systems
              mindset; my specialization in data science strengthened the way I
              analyze evidence, validate results and communicate insights.
            </p>
            <p>
              Today, I evaluate large language models for reasoning, accuracy,
              alignment and usefulness. I also bring hands-on experience building
              dashboards, automating data workflows and developing web solutions.
            </p>
          </div>
          <div className="value-grid">
            <article><strong>Rigorous</strong><span>Structured evaluation and careful validation</span></article>
            <article><strong>Versatile</strong><span>From model behavior to business dashboards</span></article>
            <article><strong>Outcome-driven</strong><span>Technology translated into practical value</span></article>
          </div>
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading">
          <div className="section-label">02 / Experience</div>
          <h2>Where I&apos;ve made an impact</h2>
        </div>

        <div className="timeline">
          <article className="role">
            <div className="role-date">2025 — Present</div>
            <div className="role-main">
              <p className="role-company">Revelo · Remote · USA / Brazil</p>
              <h3>LLM Trainer &amp; Evaluator</h3>
              <p>
                Train and evaluate large language models across quality, reasoning,
                alignment, safety and usefulness. Review complex responses, identify
                semantic and technical errors, analyze code and improve AI-generated
                solutions through precise feedback and prompt design.
              </p>
              <ul>
                <li>LLM quality and reasoning evaluation</li>
                <li>Prompt engineering and model-behavior analysis</li>
                <li>Code validation and technical documentation</li>
                <li>Error, inconsistency and hallucination detection</li>
              </ul>
            </div>
            <div className="role-index">01</div>
          </article>

          <article className="role">
            <div className="role-date">2022 — 2024</div>
            <div className="role-main">
              <p className="role-company">99 Cents Only Stores · Remote · USA</p>
              <h3>Web Developer &amp; Data Analyst</h3>
              <p>
                Developed and maintained internal and customer-facing web solutions,
                analyzed commercial data and delivered decision-ready reports. Built
                Power BI dashboards connected to MySQL and MongoDB, and automated ETL
                processes with Python and Power Query.
              </p>
              <div className="metrics" aria-label="Selected results">
                <div><strong>25%</strong><span>faster reporting</span></div>
                <div><strong>30%</strong><span>fewer data-load errors</span></div>
                <div><strong>15%</strong><span>higher organic CTR</span></div>
                <div><strong>20%</strong><span>faster operational response</span></div>
              </div>
            </div>
            <div className="role-index">02</div>
          </article>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading projects-heading">
          <div className="section-label">03 / Selected Projects</div>
          <h2>Turning questions into working solutions</h2>
          <p>A selection of applied and academic work across analytics, machine learning, NLP and automation.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-topline">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="project-outcome">
                <span>Outcome</span><strong>{project.outcome}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="section-heading">
          <div className="section-label">04 / Capabilities</div>
          <h2>A practical, multidisciplinary toolkit</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article key={group.label}>
              <div className="skill-number">0{index + 1}</div>
              <h3>{group.label}</h3>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section education" id="education">
        <div className="section-label">05 / Education</div>
        <div className="education-list">
          <article>
            <span>2025 — 2026</span>
            <div>
              <h3>Postgraduate Specialization in Data Science &amp; Analytics</h3>
              <p>Universidad Nacional Abierta y a Distancia — UNAD, Colombia</p>
            </div>
          </article>
          <article>
            <span>2019 — 2025</span>
            <div>
              <h3>Bachelor&apos;s Degree in Telecommunications Engineering</h3>
              <p>Universidad Nacional Abierta y a Distancia — UNAD, Colombia</p>
            </div>
          </article>
          <article>
            <span>Credentials</span>
            <div>
              <h3>Networking, Cybersecurity &amp; Artificial Intelligence</h3>
              <p>CCNA · CyberOps · Advanced AI · Google / Coursera programs</p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow eyebrow-light"><span /> Let&apos;s build something useful</p>
        <h2>Interested in working together?</h2>
        <p>
          I&apos;m open to remote opportunities in AI evaluation, LLM training,
          data analytics, automation and digital solutions.
        </p>
        <a className="contact-email" href="mailto:javiernemoga1505@gmail.com">
          javiernemoga1505@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-footer">
          <span>Javier Mauricio Nemoga Franco</span>
          <a href="https://www.linkedin.com/in/javier-nemoga" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <span>Bogotá, Colombia · 2026</span>
        </div>
      </section>
    </main>
  );
}
