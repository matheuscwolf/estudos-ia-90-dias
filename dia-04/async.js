function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nome: "Matheus", idade: 30 });
        }, 2000);
    });
}

console.log("Buscando usuário...");

buscarUsuario().then((usuario) => {
    console.log("Usuário recebido:", usuario);
});

console.log("Esperando...");