/* 
Você deve criar um sistema que gerencie a pontuação de jogadores em tempo real, utilizando a estrutura Map() para armazenar e manipular os dados.

🏗️ Requisitos do Exercício

1 - Crie um Map() chamado pontuacoes.

2 - Cada chave do mapa será o nome do jogador, e o valor será sua pontuação (número inteiro).

3 - Crie uma função chamada adicionarPontuacao(jogador, pontos) que:

    Adiciona um novo jogador ao mapa, se ele ainda não existir.

    Soma os pontos ao jogador, se ele já existir.

4 - Crie uma função chamada mostrarRanking() que:

    Retorna os jogadores ordenados por pontuação (do maior para o menor).

    Exibe algo como:

    🏆 Ranking Atual:
    1. Alice - 120 pts
    2. Bob - 90 pts
    3. Carol - 75 pts


3- Crie uma função chamada removerJogador(nome) que:

    Remove o jogador do Map() se ele existir.

6 - No final, simule um pequeno fluxo:

    Adicione 3 jogadores e atualize as pontuações várias vezes.

    Mostre o ranking final.

    Remova um jogador e exiba o ranking atualizado.
*/

const pontuacoes = new Map();

function adicionarPontuacao(jogador = '', pontos = 0) {
    const pts = Number(pontos) || 0;
    if (pontuacoes.has(jogador)) {
        pontuacoes.set(jogador, pontuacoes.get(jogador) + pts);
    } else {
        pontuacoes.set(jogador, pts);
    }
}

function removerJogador(nome) {
    if (pontuacoes.has(nome)) {
        pontuacoes.delete(nome);
        return true;
    }
    return false;
}

function mostrarRank() {
    const ranking = [...pontuacoes.entries()].sort((a, b) => b[1] - a[1]);
    console.log('🏆 Ranking Atual:');
    ranking.forEach(([nome, pontos], index) => {
        console.log(`${index + 1}. ${nome} - ${pontos} pts`);
    });
}
