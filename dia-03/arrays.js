const produtos = [
    { nome: "Notebook", preco: 3000, categoria: "eletrônico" },
    { nome: "Celular", preco: 2000, categoria: "eletrônico" },
    { nome: "Fone", preco: 500, categoria: "eletrônico" },
    { nome: "Camiseta", preco: 80, categoria: "roupa" },
    { nome: "Calça", preco: 200, categoria: "roupa" },
    { nome: "Tênis", preco: 350, categoria: "roupa" }
];

const total = produtos
    .filter((p) => p.categoria === "eletrônico")
    .map((p) => p.preco * 0.9)
    .reduce((acc, p) => acc + p , 0);

console.log("Total com desconto:", total);