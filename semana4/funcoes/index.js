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

Sim funcionaria, mas é necessário informar o valor que contenha dentro da array.
Ele pede para imprimir Paula, mas dentro da array esta Paulinha.


EXERCÍCIO 3

O código abaixo mostra uma função que recebe um array e devolve outro array. 
Explique rapidamente o que ela faz e sugira um nome melhor para ela!

```jsx

function Incremento (array) {
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


Ele declara tres variaveis , e define seus valores, 
e é feito um for para incrementar o valor recebido do método.
*/