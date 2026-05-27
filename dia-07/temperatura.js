import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const PERGUNTA = "Me dê um nome criativo pra uma fintech brasileira focada em investimentos.";

// Roda 3 vezes com temperatura 0
console.log("🥶 TEMPERATURA 0 (3 vezes):");
for (let i = 1; i <= 3; i++) {
  const r = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 50,
    temperature: 0,
    messages: [{ role: "user", content: PERGUNTA }]
  });
  console.log(`  ${i}: ${r.content[0].text.trim()}`);
}

console.log("\n🔥 TEMPERATURA 1.0 (3 vezes):");
for (let i = 1; i <= 3; i++) {
  const r = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 50,
    temperature: 1.0,
    messages: [{ role: "user", content: PERGUNTA }]
  });
  console.log(`  ${i}: ${r.content[0].text.trim()}`);
}