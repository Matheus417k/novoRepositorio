//comando que é feito para o usuario digitar um numero no navegador padrão de seu pc.
const numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero)){
    alert("seu caracter é invalido. ");
    
} else{
    if(numero>=0) {
        alert("muito bem seu numero é positivo");
    }else{
        alert("seu numero é negativo ")
    }
}
// isNaN feito para evitar que o usuario digite uma letra ao em vez de um numero,que é oque esta sendo
//solicitado.
//console.log para registrar mensagem e depurar o codigo.
// OBS: troquei o console.log pois a resposta não eatava aparecendo na pagina em si e sim no inspecionar
//console, agora assim que o usuario digita o resultado aparece na mesmo na mesma hora.
//o else serve para especificar oque deve ser feito se a condição do comando if for falsa.



