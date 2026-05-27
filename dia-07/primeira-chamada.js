    import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

// 🔌 Cria o cliente da API usando a chave do .env
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

console.log("🚀 Enviando mensagem ao Claude...\n");

// 🎯 PRIMEIRA CHAMADA
const resposta = await client.messages.create({
  model: "claude-haiku-4-5-20251001",   // modelo mais barato pra teste
  max_tokens: 200,                      // até 200 tokens de resposta
  messages: [
    {
      role: "user",
      content: "Em uma frase curta, me diga: o que é um LLM?"
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