//como todas as outras questões atribuindo as variaveis neste caso ela se chama numero,
//bem simples nada fora do comum

let numero = prompt("Digite um número:");
numero = parseFloat(numero);

//aqui utilizei o === novamente serve para comparar 
//se dois valores são iguais, verificando tanto o valor quanto o tipo.
if (isNaN(numero)) 
    alert("Valor inválido! Por favor, digite um número válido.");
    
if (numero % 5 === 0) {
    alert("O número é múltiplo de 5.");
} else {
    alert("O número não é múltiplo de 5.");
}
// aqui temos uma novidade que pouco se é comentado em codigos, no caso os sinais matematicos
// aqui temsos % como resto da divisão caso o numero seja divisivel por 5 e em seu resto sobre 0,
//consequentimente este numer é multiplo de 5.