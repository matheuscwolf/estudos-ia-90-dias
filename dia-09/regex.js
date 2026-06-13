const texto = "abc123";

const regex = /\d/;                   // o padrão: "um dígito"
const temNumero = regex.test(texto);  // o texto tem esse padrão? → true/false

console.log(temNumero);               // true