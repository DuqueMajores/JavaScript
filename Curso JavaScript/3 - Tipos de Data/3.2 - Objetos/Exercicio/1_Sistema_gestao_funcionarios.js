// Crie um objeto "funcionario" com as propriedades, nome, cargo, salario, ativo.

// Adicione um método "promover" que receba como parâmetro o novo cargo e o percentual de aumento salarial. Atualize o objeto conforme os novos valores e exiba no console a devida mensagem: "Fulano promovido a cargo novo. Novo salario: salario."

// Adicione um método demitir que mude o status de ativo para false e exiba: "Funcionario fulano foi desligado da empresa."

// Desafio extra: Implemente um função-fábrica (criarFuncionario) que receba nome, cargo e salario, e retorne automaticamente um objeto funcionario com os métodos promover e demitir embutidos.

function dot(){
    console.log("-----------------------------------------------");
}

class Funcionario {
    constructor(nome=String, cargo=String, salario=Number, ativo=Boolean){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.ativo = ativo = true;
    }

    apresentar(){
        dot()
        console.log(`Nome: ${this.nome}`);
        if (this.ativo === true){
            console.log(`Cargo: ${this.cargo}`);
            console.log(`Salario: ${this.salario}`);
            console.log("Situação: Trabalhando")
        } else {
            console.log("Situação: Demitido")
        }
    }

    promover(newcargo, aumento){
        this.cargo = newcargo;
        this.salario = this.salario + ((this.salario * aumento) / 100);
        dot()
        console.log(`Funcionario ${this.nome} foi promovido a ${this.cargo}.`);
        console.log(`Aumento de ${aumento}%. Novo salario: R$${this.salario}`);
    }

    demitir(){
        this.ativo = false;
        if (this.ativo == false){
            dot()
            console.log(`Funcionario ${this.nome} foi demitido`)
        }
    }
}

class criarFuncionario extends Funcionario{
    constructor(nome=String, cargo=String, salario=Number){
        super(nome);
        this.cargo = cargo;
        this.salario = salario;
    }
}

const f1 = new Funcionario("Moises", "DevJunior", 1500)
f1.apresentar();
f1.promover("DevPleno", 60);
f1.demitir();
f1.apresentar();

const f2 = new criarFuncionario("Luana", "DevJunior", 1500);
f2.apresentar();
f2.promover("DevPleno", 60);
f2.promover("DevSenior", 80);
f2.apresentar();
