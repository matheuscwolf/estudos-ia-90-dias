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