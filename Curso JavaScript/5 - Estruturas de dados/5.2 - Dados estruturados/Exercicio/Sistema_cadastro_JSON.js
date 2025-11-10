// Você é responsável por implementar uma rotina simples que gerencia usuários de um sistema. Os dados vêm de uma API (simulada com uma string JSON) e precisam ser tratados e atualizados dinamicamente.

const respostaAPI = `
{
  "usuarios": [
    { "id": 1, "nome": "Ana", "cargo": "Desenvolvedora", "ativo": true },
    { "id": 2, "nome": "Carlos", "cargo": "Designer", "ativo": true },
    { "id": 3, "nome": "Bruna", "cargo": "Analista", "ativo": false }
  ]
}
`;

// 1 - Coverta a string JSON acima para um objeto JavaScript:

const objResAPI = JSON.parse(respostaAPI);

// 2 - Liste no console o nome de todos os usuários ativos:

objResAPI.usuarios.forEach((element, position) => {
    if(element["ativo"] == true){
        console.log(`${position+1} - ${element["nome"]}`)
    }
});

// 3 - Adicione um novo usuário ao array usuarios: { "id": 4, "nome": "Duque", "cargo": "Tech Lead", "ativo": true }

objResAPI.usuarios.push({id: 4, nome: "Duque", cargo: "Tech Lead", ativo: true});

console.log(objResAPI.usuarios);

// 4 - Desative o usuário com id = 2:

objResAPI.usuarios[1]["ativo"] = false;

// 5 - Converta novamente o objeto JavaScript atualizado para uma string JSON:

const novaResAPI = JSON.stringify(objResAPI);

// 6 - Mostre no console o resultado final (string JSON formatada):

console.log(JSON.stringify(objResAPI, null, 2));
