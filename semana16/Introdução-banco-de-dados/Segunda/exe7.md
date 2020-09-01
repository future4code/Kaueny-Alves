# Introdução a Banco de Dados e SQL

> Status do Projeto: Em desenvolvimento

<h4>Exercício 6</h4>

    Escreva uma query que:

    a. Retorna um filme cujo título contenha a palavra `vida`
    b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.

    c. Procure por todos os filmes que já tenham lançado

    d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7` . 

    - Dicas

        a. 

        

``` sql
        SELECT * FROM Movie
        WHERE title LIKE "%vida%";
        ```

        b. 

        

``` sql
        SELECT * FROM Movie
        WHERE title LIKE "%TERMO DE BUSCA%" OR
              synopsis LIKE "%TERMO DE BUSCA%";
        ```

        c. 

        

``` sql
        SELECT * FROM MOVIE
        WHERE release_date < "2020-05-04";
        ```

        d.

        

``` sql
        SELECT * FROM MOVIE
        WHERE release_date < "2020-05-04" AND 
              (title LIKE "%TERMO DE BUSCA%" OR
              synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
        ```

        Se você chegou até as soluções acima, parabéns! Terminou os exercícios. 
        Só queremos fazer uma pequena observação. E se quiséssemos tornar as queries com a data de lançamento de tal forma que não precisemos atualizar o dia.?Do jeito que está agora, amanhã, termos que trocar o valor do que está depois do `<` . 

        Existe uma forma de pegar o dia atual no MySQL. Nessa linguagem, existe a possibilidade de usarmos funções existentes que fazem algumas operações ou dão alguns valores específicos. Para pegarmos o dia atual ("current date" em inglês), com a função: `CURDATE` . Podemos mudar nossa query para:

        

``` sql
        SELECT * FROM MOVIE
        WHERE release_date < CURDATE() AND 
              (title LIKE "%TERMO DE BUSCA%" OR
              synopsis LIKE "%TERMO DE BUSCA%");
        ```

        Fiquem tranquilos porque veremos amanhã as Funções no MySQL
