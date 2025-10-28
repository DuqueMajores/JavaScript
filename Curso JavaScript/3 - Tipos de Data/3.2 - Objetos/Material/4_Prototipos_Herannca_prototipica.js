// Agora entramos no core conceitual de como o JavaScript lida com herança: o modelo baseado em protótipos.

// Todo objeto em JavaScript possui uma referência interna para outro objeto, cgamado de protótipo ([[Prototype]] ou __proto__).

// Se você tentar acessar uma propriedade que não exite em um objeto, o JavaScript procura no seu protótipo, subindo na cadeia de protótipos (prototype chain).

const pai = {
    profissao: "Desenvolvedor"
};

const filho = Object.create(pai);
filho.nome = "Moises";

console.log(filho.profissao); // "Desenvolvedor" - herdado do protótipo

/*  Neste caso:
    - filho herda do pai;
    - pai é o protótipo de filho;
    - Quando filho.profissao é chamado, JS não encontra a propriedade diretamente -> sobe na cadeia e busca em pai.
    */

// Agora com relação a Propriedade prototype, é usada em funções construtoras para definir membros que serão compartilhados por todas as instâncias.

function Pessoa(nome){
    this.nome = nome;
};

Pessoa.prototype.falar = function(){
    console.log(`Olá, eu sou ${this.nome}`);
};

const p1 = new Pessoa("Moises");
const p2 = new Pessoa("Luana");

p1.falar();
p2.falar();

// O método falar() está no prototype de Pessoa, não duplicado em cada instância. Isso otimiza memória e mantém comportamento consistente.
