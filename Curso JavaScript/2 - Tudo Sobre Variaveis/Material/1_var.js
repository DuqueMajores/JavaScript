// Uma variável é um espaço na memória do computadr usado para armazenar um valor que pode ser usado e alterado durante a execução do programa.

//Problemas com var: Tem escopo de função (ou global), não de bloco. E é hoisted, ou seja, "sobe" para o topo do escopo e vira undefined antes da linha de declaração.

console.log(nome);
var nome = "João"

// Antes do ES6 (2015), só existia var.

var nome = "Moises";
console.log(nome);

var idade = 28;
console.log(idade);
