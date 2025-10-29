// null -> "object" ; Esse é um bug histórico do JavaScript, mantido por compatibilidade retroativa desde 1995.

// Na verdade, null é um primitivo, mas o typeof null retorna "object".

console.log(typeof(null));

// Outro comportamento curioso é o NaN (Not-a-Number) que se configura como um número inválido, mas seu tipo é "number".

console.log(typeof(NaN));

// Arrays são tecnicamente objetos especializados.

console.log(typeof [1, 2, 3]);

// Forma correta de verificar se algo é um array:

console.log(Array.isArray([1, 2, 3]));

// Funções em JavaScript são objetos de primeira classe, mas o typeof distingue-as com um retorno especial. É útil para verificar se algo é executável antes de invocar.

console.log(typeof function(){});
