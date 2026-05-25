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