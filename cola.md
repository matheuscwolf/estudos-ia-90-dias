# 🎯 COLA — Curso de IA 90 dias

> Material de consulta RÁPIDA enquanto programo.
> Para reflexões/histórico, ver `aprendizados.md`.
> Material antigo cronológico em `anotacoes-antigo.md`.

---

## 🚀 1. RITUAL DE CADA DIA

| Quando | Comando | Por quê |
|---|---|---|
| Início | `git pull origin main` | Trazer mudanças do GitHub |
| Durante | `git status` | Ver o que mudou |
| Fim | `git add .` | Selecionar tudo pra subir |
| Fim | `git commit -m "msg"` | Tirar a "foto" da versão |
| Fim | `git push origin main` | Subir tudo pro GitHub |

> ⚠️ PowerShell não aceita `&&`. Faz um comando por linha.

<details>
<summary>📖 Por que precisamos de Git?</summary>

Git é o sistema que tira "fotos" do seu código ao longo do tempo. Cada foto é um **commit**. GitHub é a "nuvem" onde essas fotos ficam guardadas.

**3 motivos pra usar Git:**
1. Backup automático (PC quebrou? Código tá no GitHub)
2. Histórico (consegue voltar a versão antiga se algo der errado)
3. Sincronização (PC casa ↔ PC escritório via push/pull)

**Analogia:** Git é tipo "salvar no Google Docs", só que MANUAL. Você decide quando salvar (commit) e quando subir pra nuvem (push).

</details>

---

## 💻 2. COMANDOS DE TERMINAL

| Quero | Comando |
|---|---|
| Saber onde estou | `pwd` |
| Listar arquivos | `ls` |
| Entrar em pasta | `cd nome-pasta` |
| Voltar uma pasta | `cd ..` |
| Criar pasta | `mkdir nome-pasta` |
| Criar arquivo | `ni nome.js` |
| Rodar arquivo JS | `node nome.js` |
| Autocompletar nome | TAB |

---

## 📐 3. ESTRUTURA DE CHATBOT (6 BLOCOS)

| Bloco | O que tem | Por quê |
|---|---|---|
| A | 3 imports (dotenv, Anthropic, readline) | Trazer ferramentas |
| B | client, SYSTEM, historico=[], contadores | Configuração |
| C | rl, função pergunta, função calcularCusto | Helpers |
| D | async function main() { while(true) {...} } | Coração do chat |
| E | (8 passos dentro do while) | Lógica de cada msg |
| F | main() | LIGA tudo |

### Os 8 passos dentro do while

| Passo | O que faz |
|---|---|
| 1 | `await pergunta()` → lê entrada |
| 2 | `if entrada === "sair"` → mostra totais e break |
| 3 | `historico.push USER` |
| 4 | `try {` |
| 5 | `await client.messages.create(...)` |
| 6 | Extrai `textoResposta` |
| 7 | `historico.push ASSISTANT` |
| 8 | Soma contadores + mostra resposta |
| 9 | `} catch (erro) {...}` |

<details>
<summary>📖 Por que main() na última linha?</summary>

`async function main() { ... }` apenas **DECLARA** a função. É como escrever uma receita de bolo num caderno. A receita existe, mas o bolo não tá pronto.

A função só **EXECUTA** quando você chama ela: `main();`

Sem essa linha, todo o código do chatbot fica "guardado na gaveta" e nunca roda. É o erro mais comum de quem está aprendendo.

**Tatua:** declarar ≠ executar. Precisa CHAMAR.

</details>

---

## 🎭 4. ROLES DA API

| Role | Quem é | Onde fica |
|---|---|---|
| `system` | Personalidade do bot | Campo separado `system:` |
| `user` | A pessoa usando | Dentro do `messages` |
| `assistant` | O Claude respondendo | Dentro do `messages` |

> 🎯 Primeira mensagem do `messages` SEMPRE é `user`.
> 🎯 Alterna: user → assistant → user → assistant...

<details>
<summary>📖 Detalhes profundos sobre roles</summary>

**System** é a instrução "de fundo" do Claude. Define quem ele é durante TODA a conversa. Tipo o crachá do ator antes da peça começar. Vai no campo `system:` separado, NÃO dentro do array `messages`.

**User** representa a pessoa real usando seu app. Pode ser texto digitado, voz convertida, ou até dados que você FABRICA (tipo extrato bancário puxado do Supabase pra dar contexto pro Claude).

**Assistant** é o Claude respondendo. Quando você dá memória pro chatbot, esse role guarda o que ele já disse no passado, pra ele "lembrar" em chamadas futuras.

**Implicação pro projeto do cliente:**  
- System fixo: personalidade do app financeiro (consultor brasileiro)  
- User dinâmico: vem do frontend/usuário  
- Assistant: orquestrador acumula no Supabase pra memória persistente

</details>

---

## 🌡️ 5. TEMPERATURA (qual usar quando)

| Tarefa | Temp |
|---|---|
| Classificar (spam/não-spam) | **0** |
| Extrair dados (CPF, datas) | **0** |
| Cálculos / matemática | **0** |
| Responder fato (capital do BR) | **0** |
| Conversa profissional séria | **0.3** |
| Chat geral | **0.5** |
| Brainstorm/criatividade | **0.7-1.0** |
| Poesia, naming criativo | **1.0** |

> **Regra de ouro:** padrão é `0`. Sobe só quando criatividade tem valor.

<details>
<summary>📖 Por que classificação é sempre 0?</summary>

Classificação não precisa de criatividade — precisa de **CONSISTÊNCIA**.

Imagina seu app financeiro classificando se uma transação é "alimentação" ou "transporte":
- Temperatura 0: mesmo input → mesma classificação SEMPRE
- Temperatura 0.7: mesmo input pode dar respostas diferentes em horas diferentes

**Regra prática:** toda vez que existe uma resposta "certa" (extrair, classificar, calcular, sim/não), temperatura 0.

**Criatividade só tem valor quando VARIAÇÃO é desejável** (nomes de produtos, ideias de campanha, textos publicitários).

</details>

---

## 💰 6. PRICING DOS MODELOS (USD por milhão de tokens)

| Modelo | Input | Output | Quando usar |
|---|---|---|---|
| Haiku 4.5 | $1 | $5 | Tarefas simples, classificação |
| Sonnet 4.5/4.6 | $3 | $15 | Análise, código, equilíbrio |
| Opus 4.7 | $15 | $75 | Decisões críticas, raciocínio |

> Output é ~5x mais caro que input. Sempre.

<details>
<summary>📖 Como isso afeta a margem do SaaS</summary>

**A escolha de modelo decide se seu app é lucrativo ou prejuízo.**

Exemplo no app financeiro:
- Classificar tipo de gasto → **Haiku** (tarefa simples, modelo barato)
- Analisar balanço da Petrobras → **Sonnet** (raciocínio analítico)
- Cálculo crítico de aposentadoria → **Opus** (precisão máxima)

**Sacada do orquestrador:** ele decide qual modelo usar pra cada subtarefa. Mandar tudo pro Opus quebra a margem. Mandar tudo pro Haiku entrega qualidade ruim.

**É isso que separa SaaS de IA lucrativo de prejuízo:** seleção inteligente de modelo + controle de tokens.

</details>

---

## 🧠 7. MEMÓRIA — A LÓGICA

```
Claude NÃO LEMBRA entre chamadas.
Memória = VOCÊ reenvia histórico via messages.
```

| Quando | O que faz |
|---|---|
| Início | `const historico = []` (vazio) |
| Antes da API | `historico.push({ role: "user", content: entrada })` |
| Na chamada | `messages: historico` |
| Após resposta | `historico.push({ role: "assistant", content: textoResposta })` |

> ⚠️ **Erro comum:** esquecer o push do assistant → bot esquece o que ele mesmo disse.

<details>
<summary>📖 Por que DOIS pushes (user E assistant)?</summary>

Se você só guardar o que o user disse, o histórico fica:
```
[user: oi, user: tudo bem?, user: qual meu nome?]
```

Claude nunca vê **o que ele mesmo respondeu**. Resultado: ele não consegue continuar conversa coerente. Pior ainda, a API pode RECLAMAR porque mensagens devem alternar (user → assistant → user...).

Com os 2 pushes:
```
[user: oi, assistant: olá!, user: tudo bem?, assistant: sim!, user: qual meu nome?]
```

Claude vê a conversa toda e responde com contexto.

**Implicação:** num app real, é VOCÊ (orquestrador) que acumula. Banco de dados (Supabase) guarda histórico persistente entre sessões.

</details>

---

## 🚨 8. ERROS DE SINTAXE QUE EU SEMPRE COMETO

| Erro | Sintoma | Como evitar |
|---|---|---|
| Crase + aspas misturadas | Cores erradas no VS Code | Mesma pontuação dos 2 lados |
| `=` em vez de `:` dentro de objeto | Sublinhado vermelho | Dentro de `{}`: usa `:` |
| Vírgula faltando entre campos | Erro de sintaxe | Sempre vírgula, menos no último |
| `messages` sem `[ ]` | Erro de tipo | Messages SEMPRE é array |
| Variável usada antes de declarar | ReferenceError | Declara no TOPO |
| Esquecer `main();` no fim | Nada roda | ÚLTIMA LINHA do chatbot |
| Não salvar antes de rodar | Roda versão antiga | Ctrl+S sempre |
| Typo no nome do arquivo | "Cannot find module" | Use TAB pra autocompletar |
| Setas/emojis fora de comentário | "Invalid character" | Só `//` antes de comentário |
| `r1` (número 1) em vez de `rl` (letra L) | "rl is not defined" | Olhar com atenção a fonte |

---

## 🔌 9. CHAMADA SIMPLES À API (saber de cor)

```javascript
import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const resposta = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 300,
  temperature: 0,
  system: "Personalidade aqui",
  messages: [
    { role: "user", content: "pergunta" }
  ]
});

console.log(resposta.content[0].text);
console.log("Input:", resposta.usage.input_tokens);
console.log("Output:", resposta.usage.output_tokens);
```

---

## 💬 10. CHATBOT COMPLETO (saber a estrutura)

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

## 🔐 11. SEGURANÇA — CHECKLIST

- [ ] `.env` na pasta do projeto (nunca commitar)
- [ ] `.gitignore` tem linha `.env`
- [ ] Antes de print: FECHA aba do `.env` no VS Code
- [ ] Antes de `git push`: roda `git status` e confirma que `.env` NÃO aparece
- [ ] Se chave foi exposta: REVOGA imediatamente no console.anthropic.com

---

## 📦 12. PROJETO DO CLIENTE — OS 3 PILARES DE BOA IA

1. **DADO** → qualidade do contexto (Open Finance, Twelve Data)
2. **PROMPT** → como instruo o Claude (system prompt)
3. **ORQUESTRAÇÃO** → minha lógica decidindo qual agente/modelo usar

> A inteligência do produto está no ORQUESTRADOR, não no Claude.

---

## 🎯 13. ARQUITETURA DO PROJETO DO CLIENTE

```
[Usuário] → [Frontend Next.js]
              ↓
         [ORQUESTRADOR (meu código)]  ← inteligência real
              ↓ ↓ ↓
              ├→ Supabase (memória persistente)
              ├→ Twelve Data (cotações)
              ├→ Open Finance (dados bancários)
              └→ Claude API (motor de linguagem)
```

| Stack | Função | Status no curso |
|---|---|---|
| Next.js 15 | Frontend + App Router | Módulo 7 (Dia 71+) |
| Supabase | Auth + DB | Módulo 7 (Dia 75+) |
| Claude API | Motor IA | Módulo 3 (já comecei) |
| MCP | Conectar Claude com sistemas externos | Módulo 5 (Dia 46+) |
| Open Finance | Dados bancários BR | Via MCP |
| Twelve Data | Preços de ações BR (.SA) | Módulo 6 |
| Vercel | Deploy | Módulo 7 |