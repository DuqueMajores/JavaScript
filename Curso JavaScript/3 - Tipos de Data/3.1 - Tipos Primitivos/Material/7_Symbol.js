// Symbol introduzido no ES6, serve para criar identificadores únicos.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false

// Symbol também serve para criar propriedades únicas em objetos (evita conflitos de nomes).

const id = Symbol("id");
const user = {
    nome: "Moises",
    [id]: 123
};
console.log(user);

// Não é convertido automaticamente para string.

String(id); // "Symbol(id)"
