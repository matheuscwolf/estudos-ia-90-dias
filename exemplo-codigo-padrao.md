# 📚 CÓDIGO DE REFERÊNCIA — Padrões para consultar

> ⚠️ Use como COLA: abre do lado e DIGITA olhando. Não copia+cola.
> Este arquivo é só referência — não roda (falta node_modules na raiz).
> Pra testar, copia pra dentro de uma pasta dia-XX que tenha node_modules + .env.

---

## 🤖 Chamada simples à API (1 pergunta)

```javascript
import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const resposta = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 300,
  temperature: 0,
  system: "Você é um [personagem]",
  messages: [
    { role: "user", content: "pergunta aqui" }
  ]
});

console.log(resposta.content[0].text);
console.log("Input:", resposta.usage.input_tokens);
console.log("Output:", resposta.usage.output_tokens);
```

---

## 💬 Chatbot completo (loop + memória)

```javascript
import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import readline from "node:readline";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const SYSTEM = `personalidade do bot aqui`;
const historico = [];
let tokensInput = 0, tokensOutput = 0, custoTotal = 0;

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function pergunta(texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}

function calcularCusto(input, output) {
  return (input / 1_000_000) * 1.0 + (output / 1_000_000) * 5.0;
}

async function main() {
  console.log("\nDigite 'sair' pra encerrar.\n");

  while (true) {
    const entrada = await pergunta("Você: ");

    if (entrada.toLowerCase().trim() === "sair") {
      console.log(`Tokens: ${tokensInput} in + ${tokensOutput} out`);
      console.log(`Custo: $${custoTotal.toFixed(6)}`);
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

      console.log(`\nBot: ${textoResposta}\n`);
    } catch (erro) {
      console.log(`Erro: ${erro.message}`);
    }
  }
}

main();
```

---

## 🗺️ Estrutura mental (decora ISTO)

```
TOPO (1 vez):    imports → cliente → SYSTEM → historico=[] → contadores → readline → funções
main() {
  boas-vindas
  while(true) {
    1. lê entrada
    2. "sair"? → totais + break
    3. push user
    4. chama API (messages: historico)
    5. pega texto
    6. push assistant   ← NÃO ESQUECE
    7. soma contadores
    8. mostra resposta
  }
}
main()  ← liga tudo
```

---

## 📐 Regras de sintaxe que sempre erro
- Crase abre e fecha com crase (não mistura com aspas)
- Dentro de objeto: `chave: valor` (DOIS PONTOS, não =)
- Vírgula entre campos, menos no último
- `messages` é array: `[ ]`
- Declara variável ANTES de usar
- SALVA antes de rodar (Ctrl+S)