//🎸 Professor de violão

//Requisitos obrigatórios:

//System prompt com a personalidade escolhida
//Loop com readline (lê input em tempo real)
//Memória funcionando (array historico — incluindo o push do assistant!)
//Temperatura escolhida com justificativa (escreve num comentário por quê)
//Comando "sair" pra encerrar
//Ao sair, mostra: total de tokens + custo em USD

///

// PARTE 1: TOPO
import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import readline from "node:readline";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM = `Você é um professor de violão chamado Tio, que ama rock inglês`                               
const historico = []                                    
let tokensInput = 0, tokensOutput = 0, custoTotal = 0;                                



// PARTE 2: readline + helpers
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
     })       
function pergunta(texto) {
    return new Promise((resolve) => rl.question(texto, resolve));
}                    

function calcularCusto(input, output) {
    const custoInput = (input / 1_000_000) * 1.0;
    const custoOutput = (output / 1_000_000) * 5.0;
    return custoInput + custoOutput;
}


// PARTE 3: main

async function main() {
  console.log("\n🎸 Tio professor de violão. Digite 'sair' pra encerrar.\n");

  while (true) {
    const entrada = await pergunta("👤 Você: ");

    if (entrada.toLowerCase().trim() === "sair") {
      console.log(`\n👋 Conversa encerrada.`);
      console.log(`📊 Tokens: ${tokensInput} input + ${tokensOutput} output`);
      console.log(`💰 Custo: $${custoTotal.toFixed(6)} USD`);
      rl.close();
      break;
    }

    historico.push({ role: "user", content: entrada });

    try {
      const resposta = await client.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        temperature: 0.5,
        system: SYSTEM,
        messages: historico
      });

      const textoResposta = resposta.content[0].text;
      historico.push({ role: "assistant", content: textoResposta });

      tokensInput += resposta.usage.input_tokens;
      tokensOutput += resposta.usage.output_tokens;
      custoTotal += calcularCusto(resposta.usage.input_tokens, resposta.usage.output_tokens);

      console.log(`\n🎸 Tio: ${textoResposta}\n`);
    } catch (erro) {
      console.log(`❌ Erro: ${erro.message}`);
    }
  }
}

// PARTE 4: ligar
main();