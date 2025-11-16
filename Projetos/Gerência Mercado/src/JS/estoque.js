const nomeProduto = document.getElementById("nomeProduto");
const precoProduto = document.getElementById("precoProduto");
const quantidadeProduto = document.getElementById("quantidadeProduto");
const validadeProduto = document.getElementById("validadeProduto");
const fornecedorProduto = document.getElementById("fornecedorProduto");
const resposta = document.getElementById("resposta");
const submit = document.getElementById("submit");
const verEstoque = document.getElementById("verEstoque");
const removerItem = document.getElementById("removerItem");

let Estoque = {
    estoque: JSON.parse(localStorage.getItem("Estoque")) || [
        { id: 1, nome: "Leite Ninho", preco: 5.50, quantidade: 150, validade: "14 Abril", fornecedor: "Ninho Ltda." }
    ]
};
function salvarStorage() {
    localStorage.setItem("Estoque", JSON.stringify(Estoque.estoque));
}
function montarTabela(lista = Estoque.estoque) {
    const header = `
        <tr>
            <th>NOME</th>
            <th>PREÇO</th>
            <th>QUANT.</th>
            <th>VALID.</th>
            <th>FORNECEDOR</th>
        </tr>
    `;

    const linhas = lista.map(item => `
        <tr class="linha-item" data-id="${item.id}">
            <td>${item.nome}</td>
            <td>${item.preco}</td>
            <td>${item.quantidade}</td>
            <td>${item.validade}</td>
            <td>${item.fornecedor}</td>
        </tr>
    `).join("");

    const tabelaHTML = `
        <table class="tabela-estoque">
            ${header}
            ${linhas}
        </table>
    `;

    resposta.innerHTML = tabelaHTML;
    return resposta.innerHTML;
}
function addEstoque(nome, preco, quantidade, validade, fornecedor) {

    if (!nome || !preco || !quantidade || !validade || !fornecedor) {
        return;
    } else {
        nomeProduto.value = "";
        precoProduto.value = "";
        quantidadeProduto.value = "";
        validadeProduto.value = "";
        fornecedorProduto.value = "";
    }

    const existe = Estoque.estoque.some(
        item => item.nome.toLowerCase() === nome.toLowerCase()
    );

    if (existe) {
        resposta.innerHTML = `
            <strong style="color:red;">Produto ja cadastrado</strong><br><br>
            ${montarTabela()}
        `;

        nomeProduto.value = "";
        precoProduto.value = "";
        quantidadeProduto.value = "";
        validadeProduto.value = "";
        fornecedorProduto.value = "";

        return;
    }

    Estoque.estoque.push({
        id: Estoque.estoque.length + 1,
        nome,
        preco,
        quantidade,
        validade,
        fornecedor
    });

    salvarStorage();

    resposta.innerHTML = `
        <strong style="color:green;">Item adicionado com sucesso!</strong><br><br>
        ${montarTabela()}
    `;

    nomeProduto.value = "";
    precoProduto.value = "";
    quantidadeProduto.value = "";
    validadeProduto.value = "";
    fornecedorProduto.value = "";
}
function removerPorNome(nome) {

    const index = Estoque.estoque.findIndex(
        item => item.nome.toLowerCase() === nome.toLowerCase()
    );

    if (index === -1) return false;

    Estoque.estoque.splice(index, 1);

    salvarStorage();
    return true;
}
removerItem.addEventListener("click", (e) => {
    e.preventDefault();

    const nome = nomeProduto.value.trim();

    if (nome === "") {
        resposta.innerHTML = `
            <strong style="color:red;">Informe o nome do produto para remover.</strong><br><br>
            ${montarTabela()}
        `;
        return;
    }

    const removido = removerPorNome(nome);

    if (removido) {
        resposta.innerHTML = `
            <strong style="color:green;">Item removido com sucesso:</strong><br><br>
            ${montarTabela()}
        `;
    } else {
        resposta.innerHTML = `
            <strong style="color:red;">Item não encontrado para remoção.</strong><br><br>
            ${montarTabela()}
        `;
    }
});
submit.addEventListener("click", (e) => {
    e.preventDefault();

    const nome = nomeProduto.value.trim();
    const preco = precoProduto.value.trim();
    const quantidade = quantidadeProduto.value.trim();
    const validade = validadeProduto.value.trim();
    const fornecedor = fornecedorProduto.value.trim();

    if (!nome || !preco || !quantidade || !validade || !fornecedor) {
        resposta.innerHTML = `
            <strong style="color:red;">Preencha todos os campos!</strong><br><br>
            ${montarTabela()}
        `;
        return;
    }

    addEstoque(nome, preco, quantidade, validade, fornecedor);
});
function pesquisarItens() {
    const termo = document.getElementById("campoPesquisa").value.trim().toLowerCase();

    if (termo === "") {
        resposta.innerHTML = `
            <strong style="color:red;">Item não encontrado</strong><br><br>
            ${montarTabela()}
        `;

        return;
    }

    const filtrados = Estoque.estoque.filter(item =>
        item.nome.toLowerCase().includes(termo) ||
        String(item.preco).toLowerCase().includes(termo) ||
        String(item.quantidade).toLowerCase().includes(termo) ||
        item.validade.toLowerCase().includes(termo) ||
        item.fornecedor.toLowerCase().includes(termo)
    );

    if (filtrados.length === 0) {
        resposta.innerHTML = `
            <strong style="color:red;">Item não encontrado</strong><br><br>
            ${montarTabela()}
        `;
    } else {
        resposta.innerHTML = `
            <strong style="color:green;">"${termo}" encontrado:</strong><br><br>
            ${montarTabela(filtrados)}
        `;
    }
}
function atualizarPorNome(nome, preco, quantidade, validade, fornecedor) {

    const item = Estoque.estoque.find(
        i => i.nome.toLowerCase() === nome.toLowerCase()
    );

    if (!item) return false;

    item.preco = preco;
    item.quantidade = quantidade;
    item.validade = validade;
    item.fornecedor = fornecedor;

    salvarStorage();
    return true;
}
document.getElementById("atualizarItem").addEventListener("click", (e) => {
    e.preventDefault();

    const nome = nomeProduto.value.trim();
    const preco = precoProduto.value.trim();
    const quantidade = quantidadeProduto.value.trim();
    const validade = validadeProduto.value.trim();
    const fornecedor = fornecedorProduto.value.trim();

    if (
        nome == "" ||
        preco === "" ||
        quantidade === "" ||
        validade === "" ||
        fornecedor === ""
    ) {
        resposta.innerHTML = `
            <strong style="color:red;">Preencha todos os campos.</strong><br><br>
            ${montarTabela()}
        `;
        return;
    }

    const atualizado = atualizarPorNome(nome, preco, quantidade, validade, fornecedor);

    if (atualizado) {
        resposta.innerHTML = `
            <strong style="color:green;">Item atualizado com sucesso:</strong><br><br>
            ${montarTabela()}
        `;
    } else {
        resposta.innerHTML = `
            <strong style="color:red;">Produto não encontrado para atualização.</strong><br><br>
            ${montarTabela()}
        `;
    }

    nomeProduto.value = "";
    precoProduto.value = "";
    quantidadeProduto.value = "";
    validadeProduto.value = "";
    fornecedorProduto.value = "";
});
document.getElementById("pesquisarItem").addEventListener("click", (e) => {
    e.preventDefault();
    pesquisarItens();
});
verEstoque.addEventListener("click", (e) => {
    e.preventDefault();

    resposta.innerHTML = `
        <strong>Estoque atualizado:</strong><br><br>
        ${montarTabela()}
    `;
});
