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
    
}

function criarObjetoCaixa() {
    
}

function addCaixa(obj) {
    
}

submit.addEventListener("click", (e) => {
    
});

