// Você recebeu um array de objetos representando usuários de um sistema. Cada objeto contém o nome e a idade do usuário. Sua tarefa é criar um novo array usando map() que  contenha apenas os nomes em letras maiúsculas.

const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 30 },
  { nome: "Carla", idade: 28 },
  { nome: "Diego", idade: 22 }
];

// -------------------------------

const usuarioMaiuscolo = usuarios.map(p=> p.nome.toUpperCase());

console.log(usuarioMaiuscolo);

// -------------------------------

// Desafio: crie um novo array de mensagens personalizadas no formado:
// "Olá, [NOME], você tem [IDADE] anos."

const mensagem = usuarios.map(p => `Olá ${p.nome}, você tem ${p.idade} anos.`);

console.log(mensagem);
