import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// === O LABORATÓRIO: só isso muda entre experimentos ===
const SYSTEM = `Pense passo a passo dentro de <raciocinio>.
Depois responda SÓ o número final dentro de <resposta>.

Formato:
<raciocinio>seu raciocínio aqui</raciocinio>
<resposta>número</resposta>`;
const USER = "Assinatura anual de R$ 588 paga em 12x sem juros, mais taxa única de adesão de R$ 49. Qual o custo médio mensal no primeiro ano?";
// ======================================================

async function main(): Promise<void> {
  const resposta = await client.messages.create({
    model: "claude-haiku-4-5-20251001",         // o modelo barato que usamos sempre (seção 11/13 da cola)
    max_tokens: 300,
    temperature: 0,        // você mesmo explicou o porquê na última mensagem
    system: SYSTEM,             // a constante lá de cima
    messages: [{ role: "user", content: USER }],   // a outra constante
  });

  const bloco = resposta.content[0];
  const textoResposta = bloco.type === "text" ? bloco.text : "";   // narrowing, seção 7

  console.log("RESPOSTA: " + textoResposta);
  
  const numeroFinal = textoResposta.split("<resposta>")[1].split("</resposta>")[0];
console.log("SÓ O NÚMERO: " + numeroFinal);
}



main();