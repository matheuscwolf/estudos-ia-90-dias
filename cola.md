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
| Fim | `cd ..` (voltar pra RAIZ) | O `git add .` só pega da pasta atual pra baixo |
| Fim | `git add .` | Selecionar tudo pra subir |
| Fim | `git commit -m "msg"` | Tirar a "foto" da versão |
| Fim | `git push origin main` | Subir tudo pro GitHub |

> ⚠️ PowerShell não aceita `&&`. Faz um comando por linha.
> ⚠️ Uma pasta por dia, criada no INÍCIO. Senão vira saco de gatos (tipo a dia-07).
> ⚠️ **Antes do `git add .`, volta pra RAIZ** (`cd ..`). Se rodar dentro da `dia-XX`, a cola e arquivos da raiz ficam de fora.

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

**Confirmar que .env está protegido:** `git status --untracked-files=all` lista arquivo por arquivo. Se `dia-XX/.env` NÃO aparecer, tá protegido.

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
| Rodar JS | `node nome.js` |
| Rodar TS | `npx tsx nome.ts` |
| Abrir arquivo rápido | `Ctrl + P` + nome |
| Clonar repo (PC novo) | `git clone URL` |
| Autocompletar nome | TAB |

> 🎯 **LER O PROMPT antes de `cd`/`mkdir`.** Ele mostra onde você está (`PS C:\...\dia-15>`). Metade dos perrengues é navegação às cegas.
> 🎯 **`node`/`npx` procura o arquivo na pasta ATUAL.** Tá noutra pasta? `cd` até ela primeiro.
> 🎯 **`cd ..` é RELATIVO** — sobe UMA pasta de onde você está. Rodar 2x sobe 2 (cuidado pra não sair do projeto).
> 🎯 **Caminho com espaço no nome** ("Matheus Wolf") SEMPRE entre aspas: `cd "C:\Users\Matheus Wolf\estudos-ia"`. Sem aspas, quebra no espaço. (PC de casa não tem espaço, o do escritório tem.)

### 🆘 Quando o terminal "trava" ou dá erro

| Situação | O que fazer | Por quê |
|---|---|---|
| `Cannot find module 'X'` (arquivo) | confere a PASTA: `cd dia-XX` antes de rodar | procura na pasta ATUAL |
| `Cannot find module 'X'` (pacote, tipo dotenv) | pasta nova não tem os pacotes → `npm init -y` + `npm install <pacote>` | cada pasta tem seu `node_modules` |
| Terminal preso (não digita) | `Ctrl + C` (1-3x) | mata o programa rodando |
| Vários programas presos | 🗑️ (lixeira) + terminal novo | mata o terminal inteiro |
| Não acho o projeto (PC novo) | `Ctrl + R` (Open Recent) | lista projetos recentes |
| `npx` pergunta "Ok to proceed? (y)" | digita `y` | pacote não instalado nessa pasta |

---

## 🎨 3. CATEGORIAS DE CÓDIGO (como ler qualquer linha)

Exemplo: `const idade: number = 35;`

| Categoria | O que é | Como reconhecer |
|---|---|---|
| **Palavra reservada** | vocabulário fixo da linguagem | `const`, `let`, `function`, `if`, `return` — NÃO pode mudar |
| **Nome que você cria** | variáveis e funções | VOCÊ batizou (`idade`, `somar`) — pode trocar sem quebrar |
| **Tipo** | vocabulário fixo de tipos | depois dos `:` — `string`, `number`, `boolean` |
| **Valor** | o dado real | `35`, `"Matheus"`, `true` — texto SEMPRE entre aspas |
| **Símbolo** | pontuação estrutural | `:` `=` `;` `{ }` `( )` — a "cola" |

> 🎯 **Regra de ouro:** posso mudar o nome sem quebrar? → é nome MEU. Não posso, é palavra fixa? → reservada ou tipo.
> ⚠️ **A cor é só GUIA** — muda conforme o tema. Confie na categoria, não na cor.

---

## 🔤 4. MÉTODOS DE STRING

| Método | O que faz | Exemplo |
|---|---|---|
| `.trim()` | tira espaços das pontas | `"  oi  ".trim()` → `"oi"` |
| `.toLowerCase()` | tudo minúsculo | `"OI".toLowerCase()` → `"oi"` |
| `.toUpperCase()` | tudo maiúsculo | `"oi".toUpperCase()` → `"OI"` |
| `.includes("x")` | contém? | `"churrasco".includes("rasc")` → `true` |
| `.replace("a","b")` | troca 1ª ocorrência | `"oi oi".replace("oi","tchau")` → `"tchau oi"` |
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
| `^` | começo | `/^A/` |
| `$` | fim | `/o$/` |
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

## 🔷 7. TYPESCRIPT

**O que é:** JS que avisa erro ENQUANTO você digita. É um corretor ortográfico (NÃO um Copilot — não escreve por você, só aponta). Arquivo `.ts`.

### Rodar um .ts

> ⚠️ O Node NÃO entende `.ts`. Precisa compilar pra `.js` primeiro.
> 🎯 Atalho: `npx tsx arquivo.ts` (compila e roda de uma vez).
> 🎯 Instala 1x global: `npm install -g tsx`.
> ⚠️ Node/Process reclamando ("Cannot find name 'process'")? Falta o dicionário de tipos do Node: `npm i --save-dev @types/node`.

### Os 3 tipos básicos

`string` (texto) · `number` (número) · `boolean` (true/false)

### Anotar tipo

| Onde | Sintaxe |
|---|---|
| Variável | `let idade: number = 35;` |
| Função (entrada + saída) | `function somar(a: number, b: number): number { }` |
| Função async | `async function main(): Promise<void> { }` |
| Função que retorna Promise | `function perguntar(t: string): Promise<string> { }` |
| Objeto inteiro | interface (ver abaixo) |
| Array | `let nomes: string[]` · `let users: Usuario[]` |

> 🎯 Na função: tipos das entradas nos parênteses, tipo da saída DEPOIS do `)`.
> 🎯 **Definição ≠ chamada:** na definição vão TIPOS (`a: number`), na chamada vão VALORES (`somar(7, 4)`). ⚠️ MEU ERRO RECORRENTE — não bota valor (`a: 7`, `role: "user"`) na definição!
> 🎯 `Promise<string>` = "promessa DE string". O `< >` diz o que vem dentro quando resolver.
> ⚠️ `console.log(somar)` sem `()` mostra `[Function]` — esqueceu de CHAMAR.

### Interface (molde de objeto)

```typescript
interface Usuario {
   nome: string;      // ; no fim (não vírgula)
   idade: number;
   email?: string;    // ? = OPCIONAL (pode faltar)
}

const u: Usuario = { nome: "Matheus", idade: 35 };   // carimba com :
```

| Recurso | O que faz |
|---|---|
| `interface Nome { }` | cria molde (Maiúscula por convenção) |
| `campo: tipo;` | obriga o campo |
| `campo?: tipo;` | OPCIONAL (pode faltar) |
| `Usuario[]` | array de objetos nesse formato ← é o `historico` tipado! |

> ⚠️ **TS tem FRESTAS:** campo extra dentro de array pode passar batido. Não confie 100% no "se não sublinhou, tá certo".

### Union type (`|` = "ou")

```typescript
role: "user" | "assistant";   // SÓ aceita uma dessas duas
```

> 🎯 Usa quando o valor só pode ser uma de poucas opções fixas. O SDK do Claude EXIGE `role` assim (não aceita `string` genérico).
> 🎯 Union de valores literais É um tipo válido (a exceção da regra "só vai tipo").

### Narrowing (provar o tipo antes de usar)

Quando o TS não sabe o tipo exato, você PROVA com uma checagem:

```typescript
// bloco pode ter vários tipos → provo que é texto:
const texto = bloco.type === "text" ? bloco.text : "";

// erro do catch é 'unknown' → provo que é Error:
catch (erro) {
   const msg = erro instanceof Error ? erro.message : String(erro);
}
```

> 🎯 `? :` = ternário (if/else compacto): `condição ? seVerdadeiro : seFalso`
> 🎯 TS te obriga a PROVAR o que afirma ("isso é texto?" "isso é Error?"). Em JS você chuta; em TS você prova.

### Módulos (separar código em arquivos)

```typescript
// custos.ts
export function calcularCusto(a: number, b: number): number { ... }

// main.ts
import { calcularCusto } from "./custos";   // ./ = mesma pasta, sem .ts
```

| Sintaxe | Nome | Quando |
|---|---|---|
| `import { nome } from "..."` | named (COM chaves) | arquivo exporta várias coisas |
| `import Nome from "..."` | default (SEM chaves) | arquivo tem UMA exportação principal |

> 🎯 Vantagem: lógica mora em UM lugar (fonte de verdade). Muda 1 arquivo, todos que importam pegam o novo.
> 🎯 `export` no arquivo que TEM · `import` no que USA.

### Quando usar TS vs JS

| Usa JS puro | Usa TS |
|---|---|
| script rápido/rascunho | projeto grande e duradouro |
| aprendendo um conceito | lida com dinheiro (erro caro) |
| protótipo descartável | equipe, manutenção longa (Next.js já é TS) |

> TS sempre vira JS no fim. Trabalho extra na escrita pra ganhar segurança na manutenção.

### ⚠️ Ponto flutuante (dinheiro!)

`0.0045` pode virar `0.004500000005` — imprecisão de binário, todo linguagem tem. Pra mostrar dinheiro: `.toFixed(6)`.

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
| 6 | Extrai `textoResposta` |
| 7 | `historico.push ASSISTANT` |
| 8 | Soma contadores + mostra resposta |
| 9 | `} catch (erro) {...}` |

> ⚠️ try/catch é UMA estrutura: passos 5-8 dentro do `try`, UM `catch` no fim.
> ⚠️ `rl.close()` antes do `break`, senão não encerra.
> ⚠️ O `while` mora DENTRO da `main()`. Cuidado com `}` a mais.

<details>
<summary>📖 Por que main() na última linha?</summary>

`async function main() {}` só DECLARA. Só EXECUTA quando chama: `main();`. Declarar ≠ executar.

</details>

---

## 🔷 8b. CHATBOT TIPADO (TS) — o que muda

```typescript
interface Mensagem {
   role: "user" | "assistant";   // union! não string genérico
   content: string;
}

const historico: Mensagem[] = [];
let tokensTotal: number = 0;

function perguntar(texto: string): Promise<string> { ... }
function calcularCusto(e: number, s: number): number { ... }
async function main(): Promise<void> { ... }

// extrair texto com narrowing:
const bloco = resposta.content[0];
const textoResposta = bloco.type === "text" ? bloco.text : "";

// catch tipado:
catch (erro) {
   const msg = erro instanceof Error ? erro.message : String(erro);
}
```

> Setup TS numa pasta nova: `npm init -y` + `npm install dotenv @anthropic-ai/sdk` + `npm i --save-dev @types/node` + copiar `.env`.

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

Classificar precisa de CONSISTÊNCIA, não criatividade. Temp 0 = mesmo input, mesma resposta. Toda vez que existe resposta "certa" (extrair, classificar, calcular, sim/não), temp 0.

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

Só com push do user, o Claude nunca vê o que ELE respondeu e a API reclama (mensagens devem alternar). Os 2 pushes mantêm a conversa coerente. Em app real, Supabase guarda entre sessões.

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

## 💬 14. CHATBOT COMPLETO (JS)

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

> 🔥 **As que mais me pegam:** autocomplete do VS Code mentindo · nome de variável com espaço · valor no lugar de tipo (TS) · `cd ..` esquecido antes do `git add`.

### Digitação / sintaxe

| Erro | Sintoma | Como evitar |
|---|---|---|
| Autocomplete mente (`ProcessingInstruction` p/ `process`) | runtime quebra | LER o que o IntelliSense sugere antes do TAB |
| Nome de variável com espaço (`texto Resposta`) | "is not defined" | nome é UMA palavra: camelCase |
| Aspas misturadas (`"..."` vs `'...'`) | cores erradas | abre e fecha com o MESMO tipo |
| `.` virou `;` no meio (`usage;output`) | erro | `.` entra pra dentro, `;` só encerra |
| `=` em vez de `:` em objeto | sublinhado | dentro de `{}`: usa `:` |
| Vírgula faltando | erro | sempre vírgula, menos no último |
| Import sem aspas / com `from` no dotenv | erro | caminho entre aspas; `import "dotenv/config";` |
| `new Promise(resolve)` (falta parêntese) | "Malformed arrow function" | `new Promise((resolve) => ...)` |
| Typo no nome do arquivo (`date`/`dates`) | "Cannot find module" | use TAB |

### Estrutura / conceito

| Erro | Sintoma | Como evitar |
|---|---|---|
| Esquecer `const` na frente | vira global | `const` por padrão |
| `function nome =` (mistura sintaxes) | erro | escolhe UMA: `function nome(){}` OU `const nome = () =>{}` |
| Parâmetro com operação (`(tokens * preco)`) | erro | parênteses recebem NOMES, conta vai no corpo |
| `se`/`então` em vez de `if` | "Unexpected identifier" | cola é mapa PT; código é a tradução |
| Nome diferente def vs uso (`pergunta`/`perguntar`) | "is not defined" | nome IDÊNTICO, letra por letra |
| Esquecer `.text` em `content[0]` | mostra `[object Object]` | `resposta.content[0].text` |
| **(TS)** VALOR na definição (`a: 7`, `role: "user"`) | erro | na definição vai TIPO; valor é na chamada/objeto |
| **(TS)** `console.log(somar)` sem `()` | mostra `[Function]` | CHAMA com `somar(7, 4)` |
| **(git)** `git add .` dentro da dia-XX | cola/raiz ficam de fora | `cd ..` pra RAIZ antes |
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
- [ ] Antes de `git push`: `git status --untracked-files=all` e confirma que `.env` NÃO aparece
- [ ] Pasta nova com API: copiar o `.env` pra ela também
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

---

## 📆 PROGRESSO

Dias 1-6: JS fundamentos · Dia 7-8: API + chatbot CLI · Dia 9: strings/regex/datas · Dias 10-14: TypeScript (tipos, interfaces, arrays, union, narrowing, chatbot tipado) · Dia 15: módulos. **Próximo: web / servidor HTTP.**