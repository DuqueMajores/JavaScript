// JSON (JavaScript Object Notation) é um formato de dados estrurado usado para armazenar e trocar informações entre sistemas. Apesar do nome, JSON não é código JavaScript, mas sim texto formatado de forma parecida com objetos JS.

// A estrutura fundamental do JSON consiste em um arquivo ou string JSON, composto por - Objetos -> {chave: valor}, e Arrays -> [item1, item2, item3]

const objjson = {
    "nome": "Moises Damasceno",
    "idade": 28,
    "profissao": "Analista de Desenvolvimento de Sistemas",
    "habilidades": ["JavaScript", "Node.js", "React"],
    "ativo": true
};

// As chaves e strings devem estar entre aspas duplas ("); Não há funções, apenas dados e comentários não são permitidos.

// O JavaScript trabalha com JSON usando dois métodos nativos da classe JSON: 

// 1 - JSON.parse() - que converte uma string JSON em objeto JavaScript:

const jsonString = '{"nome": "Moises", "idade": 28}';
const obj = JSON.parse(jsonString);

console.log(obj.nome); // Moises
console.log(obj.idade); // 28

// 2 - JSON.stringfy() - que converte um objeto JavaScript em uma string JSON:

const dados = {
    nome: "Moises",
    curso: "ADS"
}

const json = JSON.stringify(dados);
console.log(json);


// Exemplo de manipulação de API JSON:

async function nasa(params) {
    
}

async function info() {
    try{
        const resposta = await fetch("https://ssd-api.jpl.nasa.gov/sentry.api");
        const dado = await resposta.json();
        const nomes = dado.data.map(item => item["fullname"]);
        console.log(nomes);
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}

info();

