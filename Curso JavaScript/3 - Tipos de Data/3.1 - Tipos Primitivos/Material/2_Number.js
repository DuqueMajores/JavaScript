// Number é usado para representar números, sejam inteiros ou decimais.

let inteiro = 42;
let decimal = 3.14;
let negativo = -7;

// O javaScript não diferencia inteiros de decimais - ambos s~qao do tipo number.
// Há três valores especiais: Infinity, -Infinity, NaN(Not a Number)

console.log(1 / 0); // Infinity
console.log("texto" * 2); // NaN

// Você pode verificar se é um número com:

Number.isNaN(NaN); // true
console.log(Number.isNaN(0/0));
console.log(Number.isNaN(20));
