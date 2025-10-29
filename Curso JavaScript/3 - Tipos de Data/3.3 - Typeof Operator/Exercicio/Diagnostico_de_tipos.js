// Construa uma função chamada diagnosticoDeTipo() que receba qualquer valor como parâmetro e retorne uma mensagem descritiva sobre o tipo detectado, utilizando o operador typeof.

function diagnosticoDeTipo(valor){
    let tipo = typeof valor;
    const tipos = {
        number: "O valor é do tipo number",
        string: "O valor é do tipo string",
        boolean: "O valor é do tipo boolean",
        undefined: "O valor é undefined",
        null: "O valor é null",
        NaN: "O valor é NaN (não é um número válido)",
        array: "O valor é um array",
        object: "O valor é um objeto",
        function: "O valor é uma função",
        bigint: "O valor é um bigint",
        symbol: "O valor é um symbol"
    };

    return tipos[tipo] || "Erro Impossivel: sem tipo!"
}

console.log(diagnosticoDeTipo(42));
console.log(diagnosticoDeTipo("JS"));
console.log(diagnosticoDeTipo(true));
console.log(diagnosticoDeTipo(undefined));
console.log(diagnosticoDeTipo(null));
console.log(diagnosticoDeTipo(NaN));
console.log(diagnosticoDeTipo([1, 2, 3]));
console.log(diagnosticoDeTipo({a:1}));
console.log(diagnosticoDeTipo(() => {}));
console.log(diagnosticoDeTipo(123n));
console.log(diagnosticoDeTipo(Symbol("id")));
