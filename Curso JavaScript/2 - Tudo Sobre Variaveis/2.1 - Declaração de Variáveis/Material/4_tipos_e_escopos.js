// Javacript é dinamicamente tipado, ou seja, o tipo do valor é determinado em tempo e execução.

let x = 10; // number
x = "texto"; // string
x = true; // boolean
x = {nome: "Moises"}; // objeto

// Em relação a escopo, exite o escopo global e o escopo de função.
// O escopo global é uma variável declarada fora de funcões ou blocos, podendo ser referenciada em qualquer parte do código.

let global = "Sou global";

// Escopo de função é valido apenas dentro da função.

function teste(){
    var local = "sou local";
    console.log(local); // ok
}

console.log(local); // # ERRO - não existe a variável local fora da função. (ReferenceError: local is not defined)

// let e const também respeitam blocos
