// Existem algumas formas de iniciar objetos em JavaScript:

// Literal de Objeto - mais comum e legível

const produto = {nome: "Notebook", preco: 4500};

// Usando new Object() - menos usual, mas funcional

const carro = new Object();
carro.modelo = "Civic";
carro.marca = "Honda";

// Usando uma Função Construtora - padrão classico pré-ES6

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

const pessoa1 = new Pessoa("Moises", 28);
const pessoa2 = new Pessoa("Luana", 35);

// Usando Classes (ES6+) - abordagem moderna e mais próxima da orientação a objetos tradicional

class Individuo{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        console.log(`Meu nome e ${this.nome}`);
    }
}

const dev = new Individuo("Moises", 28);
dev.falar();
