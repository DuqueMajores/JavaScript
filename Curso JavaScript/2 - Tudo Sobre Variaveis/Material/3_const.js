// Const é destinado para valores imutáveis. Usado para constantes ou valores que não serão reatribuídos.

const PI = 3.14159
// PI = 3; # ERRO! - não pode mudar o valor.

// Mas se for um objeto ou array, o conteúdo pode ser alterado, apenas a referência não.

const pessoa = {nome: "Moises", idade: 28};
pessoa.idade = 26; // permitido

// pessoa = {}; # ERRO! - não pode mudar a referência.
