const campoPequisa = document.getElementById("campoPesquisa");
const btnPesquisarCaixa = document.getElementById("pesquisarCaixa");
const rotuloCaixa = document.getElementById("rotuloCaixa");
const admCaixa = document.getElementById("admCaixa");
const localCaixa = document.getElementById("localCaixa");
const valorCaixa = document.getElementById("valorCaixa");
const statusCaixa = document.getElementById("statusCaixa");
const submit = document.getElementById("submit");
const verCaixa = document.getElementById("verCaixa");
const resposta = document.getElementById("resposta");

let Caixa = {
    caixa: JSON.parse(localStorage.getItem("Caixa")) || []
};
function salvarStorage() {
    localStorage.setItem("Caixa", JSON.stringify(Caixa.caixa));
}
function montarTabela(item) {
    const tabela = document.createElement("table");
    tabela.classList.add("tabela-caixa");

    tabela.innerHTML = `
        <tr>
            <th>ROTULO</th>
            <th>ADM</th>
            <th>LOCAL</th>
            <th>RECEITA</th>
            <th>STATUS</th>
        </tr>
        <tr>
            <td>${item.rotulo}</td>
            <td>${item.adm}</td>
            <td>${item.local}</td>
            <td>${item.valor}</td>
            <td>${item.status}</td>
        </tr>
    `;

    resposta.appendChild(tabela);
}
function addCaixa(obj) {
    Caixa.caixa.push(obj);
    salvarStorage();
}
submit.addEventListener("click", (e) => {
    e.preventDefault();

    const novoItem = {
        rotulo: rotuloCaixa.value,
        adm: admCaixa.value,
        local: localCaixa.value, 
        valor: valorCaixa.value,
        status: statusCaixa.value
    };

    addCaixa(novoItem);
    montarTabela(novoItem);

    rotuloCaixa.value = "";
    admCaixa.value = "";
    localCaixa.value = "";
    valorCaixa.value = "";
    statusCaixa.value = "";

});
verCaixa.addEventListener("click", (e) => {
    e.preventDefault();

    resposta.innerHTML = "";

    if(Caixa.caixa.length === 0){
        resposta.innerHTML = `
            <strong style="color:red;">Nenhum caixa cadastrado.</strong><br><br>
        `;
        return;
    }

    Caixa.caixa.forEach(item => {
        montarTabela(item);
    });

});
