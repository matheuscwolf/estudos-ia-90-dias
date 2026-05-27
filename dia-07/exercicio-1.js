import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });


// 🎭 System prompt — o "personagem"
const SYSTEM = "Você é um professor de matemática paciente que explica passo a passo";


const resposta = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 300,
    system: SYSTEM,
    messages: [{ role: "user", content: "Como resolvo 2x + 6 = 14?"}],
    temperature: 0
})

console.log(resposta.content[0].text);

console.log("Tokens input:", resposta.usage.input_tokens);
console.log("Tokens output:", resposta.usage.output_tokens);