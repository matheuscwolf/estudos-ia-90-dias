# Anotações - 90 dias de IA

---

## 📅 Dia 1 — JavaScript: fundamentos

### const
- **O que é:** declara uma variável cujo valor **não pode** ser reatribuído depois.
- **Sintaxe:** `const nome = "Matheus";`
- **Quando usar:** sempre que possível. É o padrão.
- **Pegadinha:** se tentar reatribuir, dá `TypeError: Assignment to constant variable`.

### let
- **O que é:** declara uma variável cujo valor **pode** ser reatribuído.
- **Sintaxe:** `let contador = 0; contador = 1;`
- **Quando usar:** apenas quando o valor precisa mudar (contador, acumulador, loop).

### console.log()
- **O que é:** comando que imprime valores no terminal. Seu "olho" dentro do código.
- **Sintaxe:** `console.log(valor1, valor2);`
- Múltiplos valores saem separados por espaço, na mesma linha.

### Tipos primitivos
- `number` → `42`, `3.14`, `-7`
- `string` → `"olá"`, `'oi'`
- `boolean` → `true` ou `false`
- `null` → "nada" intencional
- `undefined` → valor não definido ou inexistente

### typeof
- **O que faz:** retorna uma string com o tipo da variável.
- **Pegadinha:** `typeof null` retorna `"object"` (bug histórico do JS, ignora).

### Aspas: a diferença muda tudo
- `42` → number (você pode somar)
- `"42"` → string (você concatena)
- **Crítico:** `5 + 3 = 8` mas `"5" + "3" = "53"` (junta texto).
### Array
- **O que é:** lista ordenada de valores.
- **Sintaxe:** `const lista = [1, 2, 3, "quatro"];`
- **Acesso:** `lista[0]` (primeiro), `lista[1]` (segundo)...
- ⚠️ **Começa em 0**, não em 1.
- **Tamanho:** `lista.length`
- Acessar índice inexistente retorna `undefined`, não dá erro.

### Objeto
- **O que é:** coleção de pares chave-valor.
- **Sintaxe:** `const pessoa = { nome: "Ana", idade: 30 };`
- **Acesso:** `pessoa.nome`
- Chave inexistente retorna `undefined`.

### Array de objetos
- Formato que praticamente toda API retorna.
- Exemplo:
```javascript
  const clientes = [
    { nome: "Ana", saldo: 1500 },
    { nome: "Bruno", saldo: 200 }
  ];
  clientes[0].nome // "Ana"
```

---

## 🎯 Como montar frases com variáveis (template literal)

Esse é o padrão mais usado em programação. Memorizar a sintaxe abaixo economiza tempo.

### Sintaxe base
- Usa **crase** ` ` ` ` ` ` (não aspas)
- Variáveis vão dentro de `${...}`

### Padrão 1 — Variável solta
```javascript
const nome = "Matheus";
console.log(`${nome}`);
// Saída: Matheus
```

### Padrão 2 — Texto antes da variável
```javascript
console.log(`Olá, ${nome}`);
// Saída: Olá, Matheus
```

### Padrão 3 — Variável com prefixo (R$, %, etc)
```javascript
const preco = 250;
console.log(`R$${preco}`);
// Saída: R$250
```

### Padrão 4 — Múltiplas variáveis numa frase natural
```javascript
const nome = "Ana";
const idade = 28;
const cidade = "São Paulo";
console.log(`${nome}, ${idade} anos, mora em ${cidade}`);
// Saída: Ana, 28 anos, mora em São Paulo
```

### Padrão 5 — Cálculo dentro do `${}`
```javascript
const preco = 100;
console.log(`Com juros: R$${preco * 1.1}`);
// Saída: Com juros: R$110
```

### Padrão 6 — Construindo prompts para IA (uso real)
```javascript
const cliente = "Ana";
const investido = 50000;
const prompt = `Cliente ${cliente} investiu R$${investido}. Analise.`;
```

### Erros comuns
- ❌ `'Olá, ${nome}'` (aspa simples) → sai literal
- ❌ `"Olá, ${nome}"` (aspa dupla) → sai literal
- ❌ `${nome}` (parênteses) → ReferenceError ou sai literal
- ✅ `` `Olá, ${nome}` `` (crase + chaves) → funciona

---

### Condicionais (if / else if / else)
- **Como funciona:** testa condições em ordem, executa o **primeiro** bloco verdadeiro.
- **Sintaxe:**
```javascript
  if (condicao1) {
    // executa se condicao1
  } else if (condicao2) {
    // executa se condicao2 e a anterior foi falsa
  } else {
    // se nenhuma foi verdadeira
  }
```
- ⚠️ Nunca executa "os dois" — só um caminho por vez.
- ⚠️ **Use chaves `{}` sempre**, mesmo com 1 linha só (evita bugs).
- Padrão visual:
if (...) {
comando;
} else if (...) {
comando;
} else {
comando;
}
### Operadores de comparação
- `>` maior que
- `<` menor que
- `>=` maior ou igual
- `<=` menor ou igual
- `===` estritamente igual
- `!==` estritamente diferente
- ⚠️ **Sempre `===`, nunca `==`** (evita conversões malucas).

### Operadores lógicos
- `&&` → E (as duas precisam ser verdadeiras)
- `||` → OU (basta uma)

### .includes()
- Verifica se uma string contém outra. Retorna `true`/`false`.
- `texto.includes("palavra")`
- Versão primitiva do roteador de agentes de IA.

### Operador ternário
- **Sintaxe:** `const x = condicao ? valorSeTrue : valorSeFalse;`
- **Quando usar:** escolha simples entre 2 valores.

### Reatribuição e operadores compostos
- `pontos = pontos + 5` (forma longa)
- `pontos += 5` (forma curta, mesma coisa)
- `pontos -= 3`, `pontos *= 2`, `pontos /= 2`
- `x++` (soma 1), `x--` (subtrai 1)

---

## 🐛 Erros comuns que aprendi a reconhecer

| Erro | Significa | Causa comum |
|---|---|---|
| `SyntaxError: Unexpected token` | Sintaxe quebrada | Aspa não fechada, parêntese faltando, crase trocada |
| `TypeError: Assignment to constant variable` | Tentou mudar uma `const` | Trocar pra `let` |
| `ReferenceError: X is not defined` | Variável não existe | Erro de digitação ou esqueceu de declarar |
| `Error: Cannot find module` | Arquivo não encontrado | Pasta errada no terminal |

---

## 💻 Comandos do terminal

### Navegação
- `pwd` → mostra a pasta atual
- `cd nome-da-pasta` → entra na pasta
- `cd ..` → sobe um nível
- `ls` → lista arquivos da pasta atual
- `cls` → limpa o terminal
- `Seta ↑` → traz o último comando

### Node
- `node arquivo.js` → executa um arquivo JavaScript

### Git essencial
- `git config --global user.name "Nome"` → configura nome (1x só)
- `git config --global user.email "email"` → configura email (1x só)
- `git init` → cria repositório local na pasta atual
- `git add .` → marca todos os arquivos pra incluir no próximo commit
- `git status` → mostra o que mudou e o que vai entrar no commit
- `git commit -m "mensagem"` → registra um "ponto na história"
- `git branch -M main` → renomeia branch atual pra `main`
- `git remote add origin URL` → conecta o repo local ao GitHub
- `git push -u origin main` → envia tudo pro GitHub (1x: com `-u`, depois só `git push`)

### Fluxo diário Git (vai virar automático)
---

## 🔑 Insights do Dia 1

- **Programar é um ciclo:** escreve → salva → roda → vê resultado → ajusta. Repete milhares de vezes.
- **Arquivo guarda só a versão atual.** O terminal guarda histórico de execuções. São coisas diferentes.
- **Erro não é fracasso, é informação.** Cada erro diz exatamente onde olhar.
- **Editor vs terminal:** código JavaScript vai no editor. Comandos (`git`, `node`, `cd`) vão no terminal.
- **`.includes()` + `if` = roteador primitivo.** É o que o Claude vai fazer com mais inteligência depois.
- **Array de objetos é o formato universal de APIs.** Internalizar agora facilita tudo.
- **Use chaves `{}` em if/else sempre**, mesmo com 1 linha (bug famoso do "goto fail" da Apple foi assim).
- **Primeiro commit feito.** O repositório `estudos-ia-90-dias` agora é meu portfólio público.

---

## 📅 Dia 2 — Funções, arrow functions, destructuring

### O que é uma função
- **Conceito:** um "mini-programa reutilizável" com nome.
- **Por quê usar:** evita repetir código. Escreve uma vez, chama N vezes.
- **Analogia:** uma cafeteira. Você coloca ingredientes (entrada), aperta o botão (chamada), sai café (saída).

### Function tradicional (sintaxe clássica)
```javascript
function nomeDaFuncao(parametro1, parametro2) {
    return parametro1 + parametro2;
}
```

### Arrow function (sintaxe moderna — padrão em 2026)
3 formas de escrever a MESMA função:

```javascript
// Versão 1 — function tradicional (raro em código novo)
function somar(a, b) {
    return a + b;
}

// Versão 2 — arrow normal (com chaves e return)
const somar = (a, b) => {
    return a + b;
};

// Versão 3 — arrow compacta (1 linha de cálculo retornado)
const somar = (a, b) => a + b;
```

**Quando usar a versão compacta:**
- Função tem **uma linha só** que retorna um valor
- Pode tirar: chaves `{}`, palavra `return`
- Se tiver **1 parâmetro só**, também pode tirar os parênteses: `x => x * 2`

**Quando NÃO cabe na compacta:**
- Função com várias linhas
- Função com `console.log` antes do retorno
- Função com lógica condicional

### 🧱 Checklist mental da arrow function (7 passos)
Pra não esquecer nada ao escrever uma arrow function:

1. ✅ Começa com `const` e o nome → `const calcularDobro`
2. ✅ `=` (atribuição)
3. ✅ `(parametros)` → `(a, b)` — ou só `a` se for 1 só
4. ✅ A seta `=>`
5. ✅ Chaves `{ }` envolvendo o corpo (exceto se compacta)
6. ✅ Dentro: `console.log(...)` OU `return ...`
7. ✅ Quando chamar: `nomeDaFuncao(argumentos)` — **com parênteses no final**

### ⚠️ 4 erros comuns ao escrever arrow function

1. **Esquecer a seta `=>`**
```javascript
   const dobrar = (x) { return x * 2 }   // ❌ falta a seta
   const dobrar = (x) => { return x * 2 } // ✅
```

2. **Esquecer as chaves quando precisa**
```javascript
   const dobrar = (x) => console.log(x), return x * 2   // ❌
   const dobrar = (x) => { console.log(x); return x * 2; } // ✅
```

3. **Usar nomes diferentes nos parâmetros e no corpo**
```javascript
   const dobrar = (x) => y * 2   // ❌ recebe x mas usa y
   const dobrar = (x) => x * 2   // ✅
```

4. **Chamar a função sem parênteses**
```javascript
   const resultado = calcularDobro    // ❌ só copia a referência
   const resultado = calcularDobro(3, 4)  // ✅ executa de verdade
```

### console.log vs return — a diferença CRUCIAL

| | console.log | return |
|---|---|---|
| O que faz | **Imprime** na tela | **Devolve** valor pra fora da função |
| Quem usa o valor | Você (humano) vê | Outro código usa |
| Depois que acaba | Valor some | Valor pode ser guardado em variável |
| Pra que serve | Debug (investigação) | Produzir resultado útil |

**Analogia:**
- `console.log` = chef prova a comida (só ele vê)
- `return` = garçom entrega o prato (cliente recebe)

**Regra prática:** funções de IA quase sempre usam `return`, não `console.log`. `console.log` fica pra debug temporário.

### 🎯 Conceito-chave: variável recebe o RETORNO da função

Quando você escreve:
```javascript
const a = somar(3, 4);
```

A variável `a` recebe o que a função **devolve** (7), **não** os argumentos que entraram (3 e 4).

Os argumentos (3, 4) são "consumidos" pela função. O `7` é o resultado guardado.

### Destructuring (desempacotar)

**O problema que resolve:** extrair várias propriedades de um objeto sem repetir o nome do objeto.

```javascript
// Sem destructuring (chato)
const nome = produto.nome;
const preco = produto.preco;
const categoria = produto.categoria;

// Com destructuring (1 linha)
const { nome, preco, categoria } = produto;
```

**Regras:**
- Os nomes dentro de `{}` precisam ser **idênticos** às chaves do objeto
- A ordem dentro de `{}` **não importa**
- Você pode pegar **só algumas** propriedades, não precisa pegar todas

**Atenção:** as chaves `{}` aparecem em 2 contextos diferentes:
- `const x = { nome: "Ana" }` → criando objeto (chaves depois do `=`)
- `const { nome } = x` → destructuring (chaves antes do `=`)

### Destructuring de array

Funciona igual, mas com **colchetes `[]`** e por **posição** (não por nome):

```javascript
const cores = ["vermelho", "verde", "azul"];
const [primeira, segunda, terceira] = cores;
// primeira = "vermelho", segunda = "verde", terceira = "azul"
```

### Destructuring direto no parâmetro de função

Padrão MUITO comum em código moderno (React, Node, Claude SDK):

```javascript
// Sem destructuring no parâmetro
const apresentar = (pessoa) => {
    console.log(`${pessoa.nome}, ${pessoa.idade} anos`);
};

// Com destructuring no parâmetro
const apresentar = ({ nome, idade }) => {
    console.log(`${nome}, ${idade} anos`);
};
```

A segunda forma "abre" o objeto na hora de receber. Mais limpo dentro do corpo.

### Parâmetro vs Argumento (vocabulário)

| Termo | O que é | Onde aparece |
|---|---|---|
| **Parâmetro** | "Espaço" da função | Na **definição**: `(a, b)` |
| **Argumento** | Valor real passado | Na **chamada**: `funcao(3, 4)` |

### Pontuação em JavaScript

| Estrutura | Separador entre itens | Fim |
|---|---|---|
| Objeto `{ a, b, c }` | **vírgula** `,` | `;` no final do objeto inteiro |
| Array `[ a, b, c ]` | **vírgula** `,` | `;` no final do array |
| Argumentos `funcao(a, b, c)` | **vírgula** `,` | `;` no final da linha |
| Template literal | nenhum | precisa de **crase** ` antes e depois |

**Regra geral:** vírgula é a separadora universal de "lista de coisas". Ponto-e-vírgula `;` termina **instruções** (linhas completas).

---

## 🎯 3 Técnicas pra aprender a escrever do zero

Quando travar em um exercício novo, use uma dessas:

### Técnica 1 — Tradução reversa
1. Pega um código que entende
2. Apaga tudo
3. Reescreve do zero, sem olhar
4. Compara no final
5. Repete até sair automático

**Por quê funciona:** você reproduz padrões em vez de inventar do zero. É como decorar uma receita reescrevendo.

### Técnica 2 — Pseudocódigo antes do código
Antes de escrever JavaScript, escreve em português usando comentários:

```javascript
// 1. Vou criar uma função que recebe preço e desconto
// 2. Ela calcula o desconto em reais
// 3. Retorna o preço final
```

Depois traduz cada comentário pra JavaScript. Separa "**pensar a lógica**" de "**traduzir pra sintaxe**".

### Técnica 3 — Variação de exemplos
Pega um código que funciona. Mantém a **estrutura**, troca os **ingredientes**.

Exemplo:
```javascript
// Original
const calcularDesconto = (preco, desconto) => preco * desconto / 100;

// Variações sua:
const calcularImposto = (salario, aliquota) => salario * aliquota / 100;
const calcularComissao = (venda, taxa) => venda * taxa / 100;
```

**Por quê funciona:** você "começa do zero" mas com rede de segurança.

---

## 🔑 Insights do Dia 2

- **Funções são a peça mais importante de programação.** Tudo é função: agentes, chamadas API, integrações.
- **`return` > `console.log`** pra código real. `console.log` é só ferramenta de debug.
- **Variável que recebe função guarda o RETORNO, não o argumento.** Conceito que destrava 90% da confusão inicial.
- **Arrow function é o padrão moderno.** Vai aparecer em 99% do código JavaScript em 2026.
- **Destructuring economiza linhas e fica em 100% das chamadas de API.** Quando Claude retornar, você vai usar destructuring pra pegar `content`, `usage`, etc.
- **Nomes de variáveis não importam pro computador, importam MUITO pra humanos.** Use nomes descritivos.
- **Pontuação importa em JavaScript.** Vírgulas separam, ponto-e-vírgulas terminam, crases marcam template literal.
- **Erro de sintaxe não é fracasso, é a forma do JavaScript dizer "olha aqui".** Lê o erro, vê a setinha `^^^`, corrige.

**Esse padrão `filter → map → reduce` é a ferramenta de processamento de dados mais usada em qualquer aplicação séria.**

---

## ⚠️ Armadilhas comuns

### 1. Vírgula em vez de ponto no decimal
- ❌ `0,9` (separador português)
- ✅ `0.9` (separador JavaScript)

Em JS, vírgula tem outro significado. `0,9` causa `NaN` ou comportamento estranho.

### 2. Esquecer de acessar a propriedade
Quando o array é de objetos, lembrar de pegar a propriedade certa:
- ❌ `produtos.map((p) => p * 0.9)` → multiplica objeto inteiro por 0.9 → `NaN`
- ✅ `produtos.map((p) => p.preco * 0.9)` → multiplica o preço

### 3. Esquecer comparação no filter
- ❌ `produtos.filter((p) => "eletrônico")` → retorna a string, não compara
- ✅ `produtos.filter((p) => p.categoria === "eletrônico")` → compara

### 4. Parênteses faltando em arrow function dentro de método
- ❌ `numeros.forEach(n) => n * 2)` → 1 parêntese a menos
- ✅ `numeros.forEach((n) => n * 2)` → 2 níveis de parênteses

### 5. NaN ("Not a Number")
JavaScript devolve `NaN` quando tenta fazer operação matemática com algo que não é número (objeto, string não numérica, undefined). Sempre que ver `NaN`, investigar **o que tá entrando** na operação.

---

## 🎯 Como decidir qual método usar

Pergunta-chave: **"Eu quero ficar com o quê no final?"**

| Quero... | Use |
|---|---|
| Imprimir cada item / fazer algo sem precisar de resultado | `forEach` |
| Uma nova lista com os itens transformados | `map` |
| Uma lista com só alguns itens | `filter` |
| Um número/valor único combinando tudo | `reduce` |
| Os itens e também o índice | `for` tradicional |
| Percorrer e poder parar no meio | `for...of` (com `break`) |

---

## 🔑 Insights do Dia 3

- **Loops são a base de processamento de dados.** Sem loop, você só consegue trabalhar com volumes minúsculos.
- **Métodos funcionais (`map`, `filter`, `reduce`) são mais expressivos que `for` tradicional.** O código diz **o que** quer fazer em vez de **como**.
- **`map` é o método mais usado em código de IA.** Especialmente pra extrair propriedade: `array.map((x) => x.prop)`.
- **`filter` retorna `true` ou `false`.** Função do filter é um "teste" pra cada item.
- **`reduce` parece complexo mas é mecânico.** Acumulador + item atual + valor inicial. Domina a tabela passo a passo e fica fácil.
- **Encadeamento (`filter().map().reduce()`) é o padrão profissional.** É como você vai processar respostas do Claude.
- **Erros de `NaN` quase sempre são problema de tipo.** Tá tentando fazer matemática com algo que não é número.
- **Decimal em JavaScript é `.` (ponto), não `,` (vírgula).** Pegadinha pra brasileiros.
- **Programar é "tentativa + correção" em ciclo.** Você fez 4 tentativas até acertar o `4950`. Isso é normal.

---

# 📅 DIA 4 — Programação Assíncrona

> **Tema:** Como o JavaScript lida com tarefas que demoram (APIs, banco de dados, timers).
> **Por que importa:** Toda chamada externa (Claude, Open Finance, Supabase) é assíncrona. Sem isso, não tem projeto.

---

## 🌀 1. Síncrono vs Assíncrono

- **Síncrono:** uma linha por vez, em ordem. Se uma trava, tudo trava.
- **Assíncrono:** dispara a tarefa e segue rodando. Quando termina, avisa.

```javascript
// Síncrono — bloqueante
const x = somar(2, 3);
console.log(x); // 5

// Assíncrono — não-bloqueante
setTimeout(() => console.log("3s depois"), 3000);
console.log("Roda PRIMEIRO");
```

---

## 📦 2. Promise — a "comanda da pizzaria"

Promise = **promessa** de um valor futuro. 3 estados:
- `pending` → ainda processando
- `fulfilled` → deu certo (chama `resolve`)
- `rejected` → deu erro (chama `reject`)

```javascript
function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, nome: "Matheus" }); // sucesso
      // reject(new Error("Deu ruim!")); // falha
    }, 1000);
  });
}
```

---

## ⚡ 3. async / await — a sintaxe moderna

### Regras de ouro

1. **`async`** marca uma função como assíncrona. Faz ela **sempre retornar uma Promise**.
2. **`await`** pausa a execução da função `async` até a Promise resolver. Devolve o valor **desembrulhado**.
3. `await` **só funciona dentro de `async`**.

### Sem await x Com await (o "clique" mental)

```javascript
async function teste() { return 42; }

const a = teste();        // Promise { 42 } ← caixa fechada
const b = await teste();  // 42 ← presente desembrulhado
```

### Versão antiga (.then) vs moderna (async/await)

```javascript
// 😵 .then aninhado (callback hell)
buscarUsuario(1).then(u => {
  buscarPedidos(u.id).then(p => console.log(p));
});

// 😎 async/await (linear, lê de cima pra baixo)
async function main() {
  const u = await buscarUsuario(1);
  const p = await buscarPedidos(u.id);
  console.log(p);
}
```

---

## 🆘 4. try / catch — sobrevivência em produção

```javascript
try {
  // código que PODE dar erro
} catch (erro) {
  // o que fazer SE der erro
}
```

- **Sem try/catch:** Promise rejeitada → app explode com stack trace feio (`UnhandledPromiseRejection`).
- **Com try/catch:** erro é capturado, programa segue vivo.

```javascript
async function chamarApi() {
  try {
    const resposta = await algumaApi();
    return resposta;
  } catch (erro) {
    console.log("API falhou:", erro.message);
  }
}
```

**⚠️ TEMPLATE pra decorar — vou usar 1000 vezes daqui pra frente.**

---

## 🌐 5. fetch — chamada HTTP real

`fetch` = função nativa do JavaScript pra falar com servidores na internet.

### Receita básica

```javascript
const resposta = await fetch("https://url-da-api.com/endpoint");
const dados = await resposta.json();
```

- **1º await:** espera o servidor responder (cabeçalhos).
- **2º await:** espera o corpo + converte JSON em objeto JS.

### Validações importantes

```javascript
if (!resposta.ok) {
  throw new Error(`Erro HTTP ${resposta.status}`);
}
```

`resposta.ok` é `true` quando o status é 200–299. Senão, deu ruim.

---

## 🇧🇷 6. Mini-projeto: Buscador de CEP (ViaCEP)

**API usada:** `https://viacep.com.br/ws/CEP/json/`

**Conceitos aplicados:**
- async/await
- try/catch
- fetch
- template literal (`` `${cep}` ``)
- throw new Error
- validação dupla (status HTTP + campo `erro` no JSON)
- limpeza de input (`replace(/\D/g, "")`)

**Resultado:** consultei 3 CEPs reais (Avenida Paulista, Praça Pio X no Rio, e um inválido) — todos tratados corretamente. ✅

---

## 🎯 Conexão com o projeto do cliente

| O que aprendi hoje | Onde vou usar |
|---|---|
| `fetch` | Chamar API do Claude, Twelve Data, Open Finance |
| `async/await` | Toda função que fala com servidor externo |
| `try/catch` | Tratamento de erro em produção |
| Validação de resposta | Garantir que dado chegou correto antes de usar |

**Toda API funciona igual:** você pergunta, ela responde. Muda só a URL e os parâmetros.

---

## 🧠 Insights pessoais do dia

- A função `async` **sempre** retorna Promise, mesmo se eu retornar um número. Sem `await`, fico com a caixa fechada.
- API não tem "catálogo aberto" — você pergunta UMA coisa por vez.
- Sem `try/catch`, qualquer queda de internet derruba o app inteiro.
- `Tab` no terminal autocompleta nomes de pasta (salva tempo + evita typo).

---

## 📂 Arquivos criados no Dia 4

- `dia-04/async.js` → exemplo principal de async/await
- `dia-04/teste-async.js` → demonstração `Promise { 42 }` vs `42`
- `dia-04/try-catch.js` → tratamento de erro
- `dia-04/buscador-cep.js` → mini-projeto com API real

---

# 📅 DIA 5 — npm, Módulos e Variáveis de Ambiente

> **Tema:** Sair do "JavaScript solo" e usar bibliotecas profissionais + proteger segredos.
> **Por que importa:** Sem isso, não tem como instalar SDK do Claude, conectar Supabase, ou subir código com segurança.

---

## 📦 1. npm — Gerenciador de Pacotes do Node

- npm = **Node Package Manager**
- Repositório com **+2 milhões de bibliotecas** prontas
- Já vem instalado junto com o Node

### Comandos essenciais
```bash
npm --version              # ver versão
npm init -y                # criar package.json
npm install nome-pacote    # instalar biblioteca
npm i nome-pacote          # mesma coisa (atalho)
```

---

## 📄 2. package.json — O "RG" do Projeto

Arquivo que lista **TUDO** que o projeto precisa pra rodar.

```json
{
  "name": "dia-05",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "axios": "^1.16.1",
    "dotenv": "^17.x.x"
  }
}
```

Se alguém clonar o projeto e rodar `npm install`, baixa tudo automaticamente.

---

## 📂 3. node_modules — A "Despensa" das Bibliotecas

- Pasta gigante onde as bibliotecas baixadas ficam
- **NUNCA editar nada lá dentro**
- **NUNCA subir pro Git** (vai no `.gitignore`)
- Se apagar, é só rodar `npm install` que volta tudo

---

## 🔄 4. CommonJS vs ESM (require vs import)

### CommonJS (antigo, padrão Node "old school")
```javascript
const axios = require("axios");
```
- `package.json` precisa ter `"type": "commonjs"` (ou nada)

### ESM (moderno, padrão JavaScript oficial)
```javascript
import axios from "axios";
```
- `package.json` precisa ter `"type": "module"`
- **Permite top-level await** (await fora de função async)
- **É o que Claude SDK, Next.js, Supabase usam**

### ⚠️ Pegadinha
Mudou pra `"type": "module"`? Arquivos com `require` param de funcionar. Tudo ou nada.

---

## 🌐 5. axios vs fetch

| Característica | fetch (nativo) | axios (biblioteca) |
|---|---|---|
| Precisa instalar? | Não | Sim (`npm i axios`) |
| Pegar JSON | `await r.json()` | `r.data` direto |
| Erro HTTP (404, 500) | Não joga erro | Joga erro automático |
| Timeout | Difícil | `{ timeout: 5000 }` |

```javascript
const resposta = await axios.get(url, { timeout: 5000 });
const dados = resposta.data;
```

---

## 🔐 6. Variáveis de Ambiente (.env)

### Por que existem
**NUNCA colocar chaves de API no código.** Bots varrem o GitHub procurando chaves expostas. Histórias reais de gente perdendo R$ 8.000+ por isso.

### Como funciona
1. Cria arquivo `.env` (com ponto na frente!) na raiz do projeto
2. Formato: `CHAVE=VALOR` (sem aspas, em MAIÚSCULAS)
3. Instala `dotenv`: `npm i dotenv`
4. No código: `import "dotenv/config"`
5. Acessa via `process.env.NOME_DA_VARIAVEL`

### Exemplo
```env
# .env
ANTHROPIC_API_KEY=sk-ant-abc123
VIACEP_BASE_URL=https://viacep.com.br/ws
```

```javascript
// código.js
import "dotenv/config";
const chave = process.env.ANTHROPIC_API_KEY;
const url = process.env.VIACEP_BASE_URL;
```

---

## 🛡️ 7. .gitignore — Blindando o Projeto

Arquivo que diz pro Git "esses arquivos não devem subir pro GitHub".

### Mínimo essencial:
```gitignore
node_modules/
.env
.env.*.local
.DS_Store
*.log
```

### Como verificar se tá protegido
```bash
git status
```
Se `.env` ou `node_modules/` **NÃO aparecerem** na lista → protegido. ✅

### ⚠️ Regra de ouro
Se uma chave **JÁ subiu** pro GitHub, ela tá comprometida pra sempre. **Revogue imediatamente** no painel do serviço e gere outra.

---

## 🏗️ 8. Padrão de Código Profissional (mini-projeto cep-pro.js)

```javascript
import "dotenv/config";
import axios from "axios";

// 📋 Configurações do .env
const BASE_URL = process.env.VIACEP_BASE_URL;

// 🛡️ Fail-fast: morre cedo se faltar config crítica
if (!BASE_URL) {
  console.error("❌ VIACEP_BASE_URL não definida");
  process.exit(1);
}

async function buscarCep(cep) {
  // Validação ANTES de chamar API (economia)
  const cepLimpo = cep.replace(/\D/g, "");
  if (cepLimpo.length !== 8) {
    return null;
  }
  
  try {
    const resposta = await axios.get(`${BASE_URL}/${cepLimpo}/json/`, {
      timeout: 5000
    });
    return resposta.data;
  } catch (erro) {
    if (erro.code === "ECONNABORTED") {
      console.log("Timeout");
    }
    return null;
  }
}
```

**Padrões usados:**
- Validação ANTES da chamada externa (economiza tempo + grana)
- Timeout pra não travar
- Tratamento granular de erro
- Configurações no `.env`, não hardcoded
- Fail-fast: para o programa se faltar config

---

## 🎯 Conexão com o Projeto do Cliente

| O que aprendi hoje | Onde vou usar no projeto |
|---|---|
| `npm install` | Instalar SDK do Claude, Supabase, Next.js |
| `import ... from` | Sintaxe padrão de TUDO no projeto |
| `.env` | Guardar chave do Claude, Twelve Data, Supabase |
| `.gitignore` | Não vazar chaves no GitHub público |
| Validação fail-fast | Não rodar nada sem as chaves carregadas |
| Timeout em axios | API do Claude pode demorar — preciso de timeout |

---

## 💡 Insights pessoais do Dia 5

- `node_modules/` é "descartável" — sempre dá pra recriar com `npm install`
- Salvar o arquivo (`Ctrl+S`) é CRÍTICO antes de rodar — esqueci uma vez e o Node rodou versão antiga
- O `.env` é só um arquivo de texto, mas usa convenção: MAIÚSCULAS com `_`
- ESM permite `await` no topo do arquivo (top-level await) — economia de código
- `Tab` no terminal autocompleta nome de arquivo (continuo usando)

---

## 📂 Arquivos criados no Dia 5

- `dia-05/cep-com-axios.js` → primeiro uso de axios (CommonJS)
- `dia-05/cep-com-import.js` → mesmo código em ESM
- `dia-05/usando-env.js` → primeira leitura de .env
- `dia-05/cep-pro.js` → **MINI-PROJETO FINAL** com tudo junto
- `dia-05/.env` → configurações (NÃO sobe pro Git)
- `dia-05/package.json` → manifesto do projeto


---

# 📅 DIA 6 — Conceitos de IA

## 🤖 O que é um LLM
- LLM = Large Language Model
- Exemplos: Claude, GPT, Gemini, Llama
- **Claude NÃO pensa.** Prevê a próxima palavra mais provável baseado em bilhões de textos.

## 🎯 Os 3 pilares de boa resposta de IA
1. **DADO** — qualidade do contexto/info entregue
2. **PROMPT** — como você instrui
3. **ORQUESTRAÇÃO** — como combina respostas

## 🪙 Tokens — a moeda da IA
- Token = pedaço de texto
- **Regra:** 1 token ≈ 0,75 palavra em português
- **100 tokens ≈ 1 parágrafo curto**
- **1.000 tokens ≈ 1 página A4**

### Input vs Output
- **Input** (o que você manda) = mais barato
- **Output** (o que Claude responde) = ~5x mais caro
- Anthropic cobra pelos DOIS

### Exemplo de custo (Opus 4.7)
- 16k input + 2k output ≈ $0,39 por chamada
- 100 chamadas/dia ≈ ~R$ 200/dia em custo
- **Pricing do SaaS precisa cobrir isso com margem**

## 🪟 Janela de Contexto
- ~200.000 tokens no Claude 4.x
- ≈ 150.000 palavras ≈ ~300 páginas A4
- **Input + Output juntos = janela total**

### 3 limitações CRÍTICAS
1. Input grande deixa menos espaço pra output
2. Claude **esquece TUDO entre chamadas** (sem memória nativa)
3. Contexto muito cheio piora a resposta (Claude perde foco)

## 🎯 Conexão com projeto do cliente
- **Por que precisa de Supabase:** Claude esquece, banco lembra
- **Por que precisa de orquestrador:** decide qual contexto enviar
- **Por que múltiplos agentes:** cada um com contexto enxuto
- **Por que cobrar por uso:** custo varia com tokens

## 💡 Insight de empreendedor
- **Curar contexto > ter contexto grande**
- Mandar TUDO pro Claude é caro E piora qualidade
- Orquestrador é onde mora a inteligência DO PRODUTO (não do Claude)

## ⏳ Faltou (Dia 7)
- Temperatura (criatividade vs precisão)
- System prompt vs User prompt
- Demo no Console da Anthropic
- Comparação Opus vs Sonnet vs Haiku

///
---

# 📅 DIAS 7 e 8 — API do Claude (resumo)

## 🔑 Setup
- console.anthropic.com (≠ claude.ai)
- $5 USD mínimo (≈ R$ 30 com IOF)
- `.env` com `ANTHROPIC_API_KEY=sk-ant-api03-...`
- LIÇÃO CARA: nunca abrir `.env` no editor antes de print

## 📐 Estrutura padrão de chamada (TIER 1 — sabe de cor)

```javascript
import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const resposta = await client.messages.create({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 300,
  temperature: 0,
  system: "personalidade aqui",
  messages: [
    { role: "user", content: "pergunta" }
  ]
});

console.log(resposta.content[0].text);
console.log("Input:", resposta.usage.input_tokens);
console.log("Output:", resposta.usage.output_tokens);
```

## 🎭 Roles
- **system** → personalidade (campo separado, UMA vez)
- **user** → usuário/humano
- **assistant** → Claude
- messages SEMPRE array `[ ]`, alterna user/assistant, primeira e última são user

## 🧠 Memória do Claude
- Claude NÃO LEMBRA entre chamadas
- "Memória" = VOCÊ reenvia histórico no array `messages`
- Cada chamada API é INDEPENDENTE (≠ claude.ai)
- Input cresce a cada mensagem em conversa longa

## 🌡️ Temperatura
- `0` = determinístico (PADRÃO PROFISSIONAL)
- `0.4` = conversação natural
- `0.7-1.0` = criativo (naming, brainstorm)

## 💸 Custos comparados (Haiku 4.5)
- Input: $1/M tokens
- Output: $5/M tokens (5x mais caro)
- System prompt cobra em CADA chamada
- Sonnet: ~13x mais caro que Haiku

## ⚠️ Erros comuns de sintaxe
1. Crase com aspas misturadas → cores ficam erradas
2. Vírgula faltando entre campos
3. `=` em vez de `:` dentro de objeto
4. Variável usada ANTES de declarar
5. `messages` sem colchetes (não é array)
6. Esquecer de SALVAR antes de rodar
7. Typo no nome do arquivo (use TAB pra autocompletar)

## 🎯 Insights
- Claude usa TUDO que está no `messages`, não só a última pergunta
- Posso FABRICAR contexto (mentir pro Claude sobre o que aconteceu)
- Quem programa olha doc TODO dia, decorar é o objetivo errado
- Predição antes de rodar = aprende 3x mais

## 📂 Arquivos criados (Dia 7 e 8)
- primeira-chamada.js, comparando-modelos.js, memoria.js
- system-prompt.js, temperatura.js, chatbot.js
- exercicio-1.js (professor matemática), exercicio-2.js (memória hardcoded)

---