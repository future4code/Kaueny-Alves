const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)

console.log("e. ", typeof resultado)

/*
a.  false
b.  false
c.  true
d.  false
e.  boolean 
*/

let array
console.log('I. ', array)

array = null
console.log('II. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)

/* 
a. O que é `array` e como se declara em `JS`?
Array são maneiras de se guardar e acessar mais de uma informaçnao ao mesmo tempo.
forma de declarar :
let array = [...,...,...]

b. Qual o index inicial de um `array`?
o indice inicial é 0. 

let array = [1,2,3] 
nesse caso seria o n.1

c. Como se determinar o tamanho do `array`?
array.length

let array = [1,2,3]
let tamanhaDaArrey = array.length
console.log(tamanhoDaArrey)
nesse caso seria 3


d. Indique todas as mensagens impressas no console.
 I. undefined
 II.  null
 III.  11
 IV.  3  e  4
 V.  19  e  9
 VI.  3
 VII.  1
*/





/*
**Exercícios de escrita de código**

1. Para este exercício, será necessário o conhecimento das fórmulas 
para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
    - Graus Fahrenheit(°F) para Kelvin(K)

        ```
        (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
        ```
    - Graus Celsius(°C) para Graus Fahrenheit (°C)

        ```
        (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32
        ```
    */

//a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.//

const  F = (77-32) * 5/9
const K = 273.15
let  trans =  F + K
console.log("77.F em Kelvin é:", trans)

//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.//

const C = 80 * (9/5)
const FA = 32
let trans1 = C + FA
console.log ("80.C em Fahrenheit é:", trans1)

// c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.//

const CE = 30 * (9/5)
const FAH = 32
let trans2 =  CE + FAH
console.log ("30.C em Fahrenheit é:", trans2)

const CEL = 30
const KE = 273.15
let trans3 = CEL + KE
console.log ("30.C em Kelvin é:", trans3)



//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.//



 /*
2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte). 
Imprima-as com as respostas no console da seguinte forma:
1. Qual o seu endereço?
    	Resposta: Rua ABC, 123 
*/
    const nome = prompt ("Qual é o seu nome?")
    console.log("Resposta:", nome) 

    let idade = prompt ("Qual é a sua idade?")
    console.log("Resposta:",idade)

    let telefone = prompt ("Qual é o seu telefone?")
    console.log("Resposta:", telefone)

    let corPreferida = prompt ("Qual é a sua cor preferida?")
    console.log("Resposta:", corPreferida)

    let musicaPreferida = prompt ("Qual é a sua musica preferida?")
    console.log("Resposta:", musicaPreferida)

 /*
3. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. 
Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
*/

   // a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;//

   const  kwh = 280
   const  vl = 0.05
   let   total =  kwh * vl 
   console.log("Valor a ser pago é:", total)

   /* b. Altere o programa para receber mais um valor: a porcentagem de desconto. 
    Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.
    */
   