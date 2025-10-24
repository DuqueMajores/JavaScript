// Em JavaScrip, tipos primitivos são imutáveis.

// String representa textos. Podem ser escritas com aspas simples, aspas duplas ou crases(template literals).

let nome = "Moises";
let sobrenome = 'Damasceno';
let saudacao = `Olá, ${nome}!`

// Possui características imutáveis, você não pode mudar um caractere diretamente. Mas você pode concatenar strigs.

let frase = "Olá, " + nome;

// Template Literals (com crases) permitem interpolação.

let idade = 25;
let msg = `Tenho ${idade} anos.`;
