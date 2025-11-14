let Estoque = {
    estoque: [
        {id: 1, nome: "Leite Ninho", preco: 5.50, quantidade: 150, validade: "14 Abril", fornecedor: "Ninho Ltda."}
    ]
};

Estoque.estoque.push({id: 2, nome: "Cerveja Imperio", preco: 3.50, quantidade: 500, fornecedor: "Imperio Ltda."});

console.log(Estoque.estoque);
Estoque = JSON.stringify(Estoque);
console.log(Estoque);