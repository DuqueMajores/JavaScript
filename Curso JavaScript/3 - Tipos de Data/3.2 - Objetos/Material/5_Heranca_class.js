// Com ES6, a herança prototípica ganhou uma sintaxe mais clara e familiar ao modelo de linguagens orientadas a objetos clássicas.

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

class Funcionario extends Pessoa{
    constructor(nome, cargo){
        super(nome); // chama o construtor da classe pai
        this.cargo = cargo;
    }

    trabalhar(){
        console.log(`${this.nome} está trabalhando como ${this.cargo}`);
    }
}

const dev = new Funcionario("Moises", "Analisat de Sistemas");
dev.falar();
dev.trabalhar();
