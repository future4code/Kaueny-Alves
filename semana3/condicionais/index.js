
/*
EXERCÍCIO 1
Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

Explique o que o código faz. Qual o teste que ele realiza? 
Ele testa um número, se a comparação dos valores são iguais.

Para que tipos de números ele imprime no console "Passou no teste"? 
Para todos os valores em números.


Para que tipos, a mensagem é "Não passou no teste"? 
Para os valores escrito em texto.



EXERCÍCIO 2
O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


a. Para que serve o código acima?
Para descobrir o valor de uma determinada fruta.

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O preço da fruta  Maçã  é  R$  2.25.

c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva.
 Qual seria o preço que você pagaria?
 O preço seria: R$ 24.55 (as bananas sairiam R$ 5 cada).

d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos 
o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
A mensagem é : O preço da fruta  Pêra  é  R$  5.


EXERCÍCIO 3

Leia o código abaixo:

const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)

Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal?   
Haverá algum erro? 
Uncaught ReferenceError: mensagem is not defined
    at VM5 index.js:86
Sim, o erro indica que a mensagem não esta definida.    

Justifique usando os conceitos de bloco ou escopo.
A variavel let mensagem, não poderia estar dentro do escopo, ela precisa estar acima do if para declarar a variável.
*/

/*
**Exercícios de escrita de código**

EXERCÍCIO 4

Nos exercícios abaixo, será necessário que você trabalhe com a comparação de números. Leia abaixo:

a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem **decrescente**. 
O que acontece com o seu programa se os 2 números forem iguais? 
(é só testar e colocar um comentário descrevendo o que aconteceu)

b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. 
O que acontece como seu programa se os 3 números forem iguais? 
(é só testar e colocar um comentário descrevendo o que aconteceu)

c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao usuário 
indicando que ele deve, ao menos, inserir um número diferente.
*/

let numero1 = prompt("Digite o primeiro número.")
let numero2 = prompt("Digite o segundo número?")

numero1 = Number (numero1)
numero2 = Number (numero2)

console.log (numero1)
console.log (numero2)

let primeiraResposta = numero1 < numero2
if (numero1 < numero2) {
console.log (primeiraResposta)
console.log (numero2, numero1)
}





/*EXERCÍCIO 5

if (numero1 > numero2 && numero1 < numero2) {
      console.log (numero1 , numero2 )
    } 

Vamos criar um programa que classifique os animais dados alguns critérios. O primeiro critério de divisão é se eles possuem
ossos formando seu esqueleto ou não. Caso possuam, são **vertebrados**, caso contrário, **invertebrados**.
 O nosso foco é realizar a classificação só do primeiro caso. Se possuir pelos, entende-se que ele é um mamífero; 
 e este pode ser classificado como um **ser humano** ou não (**mamífero não humano**), simplesmente, 
 pelo fato dele ser considerado racional ou não. Se não for mamífero, entende-se que ele é uma **ave**, se possuir penas. 
 Se não possuir, devemos entender uma característica importante: se ele é um animal terrestre. Se não for, diz-se que é um **peixe**; 
 se  for, ele pode ser um **anfíbio** ou um **réptil**. Ele será o primeiro (anfíbio), se passar uma parte da vida em ambiente aquático; 
 e será o segundo (réptil), caso contrário.

- OBS

a. Escreva o diagrama esquemático que melhor represente a árvore condicional do exercício. 
(Coloque a imagem do esquema no drive e gerem um link de compartilhamento público. 
    Coloque este link num comentário durante a resolução deste exercício)

b. Escreva um programa que realize estas perguntas  e indique a classificação final considerada. 
As opções são: ser humano; mamífero não humano; ave; réptil; anfíbio; peixe ou é invertebrado.*/