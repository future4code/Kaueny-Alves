//Exercicios de Interpretação de código

//Analise os trechos de código em cada exercício e escreva o que ele faz, como faz e qual será o valor impresso no `console`.

//exercicio 1
//Essa função converte o valor em dólar para real.
//O usuário informa o valor da cotação do dolar, 
//depois esse valor é multiplicado por 100 (valor usado como parametro), para obter o resultado em Reais, 
//o valor impresso é o valor do dolar convertido em Reais

//exercicio 2
//Essa função é para investir valores em diferentes tipos de investimentos.
//Quando é informado o tipo de investimento e o valor essa função executa casos 
//especificos para fazer o calculo investido e retornar o valor após o investimento.
//o valor impresso, é o valor após investimento.
//(novoMontante) Ações 165 - 
//(segundoMontante) Tipo de investimento informado incorreto!

//exercicio 3
//Essa função é para verificar qual numero é par e qual é impar.
//caso for par ele coloca no array1, caso for impar ele coloca no array2.
// e imprime no console a quantidade de numeros em cada array.
//numeros - Quantidade total de numeros: 14
//array1 - 6
//array2 - 8


//exercicio 4
//Essa função esta verificando qual numero é o menor e qual numero é o maior desse array.
//numero1 recebe o menor numero
//numero2 recebe o maior numero
// o valor impresso é : 
// -10  
//  1590




//Exercicios de Funções

//exercicio 1 
//Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo menor número.
// Em seguida, invoque essa função.

/*
let listaNumeros = [01,10,09,04,15,02]

 listaNumeros.sort(function(a,b){
    return a - b 
})

function lista () { 
    console.log (listaNumeros)
    let segundoMaior = listaNumeros.length-2
   console.log( "Esse é o segundo menor numero: " + listaNumeros[1])
   console.log( "Esse é o segundo maior numero: " + listaNumeros[segundoMaior])
}

    lista()
*/


//exercicio 2
//Escreva uma **função não nomeada** que faça um `alert("Hello Future4");`.
// Em seguida, invoque essa função.

/*
let saudacao = () =>  alert("Hello Labenu")

saudacao()
*/



//Exercicios de Lógica de programação

//exercicio 1
//Cite 3 maneiras de se percorrer/iterar uma lista.
// Faça um programa para exemplificar.

// MANEIRA
/* 
let numeros = " "
let i = 0

while (i < 15){

    numeros += " " + i
    i++
}
console.log(numeros)
*/

//2 MANEIRA
/*
let numeros = []

for (let i = 0 ; i < 15 ; i++){

    numeros = i
    console.log(numeros)
}
*/

//3 MANEIRA
/*
let numeros = [0,1,2,3,4,5,6,7,8,9]
let numerosPares = []

for (let numero of numeros){

    if(numero %2 === 0){
        numerosPares.push(numero)
    
    console.log(numerosPares)
}}
*/

//exercicio 2
//const booleano1 = true
//const booleano2 = false
//const booleano3 = !booleano2
//const booleano4 = !booleano3 

//Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

//a) `booleano1 && booleano2 && !booleano4` 
// FALSE

//b) `(booleano1 && booleano2) || !booleano3`
//  TRUE

//c)  `(booleano2 || booleano3) && (booleano4 || booleano1)`
//  FALSE 

//d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)`
// TRUE 

//e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
// TRUE



//exercicio 3
//Você tem que escrever um código que, dado um número N, ele imprima (no console) 
//os N primeiros números pares (por exemplo, se N for 3, você deve imprimir 0, 2 e 4; 
//se N for 5, deve imprimir 0, 2, 4, 6 e 8). 
//Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar. 
//Dê uma olhada no código dele: 
//Este código funciona? Por quê? 
//Caso não funcione, corrija a implementação dele.

//R- Não funciona, Faltou ele inicializar com um número na const, ele não pediu para 
//fazer a incrementação e isso pode gerar um loop infinito, e ele não pode ser
//menor igual que i para obter o indice desejado, apenas menor que i.

/*
const quantidadeDeNumerosPares = 5
let i = 0

while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}
*/


//exercicio 4
//Vocês lembram de trigonometria? (Oh, não, trigonometria). Relaxem. O exercício é simples, mas mexe com isso. 
//Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos como classifica-los dependendo 
//do tamanho de seus lados. Se um triângulo possuir os três lados iguais, ele é chamado de "Equilátero". 
//Se possuir, dois (e somente 2) lados iguais, diz-se que ele é "Isósceles". 
//Se os três lados tiverem medidas diferentes, ele é "Escaleno". 
//Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: 
//a, b, c  e retorne se ele é equilátero, isósceles ou escaleno.

/*
function  triangulo (lado1,lado2,lado3){
    if (lado1 === lado2 && lado1 === lado3){

       return console.log("Este triangulo é Equilátero.")

    } if(lado1 === lado2 && lado1 !== lado3 || lado1 === lado3 &&  lado1 !== lado2  || lado3 === lado2 && ! lado3 !== lado1){

       return console.log("Este triangulo é Isóceles.")

    } else if(lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3 && lado2 !== lado1) {

        return console.log("Este triangulo é Escaleno.")
    }
}

triangulo (0,3,1)
*/


//exercicio 5
//Faça um programa que, dados dois números,
// i. indique qual é o maior,
// ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e
// iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)
