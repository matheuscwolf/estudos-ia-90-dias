const frutas = ["maçã", "banana", "uva", "laranja"];

console.log("--- Com for...of ---");
for (const fruta of frutas) {
    console.log(fruta);
}

console.log("--- Com forEach ---");
frutas.forEach((fruta) => {
    console.log(fruta);
});