// Em JacaScrip, o objeto Set é uma coleção de valores únicos - ou seja, não permite duplicatas. Ele é muito útil quando você perecisa eliminar rapetições ou verificar rapidamente se um valor já existe em um conjunto.

const conjunto = new Set();

// Você também pode inicializar com valores:

const numeros = new Set([1, 2, 3, 3, 4]);
console.log(numeros); // Set(4) {1, 2, 3, 4}

// Operações:

// 1 - Adicionar elementos:

numeros.add(5);
numeros.add(2); // Ignora, já existe
console.log(numeros); // Set(5) {1, 2, 3, 4, 5}

// 2 - Remover elementos:

numeros.delete(3);
console.log(numeros); // Set(4) {1, 2, 4, 5}

// 3 - Verifica de contém:

console.log(numeros.has(4)); // true
console.log(numeros.has(9)); // false

// 4 - Tamanho do Set:

console.log(numeros.size); // 4

// 5 - Limpar tudo:

numeros.clear();
console.log(numeros.size); // 0

// Um Set é interável, você pode usar for...of ou métodos internos.

const cores = new Set(['azul', 'verde', 'vermelho']);

for (let cor of cores){
    console.log(cor);
}

// ou

cores.forEach(cor => console.log(cor));
