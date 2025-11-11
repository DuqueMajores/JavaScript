// Você deve criar um pequeno sistema que gerencie o estoque de uma loja utilizando Arrays.

// 1 - Crie um array chamado estoque que contenha pelo menos cinco produtos, cada um representado como um objeto com as seguintes propriedades: nome, quantidade e preco:

function linha(char="-", quant=40){
    const padrao = char.repeat(quant);
    console.log(padrao);
}

let estoque = [{nome: "Casaco", quantidade: 50, preco: 250}, {nome: "Camisa", quantidade: 150, preco: 49.90}, {nome: "Tênis", quantidade: 60, preco: 160}, {nome: "Boné", quantidade: 120, preco: 79.90}, {nome: "Calça", quantidade: 50, preco: 180}]

// 2 - Crie uma função chamada adicionarProduto(nome, quantidade, preco) que: adicione um novo produto ao array, e que verifique se o produto já existe. Se existir, atualize apenas a quantidade;

function adicionarProduto(nome, quantidade, preco){
    const produto = estoque.find(item => item.nome === nome);

    if(produto){
        produto.quantidade += quantidade;
        if(preco === undefined){
            
        } else {
            produto.preco = preco;
        }
    } else {
        estoque.push({nome, quantidade, preco});
    }
}

// 3 - Crie uma função removerProduto(nome) que: Remova um produto do array com base no nome;

function removerProduto(nome){
    estoque = estoque.filter(item => item.nome !== nome);
}

// 4 - Crie uma função listarProdutos() que: Exiba no console todos os produtos em formato de tabela;

function listarProdutos(array, char="-", quant=40){
    const linha = char.repeat(quant);
    console.log("NOME", "QUANTIDADE".padStart(20), "PRECO".padStart(10));
    console.log(linha);
    array.forEach(item => {
        console.log(`${item.nome}`.padEnd(18) + `${item.quantidade}`.padEnd(13) + `R$${item.preco}`);
    });
}

listarProdutos(estoque);

// 5 - Crie uma função valorTotalEstoque() que: Retorne o valor total de todos os produtos em estoque;

function valorTotalEstoque(array){
    let quant = 0;
    let prec = 0;
    array.map(item => {
        quant += item.quantidade;
        prec += item.preco;
    })
    
    console.log(`Valor do Estoque: R$${(quant * prec).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
}

linha();
valorTotalEstoque(estoque);

// DESAFIO: Crie uma função filtrarPorPreco(min, max) que retorne apenas os produtos dentro do intervalo de preço informado:

function filtrarPorPreco(array, min, max) {
    linha();
    console.log(`Preço Min (R$${min.toFixed(2)}) / Max (R$${max.toFixed(2)}):`);
    linha("=");

    const filtro = array.filter(item => item.preco >= min && item.preco <= max);
    return filtro;
}

const produtosFiltrados = filtrarPorPreco(estoque, 30, 180);
listarProdutos(produtosFiltrados);
