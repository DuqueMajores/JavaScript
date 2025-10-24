//O jeito moderno e seguro. Introduzido no ES6(2015). Tem escopo de bloco, o que evita confusões e comportamentos inesperados.

let nome = "Moises";
nome = "Lucas"; // pode mudar
console.log(nome);

// Mas não pode redeclaras

//let nome = "Pedro"; --> ERRO!

//Exemplo de escopo de bloco:

{
    let idade = 30;
    console.log(idade);
}

console.log(idade); // Erro - fora do bloco (ReferenceError: idade is not defined)
