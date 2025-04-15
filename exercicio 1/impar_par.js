
// Solicita ao usuário para digitar um número
//Let pode se referir a uma função que define variáveis com nome.
let numero = prompt("Digite um número:");

// A função parseInt serve para converter uma string em um número inteiro
numero = parseInt(numero);

// A função isNaN serve para determinar se um valor é ou não um número. 
if (isNaN(numero)) {
    alert("Valor inválido! Por favor, digite um número válido.");
    //A função alert() do JavaScript exibe uma mensagem de alerta na tela do navegador. 
    //É uma ferramenta útil para criar interações simples com o usuário. 
} else {

    if (numero % 2 === 0) {
        alert("O número é par.");
        //=== serve para comparar dois valores e verificar se eles são exatamente iguais, 
        //tanto em valor quanto em tipo
    } else {
        alert("O número é ímpar.");
    }

}

