import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publicRoot = resolve(projectRoot, "public");
const distRoot = resolve(projectRoot, "dist");

const publicFiles = ["_redirects", "robots.txt", "sitemap.xml", "site.webmanifest", "browserconfig.xml"];
const publicAssets = [
  "MelmaatechLogo.PNG",
  "live-og.png",
  "approved-by-banner.png",
  "aboutbgm.jpeg",
  "shaikcharuk.jpg",
  "crr1.jpg",
  "crr2.jpg",
  "melmaa-tech-industrial-training-nov-2025-may-2026.png",
  "crr3.jpg",
  "gud1.jpg",
  "melmaa-tech-industrial-training-november-2026.webp",
  "melmaa-tech-industrial-training-november-2026-480.webp",
  "melmaa-tech-industrial-training-november-2026-800.webp",
  "melmaa-tech-industrial-training-november-2026-1280.webp",
  "sadhana-ecet-2027-melmaa-tech-training-students.webp",
  "sadhana-ecet-2027-melmaa-tech-training-students-480.webp",
  "sadhana-ecet-2027-melmaa-tech-training-students-768.webp",
];

await mkdir(distRoot, { recursive: true });
await mkdir(resolve(distRoot, "assets"), { recursive: true });

for (const file of publicFiles) {
  await copyFile(resolve(publicRoot, file), resolve(distRoot, file));
}

for (const file of publicAssets) {
  await copyFile(resolve(publicRoot, "assets", file), resolve(distRoot, "assets", file));
}

console.log(`Published ${publicFiles.length} public files and ${publicAssets.length} approved assets.`);
