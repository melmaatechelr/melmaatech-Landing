import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = resolve(projectRoot, "dist");
const baseHtml = await readFile(resolve(distRoot, "index.html"), "utf8");
const pages = JSON.parse(await readFile(resolve(projectRoot, "seo-pages.json"), "utf8"));

const escapeAttribute = (value) => String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;");
const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function setTag(html, tagName, identifyingAttribute, identifyingValue, attributes) {
  const escapedValue = escapeRegex(identifyingValue);
  const existingTag = new RegExp(
    `<${tagName}\\b(?=[^>]*\\b${identifyingAttribute}=["']${escapedValue}["'])[^>]*\\/?\\s*>`,
    "i",
  );
  const renderedTag = `<${tagName} ${identifyingAttribute}="${escapeAttribute(identifyingValue)}" ${Object.entries(attributes)
    .map(([key, value]) => `${key}="${escapeAttribute(value)}"`)
    .join(" ")} />`;

  return existingTag.test(html)
    ? html.replace(existingTag, renderedTag)
    : html.replace("</head>", `    ${renderedTag}\n  </head>`);
}

function makePageHtml(page) {
  const canonical = `https://www.melmaa.tech${page.path}`;
  const image = page.image ?? "https://www.melmaa.tech/assets/live-og.png";
  let html = baseHtml.replace(/<title>[^<]*<\/title>/i, `<title>${escapeAttribute(page.title)}</title>`);
  html = setTag(html, "link", "rel", "canonical", { href: canonical });
  html = setTag(html, "meta", "name", "description", { content: page.description });
  html = setTag(html, "meta", "property", "og:title", { content: page.title });
  html = setTag(html, "meta", "property", "og:description", { content: page.description });
  html = setTag(html, "meta", "property", "og:url", { content: canonical });
  html = setTag(html, "meta", "property", "og:type", { content: "website" });
  html = setTag(html, "meta", "property", "og:site_name", { content: "Melmaa Tech" });
  html = setTag(html, "meta", "property", "og:image", { content: image });
  html = setTag(html, "meta", "property", "og:image:alt", { content: page.imageAlt ?? page.title });
  html = setTag(html, "meta", "property", "og:image:width", { content: String(page.imageWidth ?? 1200) });
  html = setTag(html, "meta", "property", "og:image:height", { content: String(page.imageHeight ?? 630) });
  html = setTag(html, "meta", "name", "twitter:card", { content: "summary_large_image" });
  html = setTag(html, "meta", "name", "twitter:title", { content: page.title });
  html = setTag(html, "meta", "name", "twitter:description", { content: page.description });
  html = setTag(html, "meta", "name", "twitter:image", { content: image });

  const schemaScripts = (page.schemas ?? []).map((schema, index) => {
    const schemaIds = { Course: "course-schema", BreadcrumbList: "breadcrumb-schema" };
    const id = schemaIds[schema["@type"]] ?? `page-schema-${index + 1}`;
    const json = JSON.stringify(schema).replaceAll("<", "\\u003c");
    return `<script type="application/ld+json" id="${id}">${json}</script>`;
  });
  if (schemaScripts.length) html = html.replace("</head>", `${schemaScripts.join("\n    ")}\n  </head>`);
  return html;
}

for (const page of pages) {
  const outputPath = resolve(distRoot, page.path.slice(1), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, makePageHtml(page), "utf8");
  console.log(`Generated route metadata: ${page.path}`);
}

let notFoundHtml = baseHtml.replace(/<title>[^<]*<\/title>/i, "<title>Page not found | Melmaa Tech</title>");
notFoundHtml = setTag(notFoundHtml, "meta", "name", "robots", { content: "noindex, nofollow" });
notFoundHtml = notFoundHtml.replace(/\s*<link\b(?=[^>]*\brel=["']canonical["'])[^>]*\/?\s*>/i, "");
await writeFile(resolve(distRoot, "404.html"), notFoundHtml, "utf8");
console.log("Generated 404 page with noindex metadata");
