import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const root = process.cwd();
const exportRoot = join(root, "out");
const pagesRoot = join(root, "github-pages", "docs");
const basePath = "/javier-ai-data-portfolio/";

const projectEnhancements = `
<style>
  [role="tab"][aria-selected="true"] { background: #f26a2e !important; }
  [aria-label="Filter test cases by language"] button[aria-pressed="true"] { background: #0d1b2a !important; color: #fff !important; }
</style>
<script>
(() => {
  const models = [
    { name: "Model A", score: 92.7, latency: "1.8 s", values: [90.7, 94.1, 96.8, 89.0, 92.9] },
    { name: "Model B", score: 91.7, latency: "2.4 s", values: [87.8, 91.0, 97.6, 92.0, 90.0] },
    { name: "Model C", score: 87.9, latency: "1.1 s", values: [83.8, 87.9, 95.0, 86.0, 87.0] }
  ];

  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const score = document.querySelector('[class*="_bigScore"]');
  const scoreMeta = [...document.querySelectorAll('[class*="_scoreMeta"]')];
  const dimensionRows = [...document.querySelectorAll('[class*="_dimensionRow"]')];
  const dimensionTitle = document.querySelector('[class*="_dimensionCard"] [class*="_cardTitle"] span');

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.setAttribute("aria-selected", "false"));
      tab.setAttribute("aria-selected", "true");
      const model = models[index];
      score.innerHTML = model.score.toFixed(1) + "<span>/100</span>";
      scoreMeta[0].querySelector("strong").textContent = model.name;
      scoreMeta[1].querySelector("strong").textContent = model.latency;
      dimensionTitle.textContent = model.name;
      dimensionRows.forEach((row, rowIndex) => {
        row.querySelector("i").style.width = model.values[rowIndex] + "%";
        row.querySelector("strong").textContent = model.values[rowIndex];
      });
    });
  });

  const filterBox = document.querySelector('[aria-label="Filter test cases by language"]');
  const filters = [...filterBox.querySelectorAll("button")];
  const rows = [...document.querySelectorAll("tbody tr")];
  filters.forEach((button, index) => {
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.addEventListener("click", () => {
      filters.forEach((item) => item.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      const target = button.textContent.trim();
      rows.forEach((row) => {
        const language = row.children[1].textContent.trim();
        row.hidden = target !== "All" && language !== target;
      });
    });
  });
})();
</script>`;

async function inlinePage(sourceRelativePath, destinationRelativePath, enhancements = "") {
  const sourcePath = join(exportRoot, sourceRelativePath);
  let html = await readFile(sourcePath, "utf8");
  const stylesheets = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"[^>]*>/g)].map((match) => match[1]);
  const css = (
    await Promise.all(
      stylesheets.map((href) => readFile(join(exportRoot, href.replace(basePath, "")), "utf8")),
    )
  ).join("\n");

  html = html
    .replace(/<link rel="stylesheet" href="[^"]+"[^>]*>/g, "")
    .replace(/<link rel="preload" as="script"[^>]*>/g, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/g, "")
    .replace("</head>", `<style>${css}</style>${enhancements}</head>`);

  const destinationPath = join(pagesRoot, destinationRelativePath);
  await mkdir(dirname(destinationPath), { recursive: true });
  await writeFile(destinationPath, html);
}

await rm(pagesRoot, { recursive: true, force: true });
await mkdir(pagesRoot, { recursive: true });
await inlinePage("index.html", "index.html");
await inlinePage("projects/llm-evaluation/index.html", "projects/llm-evaluation/index.html", projectEnhancements);
await Promise.all(
  ["favicon.svg", "file.svg", "globe.svg", "window.svg"].map((asset) =>
    cp(join(exportRoot, asset), join(pagesRoot, asset)),
  ),
);
await writeFile(join(pagesRoot, ".nojekyll"), "");

console.log("GitHub Pages bundle created at github-pages/docs");
