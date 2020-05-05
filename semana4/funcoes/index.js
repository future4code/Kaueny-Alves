
 /**Exercícios de interpretação de código**

EXERCÍCIO 1

Leia o código abaixo:

```jsx
   const minhaFuncao = (quantidade) => {
	const array = []
	for (let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
   return array
  
}
console.log(minhaFuncao(8))

```
a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
   [] length: 0
b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
  [0, 1, 0, 1, 2, 3]  length: 6
c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
  [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5] length: 12

*************************************************************************************************************

  EXERCÍCIO 2

Leia o código abaixo:

```jsx
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));

```
a. Explicite quais são as saídas impressas no console

0
2
undefined

b. O código funcionaria se a `lista` fosse um array de números 
(ao invés de um array de `string`)  e o `nome` fosse um número, 
ao se chamar a função? Justifique sua resposta.

R- Sim funcionaria, mas é necessário informar o valor que contenha dentro da array.
Ele pede para imprimir Paula, mas dentro da array esta Paulinha.

*************************************************************************************************************

EXERCÍCIO 3

O código abaixo mostra uma função que recebe um array e devolve outro array. 
Explique rapidamente o que ela faz e sugira um nome melhor para ela!

```jsx

function metodo (array) {
  let resultadoA = 0;
  let resultadoB = 1;
  let arrayFinal = [];

  for (let x of array) {
    resultadoA += x;
    resultadoB *= x;
  }

  arrayFinal.push(resultadoA);
  arrayFinal.push(resultadoB);
  return arrayFinal;
}

console.log (metodo ([10]))


R- O código declara tres variaveis , e define seus valores, 
e é feito um for para incrementar o valor recebido do método.

*************************************************************************************************************

EXERCÍCIO 4
Escreva as funções explicadas abaixo:

a. A função deve receber um número correspondente aos "anos humanos" 
que um cachorro tem e calcular a "idade de cachorro" dele. Considere que 1 ano
 humano equivale a 7 anos de cachorro

- Exemplo

    Para a entrada `4`, deve devolver `28`
 
   
function calculaIdadeCao (idadeCao) {

  let anosHumanos = idadeCao * 7
  return anosHumanos
}
console.log (calculaIdadeCao (4))

b.  Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
o nome (`string`), a idade (`number`), o endereço (`string`) e um `boolean` que representa 
se é estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa e
m uma só mensagem com o template:

```
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.
```

- Exemplo

 Para a entrada:  `"Goli"`, `23`, `"Rua Guarapari 190"` e `true`, deve retornar:

 `"Eu sou Goli, tenho 23 anos, moro em Rua Guarapari 190 e sou estudante."`



function informacoes (nome, idade, endereco, estudante) {

if ( estudante === true){
     estudante = "sou"
}else {
 estudante = "não sou"
}

return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e " + estudante + " estudante."

}

console.log(  informacoes ("Goli", 23, "Rua Guarapari 190", true ))

*************************************************************************************************************
EXERCÍCIO 5
O propósito desse exercício é que você determine a qual século um ano pertence. Para isso, considere as seguintes afirmações:

1. A sua função só precisa funcionar entre os anos 1000dc até 2020dc (se você quiser, pode implementar para um intervalo maior)
2. Ela deve retornar uma `string` com a mensagem: `O ano [ANO] pertence ao século [SÉCULO EM ALGARISMOS ROMANOS]`
3. As regras de século normalmente confundem, então leiam os exemplos para entender melhor



function definirSeculo(ano) {

sobra = ano % 100;
seculo = ano / 100;

if ( ano >= 1000 && ano <=2020) {


   if (sobra === 0) {

       seculo = ano / 100;
       console.log(seculo)

   } else {

       seculo = parseInt(ano / 100) + 1;
       console.log(seculo)

   }

   switch (seculo) {
       case 10:
           console.log("O ano " + ano + " pertence ao século X");
           break;
       case 11:
           console.log("O ano " + ano + " pertence ao século XI");
           break;
       case 12:
           console.log("O ano " + ano + " pertence ao século XII");
           break;
       case 13:
           console.log("O ano " + ano + " pertence ao século XIII");
           break;
       case 14:
           console.log("O ano " + ano + " pertence ao século XIV");
           break;
       case 15:
           console.log("O ano " + ano + " pertence ao século XV");
           break;
       case 16:
           console.log("O ano " + ano + " pertence ao século XVI");
           break;
       case 17:
           console.log("O ano " + ano + " pertence ao século XVII");
           break;
       case 18:
           console.log("O ano " + ano + " pertence ao século XVIII");
           break;
       case 19:
           console.log("O ano " + ano + " pertence ao século XIX");
           break;
       case 20:
           console.log("O ano " + ano + " pertence ao século XX");
           break;
       case 21:
           console.log("O ano " + ano + " pertence ao século XXI");
           break;
   }

}else {
   console.log("Digite um ano entre 1000 e 2020")
}

}

definirSeculo(1100);
definirSeculo(1101);
definirSeculo(1534);
definirSeculo(1630);

*************************************************************************************************************
EXERCÍCIO 6

Para os itens a seguir, considere o seguinte array para os seus testes:

```jsx
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
```

a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par



const numeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

console.log(numeros.length);

*/ 

