const campoPequisa = document.getElementById("campoPesquisa");
const btnPesquisarCaixa = document.getElementById("pesquisarCaixa");
const rotuloCaixa = document.getElementById("rotuloCaixa");
const admCaixa = document.getElementById("admCaixa");
const localCaixa = document.getElementById("localCaixa");
const valorCaixa = document.getElementById("valorCaixa");
const statusCaixa = document.getElementById("statusCaixa");
const submit = document.getElementById("submit");
const resposta = document.getElementById("resposta");
const btnIcon1 = document.getElementById("btnIcon1");

let Caixa = {
    caixa: JSON.parse(localStorage.getItem("Caixa")) || []
};

function salvarStorage() {
    localStorage.setItem("Caixa", JSON.stringify(Caixa.caixa));
}

function montarTabela(lista) {
    return `
        <table class="tabela-card">
            <tr>
                <th>ROTULO</th>
                <th>ADM</th>
                <th>LOCAL</th>
                <th>RECEITA</th>
                <th>STATUS</th>
            </tr>

            ${lista.map(item => `
                <tr>
                    <td>${item.rotulo}</td>
                    <td>${item.adm}</td>
                    <td>${item.local}</td>
                    <td>${item.receita}</td>
                    <td>${item.status}</td>
                </tr>
            `).join("")}
        </table>
    `;
}

function criarObjetoCaixa() {
    return {
        rotulo: rotuloCaixa.value,
        adm: admCaixa.value,
        local: localCaixa.value,
        receita: valorCaixa.value,
        status: statusCaixa.value
    };
}

function addCaixa(obj) {
    Caixa.caixa.push(obj);
    salvarStorage();
}

submit.addEventListener("click", (e) => {
    e.preventDefault();

    const novo = criarCaixa();

    addCaixa(
        novo.rotulo,
        novo.adm,
        novo.local,
        novo.receita,
        novo.status
    );

    // Feedback operacional rápido
    alert("Caixa cadastrado com sucesso.");
});

btnIcon1.addEventListener("click", () => {

    // criação do card base
    const card = document.createElement("div");
    card.classList.add("card-caixa");

    card.innerHTML = `
        <strong>Novo Caixa</strong>
        <div class="card-conteudo">
            <p>Clique no card para vincular dados do formulário.</p>
        </div>
    `;

    resposta.appendChild(card);

    // lógica de preenchimento após clique
    card.addEventListener("click", () => {

        const dados = criarObjetoCaixa();

        // salvar no array Caixa
        addCaixa(dados);

        // montar tabela interna do card
        const tabela = montarTabela([dados]);

        card.innerHTML = `
            <strong>${dados.rotulo}</strong>
            <div class="card-conteudo">
                ${tabela}
            </div>
        `;

        card.classList.toggle("expandido");
    });
});
