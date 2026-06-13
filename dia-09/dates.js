const agora = new Date();

const ano = agora.getFullYear();
const mes = agora.getMonth() + 1;            // pega o mês e lembra do +1!
const dia = agora.getDate();

console.log("Hoje é", dia + "/" + mes + "/" + ano);