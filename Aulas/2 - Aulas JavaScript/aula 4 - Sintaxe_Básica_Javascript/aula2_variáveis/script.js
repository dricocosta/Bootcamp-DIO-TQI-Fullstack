// tipos primitivos

//boleanos
var VouF = false;
console.log(VouF);
console.log(typeof(VouF));

// number
var numeroQualquer = 1
console.log(numeroQualquer);

// string
var nome = "Elvis";
console.log(nome);
console.log(typeof(nome));

// Declaração de variáveis
var variavel_var = "pode ter seu valor alterado e se não tiver valor será tratada como null/indefinida";
let variavel_let = "pode ter seu valor alterado e se não tiver valor será tratado com null/invalido";
const variavel_constante = "somente leitura, não pode ser alterada após valor atribuído a ela";

var variavel = "Beatles";
console.log(variavel);

let variavel2 = "Johnny"
variavel2 = "Cash";
console.log(variavel2);

const constante = "Presley"
console.log(constante)

// escopo global
var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}
escopoLocal();

// atribuição
var atribuicao = "Belchior"

// comparação
var comparacao = '0' == '0';
console.log(comparacao);

// comparação identica
var comparacaoIdentica = '0' === 0; // compara o valor e os tipos
console.log(comparacaoIdentica);

// adição
var adicao = 1 + 2;
console.log(adicao);

// subtracao
var subtracao = 2 - 1;
console.log(subtracao);

// multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

// divisão Real
var divisaoReal = 25 / 5;
console.log(divisaoReal);

// divisão Inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

// Maior que '>'
var maiorQue = 5 > 2;
console.log(maiorQue);

// Menor que
var menorQue = 5 < 2;
console.log(menorQue);

// Maior ou igual
var maiorOUigual = 15 >= 12;
console.log(maiorOUigual);

// Menor ou igual
var menorOuigual = 2 <= 5;
console.log(menorOuigual)

// operadores lógicos - e, ou
var e = true && true; // só é verdade quando tem duas verdades
console.log(e);

var ou = true // false; // éverdade quando tem pelo menos uma verdade
console.log(ou);

var nao = !true; // inverte o valor lógico
console.log(nao);





