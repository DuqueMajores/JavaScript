// Você recebeu um JSON de uma API que contém informações sobre produtos de uma loja. Seu trabalho é filtrar, atualizar e reorganizar os dados conforme as regras abaixo.

// Dica - Para clonar um objeto JSON sem alterar o original: const copia = JSON.parse(JSON.stringify(objetoOriginal));
 

const produtosJSON = `
{
  "loja": "TechStore",
  "produtos": [
    { "id": 1, "nome": "Mouse Gamer", "preco": 120, "estoque": 8 },
    { "id": 2, "nome": "Teclado Mecânico", "preco": 350, "estoque": 3 },
    { "id": 3, "nome": "Monitor", "preco": 899, "estoque": 0 },
    { "id": 4, "nome": "Headset", "preco": 199, "estoque": 5 }
  ]
}
`;

// 1 - Converta a string JSON para um objeto JavaScript: 

const objProdJSON = JSON.parse(produtosJSON);

// 2 - Exiba no console o nome de todos os produtos com estoque maior que 0. (Dica: use filter() e map()): 

console.log("ID   Produto - Estoque\n-------------------------")
objProdJSON.produtos.map((prod, position) => {
    if(prod["estoque"] > 0){
        console.log(`${position+1}   ${prod["nome"]} - ${prod["estoque"]}`)
    }
});

// 3 - Crie uma nova propriedade em cada produto chamada "disponivel", que deve ser true se estoque > 0, ou false caso contrário:

objProdJSON.produtos = objProdJSON.produtos.map(prod => ({
    ...prod,
    disponivel: true
}));

objProdJSON.produtos.map(prod => {
    if(prod["estoque"] > 0){
        prod["disponivel"] = true;
    } else {
        prod["disponivel"] = false;
    }
})

// 4 - Aumente o preço de todos os produtos em 10%. (Dica: use forEach() e atribuição direta.):

objProdJSON.produtos.forEach(prod => {
    prod["preco"] = prod["preco"] + ((prod["preco"] * 10) / 100);
});

// 5 - Adicione um novo produto ao array: { "id": 5, "nome": "Webcam Full HD", "preco": 250, "estoque": 7 } :

objProdJSON.produtos.push({ "id": 5, "nome": "Webcam Full HD", "preco": 250, "estoque": 7, "disponivel": true});

// 6 - Gere um novo JSON contendo apenas os produtos disponíveis (estoque > 0) e mostre-o no console formatado (JSON.stringify(obj, null, 2)):

const copiaObjProdJSON = JSON.parse(JSON.stringify(objProdJSON));

const novoArrayProd = copiaObjProdJSON.produtos.filter(prod => prod["disponivel"] !== false);

console.log(JSON.stringify(novoArrayProd, null, 2));

const produtosDispoJSON = JSON.stringify(novoArrayProd);
