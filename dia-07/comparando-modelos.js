import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

// 🔌 Cria o cliente da API usando a chave do .env
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

console.log("🚀 Enviando mensagem ao Claude...\n");

// 🎯 PRIMEIRA CHAMADA
const resposta = await client.messages.create({
  model: "claude-sonnet-4-5-20250929",   // modelo mais barato pra teste
  max_tokens: 300,                      // até 200 tokens de resposta
  messages: [
    {
      role: "user",
      content: "Explique em 3 frases por que arquitetura de orquestrador é melhor que enviar todo o contexto pro LLM de uma vez.?"
    }
  ]
});

// 📦 Mostra a resposta
console.log("✅ Resposta do Claude:");
console.log(resposta.content[0].text);

// 💰 Mostra os tokens usados
console.log("\n📊 Tokens usados nesta chamada:");
console.log("  Input  (você → Claude):", resposta.usage.input_tokens);
console.log("  Output (Claude → você):", resposta.usage.output_tokens);