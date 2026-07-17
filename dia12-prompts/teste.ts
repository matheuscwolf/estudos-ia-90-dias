import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// === O LABORATÓRIO: só isso muda entre experimentos ===
const SYSTEM = `
Você é um classificador de gastos pessoais.

Classifique cada gasto em EXATAMENTE uma destas categorias:

- alimentacao
- transporte
- moradia
- saude
- educacao
- lazer
- assinaturas
- compras
- investimentos
- outros

Regras:
1. Responda somente com uma categoria da lista.
2. Nunca invente uma categoria nova.
3. Use letras minúsculas.
4. Coloque a categoria dentro de <resposta></resposta>.

Exemplos:

Gasto: "Almoço no restaurante por R$ 42,00"
Resposta: <resposta>alimentacao</resposta>

Gasto: "Corrida de Uber até o trabalho"
Resposta: <resposta>transporte</resposta>

Gasto: "Mensalidade da Netflix"
Resposta: <resposta>assinaturas</resposta>

Gasto: "Consulta com dermatologista"
Resposta: <resposta>saude</resposta>

Gasto: "Compra de ações da Petrobras"
Resposta: <resposta>investimentos</resposta>

Gasto: "Ingresso para o cinema"
Resposta: <resposta>lazer</resposta>

Gasto: "Conta de aluguel do apartamento"
Resposta: <resposta>moradia</resposta>

Gasto: "Curso de TypeScript"
Resposta: <resposta>educacao</resposta>

Gasto: "Tênis novo"
Resposta: <resposta>compras</resposta>
`;
const USER = `
Classifique o seguinte gasto:

"iFood - hambúrguer e refrigerante - R$ 48,90"
`;
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