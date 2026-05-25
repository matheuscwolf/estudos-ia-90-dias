// Função que SEMPRE falha de propósito (simula API caindo)
function buscarUsuarioQueDaErro(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Servidor fora do ar! 💥"));
    }, 1000);
  });
}

// ❌ VERSÃO 1 — sem tratamento (app quebra feio)
async function semProtecao() {
  console.log("Tentando buscar usuário...");
  const usuario = await buscarUsuarioQueDaErro(1);
  console.log("Essa linha nunca vai rodar:", usuario);
}

// ✅ VERSÃO 2 — com try/catch (app sobrevive)
async function comProtecao() {
  try {
    console.log("Tentando buscar usuário...");
    const usuario = await buscarUsuarioQueDaErro(1);
    console.log("Essa linha nunca vai rodar:", usuario);
  } catch (erro) {
    console.log("🆘 Deu ruim, mas tô vivo!");
    console.log("Motivo:", erro.message);
  }
  console.log("Programa continua normalmente. 😎");
}

// Roda a versão COM proteção
comProtecao();