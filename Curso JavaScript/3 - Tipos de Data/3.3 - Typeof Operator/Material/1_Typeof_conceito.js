// O operador typeof é um operador unário que retorna uma string indicando o tipo do operador. Sua função é inspecionar o tipo de dado em tempo de execução (runtime type inspection).

typeof operando;
typeof(operando);

// Ambas são equivalentes - os parênteses são opicionais e servem apenas para legibilidade.

// O typeof sempre retorna uma string literal com o nome do tipo primitivo ou da categoria do objeto.

console.log(typeof undefined);  // "undefined"
console.log(typeof 123);        // "number"
console.log(typeof "JS");       // "string"
console.log(typeof true);       // "boolean"
console.log(typeof Symbol());   // "symbol"
console.log(typeof 10n);        // "bigint"
console.log(typeof {});         // "object"
console.log(typeof []);         // "object"
console.log(typeof null);       // "object"
console.log(typeof (() => {})); // "function"
