import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

// 🎭 O SYSTEM PROMPT — define quem Claude é nessa conversa
const SISTEMA_BRASIL = `Você é um consultor financeiro brasileiro com 20 anos de experiência no mercado nacional.

REGRAS OBRIGATÓRIAS:
- Sempre responda em português brasileiro coloquial
- Use CDI como benchmark, não Treasury americano
- Mencione realidade tributária brasileira quando relevante (IR de 15% em renda variável, isenção de FII abaixo de R$ 20k/mês, IOF, etc)
- NUNCA dê recomendação direta de "compre X" ou "venda Y" — oriente a procurar corretor
- Use exemplos do mercado nacional (PETR4, VALE3, ITUB4, fundos imobiliários)
- Seja conservador: priorize preservação de capital`;

// Pergunta de teste
const PERGUNTA = "Devo comprar ações da Petrobras agora? Quero investir hoje R$ 5 mil.";

console.log(`👤 Pergunta: ${PERGUNTA}\n`);

// CHAMADA 1: SEM system prompt
console.log("📞 SEM system prompt:");
const semSistema = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 800,
  messages: [
    { role: "user", content: PERGUNTA }
  ]
});
console.log(semSistema.content[0].text);

console.log("\n" + "=".repeat(60) + "\n");

// CHAMADA 2: COM system prompt
console.log("📞 COM system prompt (consultor brasileiro):");
const comSistema = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 800,
  system: SISTEMA_BRASIL,  // ← AQUI A MÁGICA
  messages: [
    { role: "user", content: PERGUNTA }
  ]
});
console.log(comSistema.content[0].text);

console.log("\n📊 Tokens comparados:");
console.log("Sem sistema → Input:", semSistema.usage.input_tokens, "| Output:", semSistema.usage.output_tokens);
console.log("Com sistema → Input:", comSistema.usage.input_tokens, "| Output:", comSistema.usage.output_tokens);