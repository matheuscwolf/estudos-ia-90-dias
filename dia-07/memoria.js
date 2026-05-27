import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

// PRIMEIRA chamada - sem histórico
console.log("📞 Chamada 1:");
const r1 = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 100,
  messages: [
    { role: "user", content: "Meu nome é Matheus. Lembre disso." }
  ]
});
console.log("→", r1.content[0].text);

// SEGUNDA chamada - SEM enviar histórico (Claude não vai lembrar)
console.log("\n📞 Chamada 2 (sem histórico):");
const r2 = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 100,
  messages: [
    { role: "user", content: "Qual o meu nome?" }
  ]
});
console.log("→", r2.content[0].text);

// TERCEIRA chamada - REENVIANDO histórico (agora vai lembrar)
console.log("\n📞 Chamada 3 (com histórico):");
const r3 = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 100,
  messages: [
    { role: "user", content: "Meu nome é Matheus. Lembre disso." },
    { role: "assistant", content: r1.content[0].text },
    { role: "user", content: "Qual o meu nome?" }
  ]
});
console.log("→", r3.content[0].text);