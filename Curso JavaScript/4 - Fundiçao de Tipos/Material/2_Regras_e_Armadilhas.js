// Exemplos Clássicos e Armadilhas:

// 1 - Soma Ambígua:

console.log(1 + "2" + 3); // "123"
console.log(1 + 2 + "3"); // "33"

// 2 - Comparações Soltas (==):

// O operador "==" aplica coerção antes de comparar.

console.log(0 == false);  // true
console.log(1 == true);   // true
console.log("0" == 0);    // true
console.log("" == false); // true

// O operador "===" (strict equality) não faz coerção.

console.log(0 === false); // false
console.log("0" === 0);   // false

// Em ambientes de produção, sempre utilize "===" e "!==" para evitar comportamento inesperado.
