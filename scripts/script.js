
// Gerador de números aleatórios entre 1 e 6
var dado1 = Math.floor(Math. random() * 6) + 1;
var dado2 = Math.floor(Math. random() * 6) + 1;

// Seta uma imagem de acordo com o valor gerado
document.querySelector("img.img1").setAttribute('src', 'images/dice' + dado1 + '.png');
document.querySelector("img.img2").setAttribute('src', 'images/dice' + dado2 + '.png');

// Analisa quem ganhou e seta o resultado no h1 da página
if (dado1 > dado2) {
    document.querySelector("h1").textContent = "🚩 O jogador 1 venceu!";
} else if (dado2 > dado1) {
    document.querySelector("h1").textContent = "O jogador 2 venceu! 🚩";
} else {
    document.querySelector("h1").textContent = "Deu empate!";
}
