///1.  imports
//2.  cliente
//3.  SYSTEM (a constante)
//4.  resposta = await client.messages.create({...})
//5.  console.log da resposta
//6.  console.log dos tokens (input e output)

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM = "Você é um assistente de viagem";

const resposta = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 300,
    system: SYSTEM,
    messages: [
        {role: "user", content: "Quero viajar pra Argentina"},
        {role: "assistant", content: "Ótimo! Quando você quer ir?"}, 
        {role: "user", content: "Em julho"},
        {role: "assistant", content: "E quantas pessoas?"}, 
        {role: "user", content: "qual destino eu mencionei?"}
    ]
})

console.log(resposta.content[0].text);
