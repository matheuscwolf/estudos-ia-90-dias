import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import readline from "node:readline";

// 🔌 Cliente da API
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

// 🎭 System prompt — o "personagem"
const SYSTEM = `Você é um consultor financeiro brasileiro chamado Tio Carlos, com 20 anos de mercado.

REGRAS:
- Fala em português coloquial brasileiro, descontraído mas profissional
- Usa CDI como benchmark
- Considera tributação brasileira (IR, IOF, isenção FII)
- NUNCA recomenda compra direta de ativos — oriente a procurar corretor
- Lembra do contexto da conversa (idade, valor, perfil mencionados antes)
- Seja conciso: máximo 4-5 linhas por resposta`;

// 📚 Histórico da conversa (a "memória")
const historico = [];

// 💰 Contador de gastos
let custoTotal = 0;
let tokensInputTotal = 0;
let tokensOutputTotal = 0;

// 🎨 Setup do leitor de terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 🔧 Função helper pra perguntar e esperar resposta
function pergunta(prompt) {
  return new Promise((resolve) => rl.question(prompt, resolve));
}

// 💸 Cálculo de custo (preços aproximados Haiku 4.5)
function calcularCusto(input, output) {
  const custoInput = (input / 1_000_000) * 1.0;   // $1 por milhão de tokens input
  const custoOutput = (output / 1_000_000) * 5.0; // $5 por milhão de tokens output
  return custoInput + custoOutput;
}

// 🚀 Função principal
async function main() {
  console.log("\n🤖 Tio Carlos — Consultor Financeiro IA");
  console.log("💡 Digite 'sair' pra encerrar\n");

  while (true) {
    // 1. Lê o que o usuário digitou
    const entrada = await pergunta("👤 Você: ");

    // 2. Comando de saída
    if (entrada.toLowerCase().trim() === "sair") {
      console.log(`\n👋 Conversa encerrada.`);
      console.log(`📊 Tokens usados: ${tokensInputTotal} input + ${tokensOutputTotal} output`);
      console.log(`💰 Custo total estimado: $${custoTotal.toFixed(6)} USD`);
      rl.close();
      break;
    }

    // 3. Adiciona pergunta ao histórico
    historico.push({ role: "user", content: entrada });

    // 4. Chama a API com o histórico INTEIRO
    try {
      const resposta = await client.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        temperature: 0.4,  // equilibrado pra conversação
        system: SYSTEM,
        messages: historico
      });

      const textoResposta = resposta.content[0].text;

      // 5. Adiciona resposta do Claude ao histórico (pra próxima rodada lembrar)
      historico.push({ role: "assistant", content: textoResposta });

      // 6. Atualiza contadores
      tokensInputTotal += resposta.usage.input_tokens;
      tokensOutputTotal += resposta.usage.output_tokens;
      custoTotal += calcularCusto(resposta.usage.input_tokens, resposta.usage.output_tokens);

      // 7. Mostra resposta
      console.log(`\n🤖 Tio Carlos: ${textoResposta}`);
      console.log(`   📊 [${resposta.usage.input_tokens} in + ${resposta.usage.output_tokens} out]\n`);

    } catch (erro) {
      console.log(`\n❌ Erro: ${erro.message}\n`);
    }
  }
}

main();