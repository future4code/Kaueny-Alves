/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 
console.log ( "Bem vindo ao jogo de Blackjack!")


if(confirm ("Quer iniciar uma nova rodada?"))  {

            const cart1 = comprarCarta()
            const cart2 = comprarCarta()
            const cart3 = comprarCarta()
            const cart4 = comprarCarta()

            let usuarioCarta = cart1.texto +" "+ cart3.texto
            let usuariovalor = cart1.valor + " "+ cart3.valor

            let computadorCarta = cart2.texto + cart4.texto
            let computadorvalor = cart2.valor + cart4.valor

            console.log("Usuário - cartas: " + usuarioCarta + " - pontuação " + usuariovalor )
            console.log("Computador - cartas: " + computadorCarta + " - pontuação " + computadorvalor )

            if (usuariovalor > computadorvalor){
               console.log("Usuario ganhou ");
            }else if (usuariovalor < computadorvalor){
               console.log("Computador ganhou ");

            }else {
               console.log("Empate");
            }

   }else {
      console.log ("O jogo acabou.")
  }
  */