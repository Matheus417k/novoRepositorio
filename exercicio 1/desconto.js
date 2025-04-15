 //procedimento padrão, estou declarando minha varial(linhas 5,6).
 // alem de estar pedindo para maquina interagir com o usuario no navegador.
 // e atribuindo o codigo parseFloat(converter uma string em um numero decimal).

 let valorCompra = prompt("Digite o valor da sua compra:");
 valorCompra = parseFloat(valorCompra);

 // entre as linha (12,13,14) estou colocando os requisitos para que o usuario receba os 10% de desconto
// utilizando os || para verificar se uma das condições é verdadeira, alem de especificar que o valor 
// da compra deve ser superior ou igual a 100.
    
if (isNaN(valorCompra) || valorCompra < 0) {
        alert("Valor inválido! Por favor, digite um número válido para o valor da compra.");
    } else if (valorCompra >= 100) {
        
        

       //aqui utilizei a conta padrão de 0,10 pois qualquer numero multiplicado por este valor, tera seu
       //valor em 10%, exemplo 100*0,10= 10 ou seja 10% de 100 é 10
    
       let desconto = valorCompra * 0.10;
     let valorTotal = valorCompra - desconto;
     
     //- o valor desconto para que o numero seja subtraido pelos seus 10%.

        //O método toFixed() do JavaScript serve 
       //para formatar números com um número específico de casas decimais.
      
       alert("Você ganhou um desconto de 10%!\n" + 
              "Desconto: R$ " + desconto.toFixed(2) + "\n" + 
              "Valor total: R$ " + valorTotal.toFixed(2)); 
    } else {
      
        //caso seja menor que o valor sitato esta mensagem aparecerá.
       
        alert("pegue seu caminho e siga bem caminhoneiro.");
    }



