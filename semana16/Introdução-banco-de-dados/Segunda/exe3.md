# Introdução a Banco de Dados e SQL

> Status do Projeto: Em desenvolvimento

<h4>Exercício 3</h4>
Com os dados criados, podemos nos aventurar nas queries de seleção de dados. Elas são indicadas pelo operador `SELECT` . Talvez a query mais famosa que existe é:

``` sql
SELECT * FROM Actor
```

Ela faz com que se retornem todas as **colunas** (ou "informações") de todas as **linhas** (ou "entradas") da nossa tabela. 

Se quisermos limitar as **colunas**, devemos indicar assim logo após o operador `SELECT` . Abaixo, está uma query que retorna somente o `id` e o `salário` de todos os atores

``` sql
SELECT id, salary from Actor 
```

Agora, se quisermos colocar uma condição para retornar as **linhas** (entradas), devemos usar o operador `WHERE` e colocar a nossa condição que pode usar alguns operadores ( `=` , `!=` , `>` , etc). Abaixo, está uma query que retorna somente o id e o nome dos atores.

``` sql
SELECT id, name from Actor WHERE gender = "male"
```

*a. Escreva uma query que retorne todas as informações das atrizes*

*b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos` *

*c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"` . Explique o resultado.*

*d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*

*e.* T*ente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*

``` sql
SELECT id, nome from Actor WHERE id = "002"
```

* Dicas

    a. 

    

``` sql
    SELECT * from Actor WHERE gender = "female";
    ```

    b. 

    

``` sql
    SELECT salary from Actor WHERE name = "Tony Ramos";
    ```

    c. 

    

``` sql
    SELECT * from Actor WHERE gender = "invalid";
    ```

    d.

    

``` sql
    SELECT id, name, salary from Actor WHERE salary < 500000;
    ```

    e. 

    

``` sql
    SELECT id, name from Actor WHERE id = "002"
    ```
