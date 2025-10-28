// Em JavaScript, objetos são estruturas de dados dinâmicas que armazenam pares de chave-valor (key-value). Podemos pensar neles como enidadesque representam "coisas" do mundo real, como atributos (propriedades) e comportamentos (métodos).

const usuario = {
    nome: "Moises",
    idade: 28,
    cargo: "Analista de Desenvolvimento de Sistemas",
    apresentar: function(){
        console.log(`Ola, meu nome e ${this.nome} e eu sou ${this.cargo}`)
    }
}

console.log(usuario.nome);
usuario.apresentar();

// Chaves(keys) -> sempre strings ou symbols.
// Valores(values) -> podem ser de qualquer tipo (numeros, strings, funcoes, outros objetos, etc).
// this -> referencia ao objeto no contexto de execucao.
