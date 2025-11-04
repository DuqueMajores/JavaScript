/*
Você deve criar um sistema simples de controle de presença em um evento.
Cada pessoa é identificada pelo nome (string).

🧩 Requisitos:

Crie um Set chamado presentes.

Adicione os seguintes nomes:
"Ana", "Bruno", "Carla", "Daniel", "Ana" (sim, repetido de propósito).

Exiba o total de pessoas presentes (sem contar duplicatas).

Verifique se "Bruno" está na lista.

Remova "Daniel" do conjunto.

Mostre todos os nomes presentes em ordem alfabética.
*/

const presentes = new Set();
function verificarPresenca(nome){
    if(presentes.has(nome)){
        console.log(`${nome} já está presente.`)
    } else {
        console.log(`${nome} foi adicionado a lista!`)
        presentes.add(nome);
    }
}
function atualizarLista(){
    let listaFinal = [...presentes];
    console.log(`Lista Final: ${listaFinal}`);
}

presentes.add('Ana');
presentes.add('Bruno');
presentes.add('Carla');
presentes.add('Daniel');
presentes.add('Ana');

console.log(`Total de presentes: ${presentes.size}`);
console.log(`Bruno está presente? ${presentes.has('Bruno')}`);

atualizarLista();

verificarPresenca('Daniel');
verificarPresenca('Gabriela');

atualizarLista();
