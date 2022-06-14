var jogador1 = 0;
var jogador2 = 0;
var placar;

// usando if
if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');

// usando else if
} else if (jogador2 > 0){
    console.log('Jogador 2 marcou ponto!');

// usando else
} else {
    console.log('Ninguém marcou ponto!');
}

// switch

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!');
        break;
    default:
        console.log('Ninguém ganhou.');
}
