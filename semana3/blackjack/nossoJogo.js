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
 */


console.log ( "Bem vindo ao jogo de Blackjack!")


if(confirm ("Quer iniciar uma nova rodada?"))  {
   
let usuario = []   
let computador = []




const carta = comprarCarta()
console.log (carta.texto)
console.log (carta.valor)

for (let i=0 ; i <= 1; i++ ){
   computador.push(comprarCarta())
   usuario.push(comprarCarta())  

}

console.log (usuario)
console.log (computador[0][1])


//console.log ("Usuário - cartas: " + usuario.values())
console.log ("Usuario - cartas: " + usuario[0][1])
console.log ("Computador -cartas: " + computador[1])




}else {
    console.log ("O jogo acabou.")
}
