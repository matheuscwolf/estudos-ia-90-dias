# Anotações - 90 dias de IA

---

## 📅 Dia 1 — JavaScript: fundamentos

### const
- **O que é:** declara uma variável cujo valor **não pode** ser reatribuído depois.
- **Sintaxe:** `const nome = "Matheus";`
- **Quando usar:** sempre que possível. É o padrão. Use `const` por default.
- **Pegadinha:** se você tentar reatribuir (`nome = "outro"`), dá erro `TypeError: Assignment to constant variable`.

### let
- **O que é:** declara uma variável cujo valor **pode** ser reatribuído.
- **Sintaxe:** `let contador = 0; contador = 1;`
- **Quando usar:** apenas quando o valor precisa mudar (contador, acumulador, loop).
- **Pegadinha:** se você não precisa mudar, não use `let`. Use `const` por segurança.

### console.log()
- **O que é:** comando que imprime valores no terminal. É seu "olho" dentro do código.
- **Sintaxe:** `console.log(valor1, valor2, ...);`
- **Aceita qualquer coisa:** strings, números, variáveis, objetos, arrays.
- **Pegadinha:** múltiplos valores saem separados por espaço, na mesma linha.

### Tipos primitivos
- `number` → números (inteiros ou decimais): `42`, `3.14`, `-7`
- `string` → texto entre aspas: `"olá"`, `'oi'`, `` `crase` ``
- `boolean` → `true` ou `false`
- `null` → "nada" intencional (você explicitamente colocou nada)
- `undefined` → valor não definido ou inexistente (JS retorna isso quando algo não existe)

### typeof
- **O que faz:** retorna uma string com o tipo da variável.
- **Sintaxe:** `typeof minhaVariavel`
- **Exemplo:** `typeof 42` retorna `"number"`.
- **Pegadinha histórica:** `typeof null` retorna `"object"`. É um bug do JavaScript desde 1995 que nunca foi corrigido. Aceita e segue.

### Aspas: a diferença muda tudo
- `42` → number (você pode somar)
- `"42"` → string (você concatena)
- **Exemplo crítico:** `5 + 3 = 8` mas `"5" + "3" = "53"` (junta texto).
- Esse é um dos erros mais comuns ao consumir dados de APIs.

### Array
- **O que é:** lista ordenada de valores.
- **Sintaxe:** `const lista = [1, 2, 3, "quatro"];`
- **Como acessar:** `lista[0]` pega o primeiro, `lista[1]` o segundo, etc.
- ⚠️ **Começa em 0**, não em 1. "Segundo elemento" = índice 1.
- **Tamanho:** `lista.length` retorna quantos elementos têm.
- **Pegadinha:** acessar índice inexistente (`lista[10]`) retorna `undefined`, não dá erro.

### Objeto
- **O que é:** coleção de pares chave-valor.
- **Sintaxe:** `const pessoa = { nome: "Ana", idade: 30 };`
- **Como acessar:** `pessoa.nome` → `"Ana"`.
- **Pegadinha:** chave inexistente (`pessoa.altura`) retorna `undefined`.

### Array de objetos (padrão crítico)
- **Por que é importante:** é o formato que praticamente toda API retorna. Lista de produtos, mensagens, transações, cotações... tudo vem assim.
- **Exemplo:**
```javascript