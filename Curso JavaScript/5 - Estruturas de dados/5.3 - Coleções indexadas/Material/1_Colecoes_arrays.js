// O termo Coleções Indexadas se refere às estruturas de dados que armazenam elementos ordenados e acessíveis via índice numérico. Em JavaScript, as principais são: Array e TypedArray. Essas coleções compartilham uma característica central - cada elemento é associado a um índice numérico sequencial começando em 0.

// Um array é um objeto especial usado para armazenar listas de valores. Pode conter qualquer tipo de dado: números, strings, objetos, funções, etc.

const numeros = [10, 20, 30];
const misto = [1, "texto", true, {nome: "Moises"}, [9, 8, 7]];

// O tamanho do array é dado por array.length:

console.log(numeros.length); // 3

// Acessando e modificado via índice:

console.log(numeros[1]); // 20
numeros[1] = 25;
console.log(numeros); // [10, 25, 30]

// Métodos fundamentais:

/// inserção / remoção -> push(), pop(), shift(), unshift(), splice() -> Manipulam elementos

/// interação -> forEach(), map(), filter(), reduce(), find(), some(), every() -> Percorrem arrays e aplicam funções

/// ordenação -> sort(), reverse() -> Reordenam os elementos

/// conversão -> join(), toString(), flat() -> Transformam arrays em strings ou arrays achatados

const Arr = [1, 2, 3, 4, 5];

const dobrados = Arr.map(elemento => elemento * 2); // [2, 4, 6, 8, 10]

const filtrados = Arr.filter(elemento => elemento > 2); // [3, 4, 5]

const soma = Arr.reduce((a, b) => a + b, 0); //15 

// Interação moderna com for...of:

for(const valor of Arr){
    console.log(valor);
}

// Estrutura de dados especial: Array.from() e Array.of()

Array.from("Moises"); // ['M', 'o', 'i', 's', 'e', 's']

Array.of(7, 8, 9); // [7, 8, 9]
