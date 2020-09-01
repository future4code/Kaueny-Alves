# Introdução a Banco de Dados e SQL

> Status do Projeto: Em desenvolvimento

<h4>Exercício 6</h4>

Escreva uma query que:

a. Retorne o id, título e avaliação a partir de um id específico; 

b. Retorne um filme a partir de um nome específico; 

c. Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`
* Dicas

    a. 

    

``` sql
    SELECT id, title, rating FROM Movie WHERE id = "004";
    ```

    b. 

    

``` sql
    SELECT * FROM Movie WHERE name = "Deus é Brasileiro";
    ```

    c.

    

``` sql
    SELECT id, title, synopsis FROM Movie WHERE rating > 7;
    ```
