package one.digitalinnovation.basecamp;

/**
 * Classe de exemplo para o exercício da Aula 1 de Variáveis, Tipos de Dado e Operadores aritméticos.
 */
public class Main {

    public static void main(String[] args) {

        // 1º Exemplo

        int i;
        //int i; Variáveis não podem possuir o mesmo nome
        int I; // O Java é case sensitive
        //int 1a; // Variáveis em Java mão podem começar com números
        int _1a; // Deve-se evitar começar variáveis neste formato
        int $aq; // Deve-se evitar começar variáveis neste formato

        i = 5;
        I = 10;
        _1a = 20;
        $aq = 7;

        // 2º Exemplo

        final int j = 10; // variável Constante, não pode ser alterado
        //j = 15;
        int asrn24678md;
        //int asrn246 78md; // Não é permitido espaço no nome da variável
        int asrn2$4678_md = 10;
        //int asrn2$46%78_md = 10; // Caracteres especiais não podem ser usados

        asrn24678md = 100;
        asrn2$4678_md = 10;

        // 3º Exemplo

        int quantidadeProduto = 50;
        //int QuantidadeProduto;
        final int NUMERO_TENTATIVAS = 5;
        //final int numeroTentativas = 5; // final sempre com letras MAIUSCULAS
        int QUANTIDADE_OPCOES = 25;
        //int qtdProd; // O nome deve ser claro/objetivo

        System.out.println(i);
        System.out.println(I);
        System.out.println(_1a);
        System.out.println($aq);

        System.out.println(j);
        System.out.println(asrn24678md);
        System.out.println(asrn2$4678_md);

        System.out.println(quantidadeProduto);
        System.out.println(NUMERO_TENTATIVAS);
        System.out.println(QUANTIDADE_OPCOES);

    }
}