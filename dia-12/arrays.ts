interface Usuario {
    nome: string;
    idade: number;
    telefone?: string;
    email?: string
}

const usuarios: Usuario[] = [
    { nome: "Matheus", idade: 35, ativo: true, email: "m@x.com"},
    { nome: "Ana", idade: 30, ativo: true }
];

console.log(usuarios);