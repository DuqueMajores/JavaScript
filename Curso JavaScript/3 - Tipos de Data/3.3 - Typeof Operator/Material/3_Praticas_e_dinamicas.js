// Como JavaScript é fracamente tipado e dinâmico, o tipo de uma variável pode mudar durante a execução.

let dado = 10;
console.log(typeof dado); // number

dado = "dez";
console.log(typeof dado); // string

// Isso é um reflaxo do dynamic typing system, e typeof é uma ferramente essencial para auditoria e validação de tipo.

// Boas Práticas Corporativas (Enterprise-Level Coding):

// Validação defensiva - antes de executar operações numéricas ou lógicas.

if (typeof valor === "number" && !isNaN(valor)){
    // processa
}

// Verificações seguras em APIs.

if (typeof callback === "function") callback();

// Padronização de código - ao manipular dados desconhecidos (ex: JSON externo).

if (typeof input === "object" && input !== null){
    // manipula objeto
}

// Outros Métodos de Detecção:

/*  typeof - typeof valor -> tipos primitivos e funções

    instanceof - valor intanceof Array -> Instâncias e herança

    object.prototype.toString.call(valor) - "[object Array]" -> Detecção precisa e refinada
*/

typeof [] // object
[1, 2, 3] instanceof Array // true
object.prototype.toString.call([]) // [object Array]
