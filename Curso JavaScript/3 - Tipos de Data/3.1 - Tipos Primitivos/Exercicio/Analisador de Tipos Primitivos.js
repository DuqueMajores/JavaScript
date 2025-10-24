// Crie uma função chamada analisarTipos() que receba um array com valores misturados (de tipos primitivos diferentes) e retorne um objeto resumo com:

// Quantos valores de cada tipo primitivo existem.

// Uma lista com os valores válidos (não undefined e não null).

// O maior número encontrado (considere também BigInt).

// Uma string concatenada com todas as strings do array, separadas por espaço.

function analisarTipos(array){
    const contagem = {
        string: 0,
        number: 0,
        bigint: 0,
        boolean: 0,
        undefined: 0,
        object: 0,
        symbol: 0
    };

    const validValues = [];
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let concatenatedStrings = "";

    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        const tipo = typeof value;

        if (value !== null && value !== undefined) {
            validValues.push(value);
        }

        if (tipo === "number" || tipo === "bigint") {
            if (value > maxNumber) {
                maxNumber = value;
            }
        }

        if (tipo === "string") {
            concatenatedStrings += value + " ";
        }

        if (tipo in contagem) {
            contagem[tipo]++;
        }
    }

    return {
        contagem,
        validValues,
        maxNumber: maxNumber === Number.MIN_SAFE_INTEGER ? null : maxNumber,
        concatenatedStrings: concatenatedStrings.trim()
    };
};

const valores = [
    "Moises", 28, true, null, "JavaScript", undefined, 123n, Symbol("id"), false, "GPT", 3.14
];

console.log(analisarTipos(valores));
