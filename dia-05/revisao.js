// ========================================
// EXERCÍCIO 1: .map() cria NOVO array
// ========================================

const acoes = [
  { ticker: "PETR4", preco: 38.50 },
  { ticker: "VALE3", preco: 65.20 },
  { ticker: "ITUB4", preco: 32.10 }
];

// Extrai SÓ os tickers (cenário REAL do projeto do cliente)
const tickers = acoes.map(a => a.ticker);

console.log("Original:", acoes);      // ← intacto
console.log("Tickers:", tickers);     // ← novo array

// Dobra todos os preços
const precosDobrados = acoes.map(a => a.preco * 2);
console.log("Preços dobrados:", precosDobrados);


// ========================================
// EXERCÍCIO 2: A pegadinha do async/Promise
// ========================================

async function pegarPreco() {
  return 38.50;
}

// SEM await — pega a CAIXA (Promise)
const semAwait = pegarPreco();
console.log("Sem await:", semAwait);  // Promise { 38.5 }

// COM await — pega o CONTEÚDO (38.50)
const comAwait = await pegarPreco();
console.log("Com await:", comAwait);  // 38.5