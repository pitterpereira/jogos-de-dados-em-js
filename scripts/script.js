/* ----------------------------------------------------------------------- */
/* GLOBAIS */
/* ----------------------------------------------------------------------- */

let titulo = document.querySelector("h1");

let jogador1 = document.getElementById("jogador1");
let jogador2 = document.getElementById("jogador2");

let dado1 = document.querySelector("img.img1");
let dado2 = document.querySelector("img.img2");

/* ----------------------------------------------------------------------- */
/* LÓGICA */
/* ----------------------------------------------------------------------- */

// Ao clicar no botão...
document.querySelector("button").addEventListener("click", function(){
    // Gera números aleatórios entre 1 e 6 para os dados
    var valor_dado1 = geraNumero();
    var valor_dado2 = geraNumero();

    // Normaliza o estado das fontes
    jogador1.style.fontWeight = "normal";
    jogador2.style.fontWeight = "normal";

    // Seta uma imagem de acordo com o valor gerado
    dado2.setAttribute('src', 'images/dice' + valor_dado2 + '.png');
    dado1.setAttribute('src', 'images/dice' + valor_dado1 + '.png');

    // Analisa quem ganhou e seta o resultado no h1 da página
    if (valor_dado1 > valor_dado2) {
        titulo.textContent = "🚩 O jogador 1 venceu!";
        jogador1.style.fontWeight = "bold";
    } else if (valor_dado2 > valor_dado1) {
        titulo.textContent = "O jogador 2 venceu! 🚩";
        jogador2.style.fontWeight = "bold";
    } else {
        titulo.textContent = "🏳️ Deu empate! 🏳️";
    }
});

/* ----------------------------------------------------------------------- */
/* FUNÇÕES */
/* ----------------------------------------------------------------------- */

// Gerador de números aleatórios entre 1 e 6
function geraNumero(){
    return Math.floor(Math. random() * 6) + 1;
}