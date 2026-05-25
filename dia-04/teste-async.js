async function teste() {
  return 42;
}

// VERSÃO 1 — SEM await (a "errada")
const semAwait = teste();
console.log("Sem await:", semAwait);

// VERSÃO 2 — COM await (a "certa")
async function main() {
  const comAwait = await teste();
  console.log("Com await:", comAwait);
}
main();