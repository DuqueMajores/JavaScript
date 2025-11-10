// Simulação de uma base de dados de alunos em formato JSON. Dados recebidos da API da faculdade:

// Dica: para calcular a média geral - const media = alunos.reduce((acc, aluno) => acc + aluno.nota, 0) / alunos.length;

const alunosJSON = `
{
  "turma": "ADS-2025",
  "alunos": [
    { "id": 1, "nome": "Laura", "nota": 8.5, "faltas": 2 },
    { "id": 2, "nome": "Pedro", "nota": 5.7, "faltas": 6 },
    { "id": 3, "nome": "Rafaela", "nota": 9.2, "faltas": 0 },
    { "id": 4, "nome": "Marcos", "nota": 6.3, "faltas": 5 }
  ]
}
`;
let quadro = Array();
function linha(quant = 0, char = "-", titulo = ""){
    const padrao = char.repeat(quant);
    if(titulo){
        console.log(`${titulo}\n${padrao}`);
    } else {
        console.log(padrao);
    }
}
function Quadro3(Array, quant = 0, char = ""){
    if(Array.length < 3){
        console.log("Deve haver 3 elementos")
    } else {
        console.log(`${Array[0]}`.padEnd(15) + `${Array[1]}`.padEnd(10) + `${Array[2]}`);
    }
    linha(quant, char);
}

// 1 - Converta o JSON acima em um objeto JavaScript:

const objAluJSON = JSON.parse(alunosJSON);

// 2 - Crie uma nova propriedade chamada "situacao" para cada aluno: "Aprovado" → se a nota for maior ou igual a 7 e faltas ≤ 5. "Reprovado" → caso contrário.

objAluJSON.alunos = objAluJSON.alunos.map(prop => ({
    ...prop,
    situacao: ""
}));

objAluJSON.alunos.map(prop => {
    if(prop["nota"] <= 7  && prop["faltas"] >= 5) {
        prop["situacao"] = "Aprovado";
    } else {
        prop["situacao"] = "Reprovado";
    }
});


// 3 - Exiba no console apenas os alunos aprovados (com nome e nota).

let aluAprov = objAluJSON.alunos.filter(prop => (prop["situacao"] != "Reprovado"));

quadro.push("ALUNO", "NOTA", "SITUACAO");
Quadro3(quadro, 35, "-");

aluAprov.forEach(prop => {
    console.log(
        prop.nome.padEnd(15) +
        String(prop.nota).padEnd(10)+
        "Aprovado"
    );
});

// 4 - Adicione um novo aluno: { "id": 5, "nome": "Duque", "nota": 9.8, "faltas": 1 } :

linha(35);

objAluJSON.alunos.push({"id": 5, "nome": "Duque", "nota": 9.8, "faltas": 1, "situacao": "Aprovado"});

aluAprov = objAluJSON.alunos.filter(prop => (prop["situacao"] != "Reprovado"));

aluAprov.forEach(prop => {
    console.log(
        prop.nome.padEnd(15) +
        String(prop.nota).padEnd(10)+
        "Aprovado"
    );
});

// 5 - Calcule a média geral da turma e mostre no console:

const media = objAluJSON.alunos.reduce((acum, aluno) => acum + aluno.nota, 0) / objAluJSON.alunos.length;

linha(35);

console.log(`Media da turma: ${media.toFixed(2)}`);

// 6 - Crie um novo objeto JSON apenas com - "turma", "mediaGeral" e "aprovados" - Use JSON.stringify(obj, null, 2) para exibir o resultado formatado:

linha(35);

const turma = objAluJSON.turma;
const mediaGeral = media.toFixed(2);
const aprovados = aluAprov;

let turmaAtualizada = {turma, mediaGeral, aprovados};

turmaAtualizada = JSON.parse(JSON.stringify(turmaAtualizada));

console.log(JSON.stringify(turmaAtualizada, null, 2));
