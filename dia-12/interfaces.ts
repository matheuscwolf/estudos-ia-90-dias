interface Usuario {
    nome: string;
    idade: number;
    ativo: boolean;
}

const user: Usuario = { nome: "Matheus", idade: 35, ativo: true};
console.log(user);