// O Map é uma estrutura de dados introduzida no ECMAScript 2015(ES6), que representa uma coleção de pares chave-valor, onde qualquer tipo de dado pode ser usado como chave - incluindo objetos, funções e até valores primitivos.

// Diferente de um objeto literal ({}), um Map mantém a ordem de inserção das chaves e não sofre colisões de nomes com propriedades herdadas do prototype.

const umMapa = new Map();

// Métodos Principais!

// 1 - Inserir elementos::

const mapa = new Map();
mapa.set('nome', 'Moises');
mapa.set('idade', 28);
mapa.set({chave: 'dinâmica'}, 'valor complexo');

mapa.set('cargo', 'Analista').set('empresa', 'TechCorp');

console.log(mapa);

// 2 - Acessar valores - retorna indefined se a chave não existir:

console.log(mapa.get('nome')); // 'Moises'

// 3 - Verificar existência:

console.log(mapa.has('idade'));   // true
console.log(mapa.has('abacaxi')); // false

// 4 - Remover elementos:

mapa.delete('idade'); // true se removido
console.log(mapa);

// 5 - Limpar o mapa:

mapa.clear();
console.log(mapa);

// 6 - Quantidade de elementos:

mapa.size; // número de pares chave-valor

// 7 - ForEach:

const m = new Map([['x', 10], ['y, 20']]);

m.forEach((valor, chave, mapa) => {
    console.log(chave);
})
