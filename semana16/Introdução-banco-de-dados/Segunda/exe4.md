# Introdução a Banco de Dados e SQL

> Status do Projeto: Em desenvolvimento

<h4>Exercício 4</h4>

Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:

* cujos nomes começam com "A" ou "J"; e
* cujos salários são maiores do que R$300.000

Para fazer a primeira parte, vamos usar o comparador `LIKE` , que permite comparar strings. Para verificar se uma palavra começa com a letra "A", usamos a sintaxe: `LIKE "A%"` porque `%` indica uma string genérica. O operador "ou" é indicado por `OR` . Assim, a primeira condição é indicada por: `WHERE name LIKE "A%" OR name LIKE "J%"` . 

Já a segunda parte é simples: `salary > 300000` . O que pode confundir é o operador lógico "e" ( `AND` ). A ideia aqui é que todos os atores terão o salário maior do que R$300.000, mas seus nomes poderão começar com o "A" ou "J". Dessa forma, a query vai ficar dessa forma (preste atenção nos parênteses):

``` sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

Assim como o `LIKE` existem os operadores: 

* `BETWEEN` : permite verificar se um valor está entre dois: `BETWEEN valor1 AND valor2` .
* `NOT` : que indica uma negação de comparação. Pode ser usado antes de outros operadores como: `NOT LIKE` , `NOT BETWEEN`
*a. Explique com as suas palavras a query acima*

*b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000, 00*

*c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 

*d. Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000, 00 e R$900.000, 00*

* Dicas

    b.

    

``` sql
    SELECT * FROM Actor
    WHERE name NOT LIKE "A%" AND salary > 350000;
    ```

    c.

    

``` sql
    SELECT * FROM Actor
    WHERE name LIKE "%g%" OR name LIKE "%G%";
    ```

    d.

    

``` sql
    SELECT * FROM Actor
    WHERE 
    	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
      AND salary BETWEEN 350000 AND 900000;
    ```
