const cep = "0131100";

const regex = /^\d{8}$/;          // começo + 8 dígitos + fim
const valido = regex.test(cep) ;              // testa o cep
console.log(valido);              // true

// depois testa com "0131" (curto) e "0131010X" (tem letra) → devem dar false