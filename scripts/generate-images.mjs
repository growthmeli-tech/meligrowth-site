import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "../public/images");
mkdirSync(OUTPUT_DIR, { recursive: true });

const API_KEY = "AIzaSyAFam2mq3mDo4cQAJ9Ov63XQ2E_MgpRgPk";

async function generateImage(prompt, filename) {
  console.log(`\n🎨 Generating: ${filename}...`);

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ["IMAGE", "TEXT"] },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }

  const data = await res.json();
  const parts = data.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find((p) => p.inlineData);
  if (!imagePart) throw new Error("No image in response: " + JSON.stringify(parts).slice(0, 300));

  const buffer = Buffer.from(imagePart.inlineData.data, "base64");
  const outPath = join(OUTPUT_DIR, filename);
  writeFileSync(outPath, buffer);
  console.log(`✅ Saved → public/images/${filename} (${Math.round(buffer.length / 1024)}kb)`);
}

const images = [
  {
    filename: "hero-ecommerce.png",
    prompt:
      "Top-down flat-lay product photography on a very dark matte black surface. Neatly composed arrangement of small e-commerce cardboard shipping boxes in various sizes, a smartphone with a glowing screen showing clean minimal analytics metrics, a few small product packages with neutral kraft paper labels. Dramatic studio lighting from above with subtle golden-yellow rim light accents on box edges. No people, no visible brand logos, no text. Ultra premium minimalist lifestyle photography. High contrast, sharp focus, cinematic quality. 4:3 aspect ratio.",
  },
  {
    filename: "logistics.jpg",
    prompt:
      "Wide-angle interior photo of a modern e-commerce fulfillment warehouse. Dramatic moody lighting with dark shadows and subtle warm accent lights. Tall organized shelving racks filled with small packaged boxes. Clean concrete floor. No people. Cinematic depth of field. Dark industrial tones with warm light accents. Professional photography.",
  },
  {
    filename: "stats-mobile.png",
    prompt:
      "Top-down flat-lay photography on a very dark matte black surface. A modern smartphone with a glowing screen showing clean minimal e-commerce analytics dashboard with yellow bar charts and green upward trend lines. Surrounded by a small wireless keyboard, a sleek notebook with a gold pen, and a takeaway coffee cup. Dramatic studio lighting from above with subtle golden-yellow rim light accents. No people, no visible brand logos, no readable text. Ultra premium minimalist lifestyle photography. High contrast, sharp focus, cinematic quality. 1:1 aspect ratio.",
  },
];

(async () => {
  console.log("🚀 Generating images via Gemini 2.0 Flash Image...\n");
  for (const img of images) {
    try {
      await generateImage(img.prompt, img.filename);
    } catch (err) {
      console.error(`❌ Error generating ${img.filename}:`, err.message);
    }
  }
  console.log("\n✨ Done!");
})();
