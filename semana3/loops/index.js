
/*
**Exercícios de interpretação de código**

EXERCÍCIO 1

O que o código abaixo está fazendo? 
Ele esta somando as duas variáveis, enquanto a condiçnao não for 
 Qual o resultado impresso no console? 
105


let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)


EXERCÍCIO 2

Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)


a. O que o comando `.push` faz?
O comando push empurra para novaLista todos os numeros que dividido por 5 não tem sobra, ou a sobra é igual a 0.
b. Qual o valor impresso no console?
(4) [10, 15, 25, 30]
c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? 
(3) [12, 18, 30]
E se tivesse o valor de `4`?
[12]



Exercícios de escrita de código

EXERCÍCIO 3
Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') 
que seja composto somente de números.
 Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

a. Escreva um programa que devolva o maior e o menor números contidos no array original

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maxNumeroAtual = array[0]
let minNumeroAtual = array[0] 

for (let numero of array) {
    if (numero > maxNumeroAtual) {
        maxNumeroAtual = numero
    } if (numero < minNumeroAtual){
        minNumeroAtual = numero
    }
}

console.log("O maior número é" + " " + maxNumeroAtual + " " + "e o menor é" +" " + minNumeroAtual )


/*
b. Escreva um programa que devolva um novo array contendo 
todos os valores do array original divididos por 10.


const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novaLista = []
let numeroDividido = 0
	
	for (const item of lista) {
	    numeroDividido = item/10
	    novaLista.push(numeroDividido)
	  }
  console.log(novaLista)

c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.

const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novaLista = []

    
    for (const item of lista) {
       if ( item%2 === 0 ){
        novaLista.push(item)
      }
    }
  console.log(novaLista)

d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"


const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novaLista = []
let i = 0

  for (const item of lista){
    novaLista.push ("O elemento do index " + i + " " + "é " +  item)
     i++
    }
    console.log (novaLista)


Exemplos do que o código tem que fazer em cada item:

```jsx
// Este array será usado para exemplificar as respostas de todos os itens
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// Resposta a.
"O maior número é 130 e o menor é 21"

// Resposta item b.
[8, 3, 13, 4, 6, 2.1, 7, 12, 9, 10.3, 11, 5.5]

// Resposta item c.
[80, 30, 130, 40, 60, 70, 120, 90, 110] 

// Resposta item d.
[ 'O elemento do índex 0 é 80',
  'O elemento do índex 1 é 30',
  'O elemento do índex 2 é 130',
  'O elemento do índex 3 é 40',
  'O elemento do índex 4 é 60',
  'O elemento do índex 5 é 21',
  'O elemento do índex 6 é 70',
  'O elemento do índex 7 é 120',
  'O elemento do índex 8 é 90',
  'O elemento do índex 9 é 103',
  'O elemento do índex 10 é 110',
  'O elemento do índex 11 é 55' ]

``` */