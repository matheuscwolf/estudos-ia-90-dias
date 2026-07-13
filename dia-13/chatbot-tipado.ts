interface Mensagem {
    role: string;
    content: string;
}

const historico: Mensagem[] = [];

historico.push({ role: "user", content: "Olá"});
historico.push({ role: "assistant", content: "Oi, como posso ajudar?" });


console.log(historico);

function calcularCusto(tokensEntrada: number, tokensSaida: number): number {
   const custoEntrada = (tokensEntrada / 1000000) * 1.0;
   const custoSaida = (tokensSaida / 1000000) * 5.0;
   return custoEntrada + custoSaida;
}

console.log(calcularCusto(64, 212));