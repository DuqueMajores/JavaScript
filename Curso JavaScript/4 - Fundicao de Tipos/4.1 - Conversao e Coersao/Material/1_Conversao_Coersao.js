// JavaScript é uma linguagem dynamically typed, ou seja, os tipos de variáveis são definidos em tempo de execução.

// Há duas formas principais de conversão de tipos:

// Explicita - Type Conversion - o desenvolvedor força a conversão de tipo de forma intencional. Ou seja, é quando você indica ao interpretador que deseja mudar o tipo de dado.

// Conversão para String - usamos o String() ou o método .toString():

let num = 42;
let str1 = String(num);
let str2 = num.toString();

// String() pode converter null e undefined. Já toString() não pode, pois gerará erro se usado nesses valores.

// Conversão para Number - usamos o Number() ou funções como parseInt() e parseFloat():

console.log(Number("42"));       // 42
console.log(Number("42abc"));    // NaN
console.log(parseInt("42abc"));  // 42
console.log(parseFloat("3.14")); // 3.14

// Number() tenta converter tudo de forma estrita; se falhar, retorna NaN (Not a Number).

// Conversão para Boolean - usamos o Boolean():

console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(" "));       // true
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false

// Implocita - Type Coercion - o JavaScript automaticamente converte um tipo para outro quando necessário ou dependendo do contexto da operação.

// Coerção para String - quando há uma operação com + e um dos operandos é strinf, o JS converte o outro para string e concatena:

console.log("5" + 1);             // "51"
console.log("Hello" + true);      // "Hellotrue"
console.log("The number is " + 5); // "The number is 5"

// Coerção para Number - quando há operadores aritméticos, o JS tenta converter tudo para número:

console.log("5" - 2);   // 3
console.log("10" * 3);  // 30
console.log("6" / "2"); // 3

// O operador "+" é ambíguo - pode significar concatenação ou soma, dependendo do tipo.

// Coerção para Boolean - acontece em estruturas condicionais como if, while ou operadores lógicos (||, &&, !):

if ("texto") console.log("truthy"); // "trhuthy"
if (0) console.log("falsy");       // nada acontece
