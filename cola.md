# 🎯 COLA — Curso de IA 90 dias

> Material de consulta RÁPIDA enquanto programo.
> Para reflexões/histórico, ver `aprendizados.md`.
> Material antigo cronológico em `anotacoes-antigo.md`.

---

## 🚀 1. RITUAL DE CADA DIA

| Quando | Comando | Por quê |
|---|---|---|
| Início | `git pull origin main` | Trazer mudanças do GitHub |
| Início | `mkdir dia-XX` + `cd dia-XX` | Criar/entrar na pasta do dia ANTES de criar arquivos |
| Durante | `git status` | Ver o que mudou |
| Fim | `git add .` | Selecionar tudo pra subir |
| Fim | `git commit -m "msg"` | Tirar a "foto" da versão |
| Fim | `git push origin main` | Subir tudo pro GitHub |

> ⚠️ PowerShell não aceita `&&`. Faz um comando por linha.
> ⚠️ Uma pasta por dia, criada no INÍCIO. Senão vira saco de gatos (tipo a dia-07).

<details>
<summary>📖 Por que precisamos de Git?</summary>

Git tira "fotos" (commits) do código. GitHub é a nuvem onde ficam.

**3 motivos:** backup (PC quebrou? tá na nuvem) · histórico (volta versão antiga) · sincronização (casa ↔ escritório).

**⚠️ push não é só sincronização — é BACKUP.** Sem push no fim, o trabalho fica preso só naquele PC.

**Os 3 comandos:**
- `git add .` → seleciona arquivos (local)
- `git commit -m "..."` → cria save point (SÓ no PC)
- `git push origin main` → envia pra NUVEM

`git clone URL` → traz o projeto pra um PC novo (1ª vez só).

**🆘 pull travou com "untracked working tree files would be overwritten":** existe um arquivo local solto (não rastreado) com mesmo nome do que vem da nuvem. Apaga o local (`del pasta\arquivo`) e roda o pull de novo.

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
| Clonar repo (PC novo) | `git clone URL` |
| Autocompletar nome | TAB |

> 🎯 **LER O PROMPT antes de `cd`/`mkdir`.** Ele mostra onde você está (`PS C:\...\dia-12>`). Metade dos perrengues é navegação às cegas.
> 🎯 **`cd ..` é RELATIVO** — sobe UMA pasta de onde você está. Rodar 2x sobe 2 (cuidado pra não sair do projeto).
> 🎯 **Caminho com espaço no nome** (tipo "Matheus Wolf") SEMPRE entre aspas: `cd "C:\Users\Matheus Wolf\estudos-ia"`. Sem aspas, o terminal quebra no espaço.

### 🆘 Quando o terminal "trava" ou dá erro

| Situação | O que fazer | Por quê |
|---|---|---|
| `Cannot find module 'X'` | confere a PASTA: `cd dia-XX` antes de rodar | `node` procura na pasta ATUAL |
| Terminal preso (não digita) | `Ctrl + C` (1-3x) | mata o programa rodando |
| Vários programas presos | clica na 🗑️ (lixeira) + terminal novo | mata o terminal inteiro |
| Não acho o projeto (PC novo) | `Ctrl + R` (Open Recent) no VS Code | lista projetos recentes |

---

## 🎨 3. CATEGORIAS DE CÓDIGO (como ler qualquer linha)

Exemplo: `const idade: number = 35;`

| Categoria | O que é | Como reconhecer |
|---|---|---|
| **Palavra reservada** | vocabulário fixo da linguagem | `const`, `let`, `function`, `if`, `return` — NÃO pode mudar nem inventar |
| **Nome que você cria** | variáveis e funções | foi VOCÊ que batizou (`idade`, `somar`) — pode trocar sem quebrar |
| **Tipo** | vocabulário fixo de tipos | aparecem depois dos `:` — `string`, `number`, `boolean` |
| **Valor** | o dado real | `35`, `"Matheus"`, `true` — texto SEMPRE entre aspas |
| **Símbolo** | pontuação estrutural | `:` `=` `;` `{ }` `( )` — a "cola" |

> 🎯 **Regra de ouro:** posso mudar o nome sem quebrar? → é nome MEU (variável/função). Não posso, é palavra fixa? → reservada ou tipo.
> ⚠️ **A cor é só um GUIA** — ela MUDA conforme o tema do VS Code. Não decore "roxo = keyword". Confie na categoria, não na cor.

---

## 🔤 4. MÉTODOS DE STRING (manipular texto)

| Método | O que faz | Exemplo |
|---|---|---|
| `.trim()` | tira espaços das pontas | `"  oi  ".trim()` → `"oi"` |
| `.toLowerCase()` | tudo minúsculo | `"OI".toLowerCase()` → `"oi"` |
| `.toUpperCase()` | tudo maiúsculo | `"oi".toUpperCase()` → `"OI"` |
| `.includes("x")` | contém? (true/false) | `"churrasco".includes("rasc")` → `true` |
| `.replace("a","b")` | troca a 1ª ocorrência | `"oi oi".replace("oi","tchau")` → `"tchau oi"` |
| `.split(" ")` | quebra em array | `"a b c".split(" ")` → `["a","b","c"]` |

> 🎯 Método precisa de DONO: `string.metodo()`, nunca solto.
> 🎯 Encadear = grudar numa linha: `entrada.trim().toLowerCase()`
> 🎯 Método não muda a original — retorna NOVA string. GUARDA o resultado.

<details>
<summary>📖 Pra que serve normalizar?</summary>

`===` é literal. "SAIR", "Sair", " sair " não batem com "sair". `entrada.trim().toLowerCase()` vira tudo "sair" antes de comparar. Robusto.

</details>

---

## 🔍 5. REGEX (buscar por PADRÃO)

```
const regex = /padrão/;     // entre BARRAS
regex.test(texto)           // bate? → true/false
```

| Símbolo | O que faz | Exemplo |
|---|---|---|
| `\d` | um dígito (0-9) | `/\d/` |
| `+` | um ou mais | `/\d+/` |
| `[abc]` | qualquer um desses | `/[aeiou]/` |
| `^` | começo da string | `/^A/` |
| `$` | fim da string | `/o$/` |
| `{n}` | exatamente n vezes | `\d{8}` |

> 🎯 Contém vs é exatamente: `/\d/` = "tem algum número" · `/^\d+$/` = "é SÓ números"
> 🎯 `^...$` = a string INTEIRA tem que bater

```javascript
const regex = /^\d{8}$/;       // CEP: 8 dígitos
regex.test("01310100");        // true
regex.test("0131");            // false (curto)
regex.test("0131010X");        // false (letra)
```

---

## 📅 6. DATAS (objeto Date)

```
const agora = new Date();   // agora
```

| Método | Pega | ⚠️ Pegadinha |
|---|---|---|
| `.getFullYear()` | ano (2026) | — |
| `.getMonth()` | mês | **JANEIRO = 0!** soma `+1` |
| `.getDate()` | dia (1-31) | `getDate` ≠ `getDay` (dia da semana) |
| `.getHours()` | hora (0-23) | — |
| `.getMinutes()` | minutos (0-59) | — |

```javascript
const mes = agora.getMonth() + 1;   // +1 !
console.log("Hoje é", dia + "/" + mes + "/" + ano);
```

---

## 🔷 7. TYPESCRIPT (JS com checagem de tipos)

**O que é:** JavaScript que avisa erro ENQUANTO você digita. É um corretor ortográfico (NÃO um Copilot — ele não escreve por você, só aponta). Arquivo `.ts`.

| | JavaScript | TypeScript |
|---|---|---|
| Vê o erro | ao rodar | enquanto digita |
| Tipos | adivinha | você declara |

### Rodar um .ts

> ⚠️ O Node NÃO entende `.ts`. Precisa compilar pra `.js` primeiro (`.ts → .js → roda`).
> 🎯 Atalho: `npx tsx arquivo.ts` (compila e roda de uma vez).
> 🎯 Instala 1x global: `npm install -g tsx` (aí funciona em qualquer pasta sem perguntar).

### Os 3 tipos básicos

`string` (texto) · `number` (número) · `boolean` (true/false)

### Anotar tipo

| Onde | Sintaxe |
|---|---|
| Variável | `let idade: number = 35;` |
| Função (entrada + saída) | `function somar(a: number, b: number): number { }` |
| Objeto inteiro | interface (ver abaixo) |
| Array | `let nomes: string[]` · `let users: Usuario[]` |

> 🎯 Na função: tipos das entradas nos parênteses, tipo da saída DEPOIS do `)`.
> 🎯 **Definição ≠ chamada:** na definição vão TIPOS (`a: number`), na chamada vão VALORES (`somar(7, 4)`).
> ⚠️ `console.log(somar)` sem `()` mostra `[Function]` — esqueceu de CHAMAR.

### Interface (molde de objeto)

```typescript
interface Usuario {
   nome: string;      // ; no fim de cada linha (não vírgula)
   idade: number;
   email?: string;    // ? = OPCIONAL (pode faltar)
}

const u: Usuario = { nome: "Matheus", idade: 35 };   // carimba com :
```

| Recurso | O que faz |
|---|---|
| `interface Nome { }` | cria molde (Maiúscula por convenção) |
| `campo: tipo;` | obriga o campo |
| `campo?: tipo;` | campo OPCIONAL (pode faltar) |
| `Usuario[]` | array de objetos nesse formato ← é o `historico` tipado! |

> ⚠️ **TS tem FRESTAS:** campo extra dentro de array pode passar batido sem erro. Não confie 100% no "se não sublinhou, tá certo". A interface deve refletir os campos reais.

### Quando usar TS vs JS (trade-off)

| Usa JS puro | Usa TS |
|---|---|
| script rápido/rascunho | projeto grande e duradouro |
| aprendendo um conceito | lida com dinheiro (erro caro) |
| protótipo descartável | equipe, manutenção longa (Next.js já é TS) |

> TS sempre vira JS no fim. É trabalho extra na escrita pra ganhar segurança na manutenção.

---

## 📐 8. ESTRUTURA DE CHATBOT (6 BLOCOS)

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
| 2 | `if entrada === "sair"` → mostra totais, `rl.close()` e `break` |
| 3 | `historico.push USER` |
| 4 | `try {` |
| 5 | `await client.messages.create(...)` |
| 6 | Extrai `textoResposta` (com `.content[0].text`) |
| 7 | `historico.push ASSISTANT` |
| 8 | Soma contadores + mostra resposta |
| 9 | `} catch (erro) {...}` |

> ⚠️ try/catch é UMA estrutura: passos 5-8 dentro do `try`, UM `catch` no fim.
> ⚠️ `rl.close()` antes do `break`, senão o programa não encerra.
> ⚠️ O `while` mora DENTRO da `main()`. Cuidado com `}` a mais.

<details>
<summary>📖 Por que main() na última linha?</summary>

`async function main() {}` só DECLARA. Só EXECUTA quando você chama: `main();`. Declarar ≠ executar.

</details>

---

## 🎭 9. ROLES DA API

| Role | Quem é | Onde fica |
|---|---|---|
| `system` | Personalidade do bot | Campo separado `system:` |
| `user` | A pessoa usando | Dentro do `messages` |
| `assistant` | O Claude respondendo | Dentro do `messages` |

> 🎯 Primeira msg SEMPRE `user`. Alterna user → assistant → user...

<details>
<summary>📖 Detalhes profundos sobre roles</summary>

**System:** instrução de fundo, define quem o Claude é. Campo `system:` separado.
**User:** a pessoa real, ou dados que você fabrica (extrato do Supabase).
**Assistant:** o Claude respondendo; guarda o que ele já disse (memória).

**No projeto:** system fixo (consultor BR), user do frontend, assistant acumulado no Supabase.

</details>

---

## 🌡️ 10. TEMPERATURA

| Tarefa | Temp |
|---|---|
| Classificar / extrair / calcular / fato | **0** |
| Conversa profissional séria | **0.3** |
| Chat geral | **0.5** |
| Brainstorm/criatividade | **0.7-1.0** |

> Padrão é `0`. Sobe só quando criatividade tem valor.

<details>
<summary>📖 Por que classificação é sempre 0?</summary>

Classificar precisa de CONSISTÊNCIA, não criatividade. Temp 0 = mesmo input, mesma resposta sempre. Toda vez que existe resposta "certa" (extrair, classificar, calcular, sim/não), temp 0.

</details>

---

## 💰 11. PRICING DOS MODELOS (USD por milhão de tokens)

| Modelo | Input | Output | Quando usar |
|---|---|---|---|
| Haiku 4.5 | $1 | $5 | Tarefas simples, classificação |
| Sonnet 4.5/4.6 | $3 | $15 | Análise, código, equilíbrio |
| Opus 4.7/4.8 | $5 | $25 | Decisões críticas, raciocínio |

> Output é ~5x mais caro que input.

<details>
<summary>📖 Como isso afeta a margem do SaaS</summary>

A escolha de modelo decide se o app é lucrativo. Classificar gasto → Haiku. Analisar balanço → Sonnet. Cálculo crítico → Opus. O orquestrador escolhe o modelo por subtarefa. Tudo no Opus quebra a margem; tudo no Haiku entrega qualidade ruim.

</details>

---

## 🧠 12. MEMÓRIA — A LÓGICA

```
Claude NÃO LEMBRA entre chamadas.
Memória = VOCÊ reenvia histórico via messages.
```

| Quando | O que faz |
|---|---|
| Início | `const historico = []` |
| Antes da API | `historico.push({ role: "user", content: entrada })` |
| Na chamada | `messages: historico` |
| Após resposta | `historico.push({ role: "assistant", content: textoResposta })` |

> ⚠️ Esquecer o push do assistant → bot esquece o que ele disse.
> 🎯 `historico` = array de mensagens (`const`). Contadores = números separados (`let`, mudam com `+=`). NÃO aninha contador no histórico.

<details>
<summary>📖 Por que DOIS pushes?</summary>

Só com push do user, o Claude nunca vê o que ELE respondeu e a API reclama (mensagens devem alternar). Os 2 pushes mantêm a conversa coerente. Em app real, o Supabase guarda isso entre sessões.

</details>

---

## 🔌 13. CHAMADA SIMPLES À API

```javascript
import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const resposta = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 300,
  temperature: 0,
  system: "Personalidade aqui",
  messages: [{ role: "user", content: "pergunta" }]
});

console.log(resposta.content[0].text);
console.log("Input:", resposta.usage.input_tokens);
console.log("Output:", resposta.usage.output_tokens);
```

> 🎯 Imports: caminho SEMPRE entre aspas. dotenv é o esquisito: `import "dotenv/config";` (sem from, sem nome).

---

## 💬 14. CHATBOT COMPLETO

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

## 🚨 15. ERROS QUE EU SEMPRE COMETO

> 🔥 **As que mais me pegam:** autocomplete do VS Code mentindo + nome de variável com espaço.

### Digitação / sintaxe

| Erro | Sintoma | Como evitar |
|---|---|---|
| Autocomplete mente (`ProcessingInstruction` p/ `process`) | runtime quebra | LER o que o IntelliSense sugere antes do TAB |
| Nome de variável com espaço (`texto Resposta`) | "is not defined" | nome é UMA palavra: camelCase |
| Aspas misturadas (`"..."` vs `'...'`) | cores erradas | abre e fecha com o MESMO tipo |
| `.` virou `;` no meio (`usage;output`) | erro de sintaxe | `.` navega pra dentro, `;` só encerra |
| `=` em vez de `:` em objeto | sublinhado | dentro de `{}`: usa `:` |
| Vírgula faltando | erro | sempre vírgula, menos no último |
| Import sem aspas / com `from` no dotenv | erro | caminho entre aspas; `import "dotenv/config";` |
| `new Promise(resolve)` (falta 1 parêntese) | "Malformed arrow function" | precisa de 2: `new Promise((resolve) => ...)` |
| Typo no nome do arquivo (`date`/`dates`) | "Cannot find module" | use TAB |

### Estrutura / conceito

| Erro | Sintoma | Como evitar |
|---|---|---|
| Esquecer `const` na frente | vira global | `const` por padrão |
| `function nome =` (mistura sintaxes) | erro | escolhe UMA: `function nome(){}` OU `const nome = () =>{}` |
| Parâmetro com operação (`(tokens * preco)`) | erro | parênteses recebem NOMES, conta vai no corpo |
| `se`/`então` em vez de `if` (pseudocódigo) | "Unexpected identifier" | cola é mapa PT; código é a tradução |
| Nome diferente def vs uso (`pergunta`/`perguntar`) | "is not defined" | nome IDÊNTICO, letra por letra |
| Esquecer `.text` em `content[0]` | mostra `[object Object]` | `resposta.content[0].text` |
| **(TS)** definição com VALOR (`a: 7`) | erro | na definição vai TIPO (`a: number`); valor é na chamada |
| **(TS)** `console.log(somar)` sem `()` | mostra `[Function]` | CHAMA com `somar(7, 4)` |
| `try` sem `catch` | erro | try sempre vem com catch |
| `}` a mais (fecha bloco cedo) | lógica quebra | `Shift+Alt+F` pra ver a estrutura |
| Esquecer `main();` | nada roda | última linha |
| Não salvar antes de rodar | roda versão antiga | `Ctrl+S` (bolinha ● = não salvo) |
| `messages` sem `[ ]` | erro de tipo | messages SEMPRE array |

---

## 🔐 16. SEGURANÇA — CHECKLIST

- [ ] `.env` na pasta do projeto (nunca commitar)
- [ ] `.gitignore` tem linha `.env`
- [ ] Antes de print: FECHA aba do `.env`
- [ ] Antes de `git push`: `git status` e confirma que `.env` NÃO aparece
- [ ] Chave exposta: REVOGA no console.anthropic.com

---

## 📦 17. PROJETO DO CLIENTE — OS 3 PILARES

1. **DADO** → qualidade do contexto (Open Finance, Twelve Data)
2. **PROMPT** → como instruo o Claude
3. **ORQUESTRAÇÃO** → minha lógica decidindo qual agente/modelo usar

> A inteligência está no ORQUESTRADOR, não no Claude.

---

## 🎯 18. ARQUITETURA DO PROJETO

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

| Stack | Função | Status |
|---|---|---|
| Next.js 15 | Frontend + App Router | Módulo 7 (Dia 71+) |
| Supabase | Auth + DB | Módulo 7 (Dia 75+) |
| Claude API | Motor IA | Módulo 3 (já comecei) |
| MCP | Conectar Claude a sistemas externos | Módulo 5 (Dia 46+) |
| Open Finance | Dados bancários BR | Via MCP |
| Twelve Data | Preços de ações BR (.SA) | Módulo 6 |
| Vercel | Deploy | Módulo 7 |