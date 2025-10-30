// Analise e explique o resultado de cada linha:

console.log(Number("10") + Number("10"));  // Number() transforma as stringes numericas em numeros reais; quando são somadas, resultam em um resultado aritmético.
console.log("10" + 10);                    // A soma entre uma string numérica e um número real sempre irá concatenar.
console.log("10" - 10);                    // A subtração entre uma string numérica e um número real irá resultar em uma expreção aritimética.
console.log(Boolean("false"));             // A conversão de string para boleano depende, se a string for vazia e fachada, é false; agora se for vazia aberta ou com caracteres, é true.
console.log(Boolean(""));                  // Como mensionado, string vazia e fachada em boleano é false.
console.log(0 == false);                   // Em comparativos 0 sempre será false, e qualquer outro valor será true.
console.log(0 === false);                  // Em comparativos estritos, 0 é number, diferente de false, que é boleano.
