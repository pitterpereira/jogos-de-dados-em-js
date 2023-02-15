'use strict';

// section dos jogadores
const player0Section = document.querySelector('.player--0');
const player1Section = document.querySelector('.player--1');

// Pontuação principal
const scoreTotal0 = document.querySelector('#score--0');
const scoreTotal1 = document.querySelector('#score--1');

// Pontuação do turno do jogador
const scoreAtual0 = document.querySelector('#current--0');
const scoreAtual1 = document.querySelector('#current--1');

// Dado central
const dado = document.querySelector('.dice');

// Botões
const btnNovoJogo = document.querySelector(".btn--new");
const btnRolarDado = document.querySelector(".btn--roll");
const btnGuardar = document.querySelector(".btn--hold");

// Iniciando os pontos com zero
scoreTotal0.textContent = 0;
scoreTotal1.textContent = 0;

// Inicialmente, o dado central fica escondido
dado.classList.add('hidden');

let valorDadoRolado = 0; // Dado rolado
let scoreAtual = 0;      // Somatório das rolagens

let pontuacaoJogadores = [0, 0] // Pontuação inicial dos jogadores
let jogadorAtivo = 0;           // O jogador da vez

let jogando = true;   // COntrola o estado do jogo

// Rola os dados para o jogador marcar pontos
btnRolarDado.addEventListener('click', () => {

    if(jogando) {

        // Se estiver escondido, mostrar
        if (dado.classList.contains('hidden'))
            dado.classList.remove('hidden');

        valorDadoRolado = Math.trunc(Math.random() * 6) + 1;

        dado.src=`./images/dice-${valorDadoRolado}.png`;

        // Se o valor do dado não for 1...
        if (valorDadoRolado !== 1){

            // Valor deve ser adicionado aos pontos
            scoreAtual += valorDadoRolado;
            document.querySelector(`#current--${jogadorAtivo}`).textContent = scoreAtual;

        } else
            mudaPlayer();
    }
});

// Guarda os valores das rolagens no total do jogador
btnGuardar.addEventListener('click', () => {

    if(jogando) {

        // Soma os pontos conseguidos ao total
        pontuacaoJogadores[jogadorAtivo] += scoreAtual

        // Seta o valor somado ao score total do jogador ativo no momento
        document.querySelector(`#score--${jogadorAtivo}`).textContent = pontuacaoJogadores[jogadorAtivo];

        // Zera a pontuação atual do jogador ativo
        document.querySelector(`#current--${jogadorAtivo}`).textContent = 0;

        // Se a pontuação do jogador atual chegar a 100, ele vence
        // ----- Recomendo setar o valor para 10 para realizar testes -----
        if(pontuacaoJogadores[jogadorAtivo] >= 100){

            jogando = false;
            document.querySelector(`.player--${jogadorAtivo}`).classList.add('player--winner');

        } else

            mudaPlayer();
    
    }
});

// Reseta os elementos que compõem o jogo
btnNovoJogo.addEventListener('click', () => {

    // Sumir o dado
    dado.classList.add('hidden');

    // Reset das variáveis
    valorDadoRolado = 0; 
    scoreAtual = 0;      
    pontuacaoJogadores = [0, 0]
    
    // Iniciando os pontos com zero
    scoreTotal0.textContent = pontuacaoJogadores[0];
    scoreTotal1.textContent = pontuacaoJogadores[1];

    // Zera a pontuação atual do jogador ativo
    document.querySelector(`#current--${jogadorAtivo}`).textContent = 0;

    // Zera score das rolagens
    scoreAtual = 0;

    // Reset do estilo das sections dos jogadores. O jogador ativo recomeça o jogo
    document.querySelector(`.player--${jogadorAtivo}`).classList.remove('player--winner');

    // Reset do estado do jogo
    jogando = true; 
});


// Função para alterar o jogador do momento
function mudaPlayer() {

    // Zera a pontuação atual do jogador ativo
    document.querySelector(`#current--${jogadorAtivo}`).textContent = 0;

    // Zera score das rolagens
    scoreAtual = 0;

    // Muda para o próximo jogador
    jogadorAtivo = jogadorAtivo === 0 ? 1 : 0;

    // Muda o destaque nos h2 dos jogadores
    player0Section.classList.toggle('player--active');
    player1Section.classList.toggle('player--active');
}




