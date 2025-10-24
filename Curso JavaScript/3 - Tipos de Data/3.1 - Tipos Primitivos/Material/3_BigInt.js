// Usado para representar números inteiros muito grandes, maiores que o Number consegue lidar.

let big = 12345678901890n;

// É criado adicionando um "n" no final do número e não pode ser misturado com number comum.

let x = 10n;
let y = 5;
console.log(x + BigInt(y)); // ok

// Útil para cálculos financeiros, criptografias, etc.
