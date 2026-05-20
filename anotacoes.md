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