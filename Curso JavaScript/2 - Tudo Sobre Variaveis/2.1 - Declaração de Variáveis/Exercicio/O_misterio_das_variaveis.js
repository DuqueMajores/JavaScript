// Você recebeu o seguinte código JavaScript, mas algo está errado.
// Leia com atenção e descubra qual será a saída no console (ou quais erros acontecem).
// Depois, corrija o código usando boas práticas modernas (let e const).

// Explique o que acontece linha por linha (por que aparecem certos valores ou erros).

// Descubra exatamente o que o console mostrará (ordem e tipo de erro, se houver).

// Reescreva o código de forma correta e moderna, sem var, de modo que:

//#a seja acessível fora do bloco.

//#b e c existam apenas dentro do bloco.

//#Nenhum erro ocorra.

// Descreva brevemente o que mudou e por quê.

console.log(a); // Hoisting var - undefiend
var a = 10; // A variável está sendo declarado depois de ser chamada.

if (true) {
var a = 20;
let b = 30;
const c = 40;
console.log(a, b, c); // 20, 30, 40
}
 
console.log(a); // Imprime 20, pois var é global.
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined

