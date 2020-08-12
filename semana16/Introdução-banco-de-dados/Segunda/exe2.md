# Introdução a Banco de Dados e SQL

> Status do Projeto: Em desenvolvimento

<h4>Exercício 2</h4>

O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.

``` sql
INSERT INTO Actor (id, name, salary, birth_date)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

Atente-se a 3 fatos nessa query:

1. A ordem dos valores ( `VALUES` ) é definida pela lista colocada depois do nome da tabela ( `ACTOR` ): `(id, name, salary, birth_date)` .
2. Os valores `VARCHAR` (strings) devem ser indicados com `"`
3. As datas seguem o padrão: `YYYY-MM-DD`
*a. Escreva uma query que crie a atriz `Glória Pires` , com o id `002` , salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

*b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002` . Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*

*Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*

* *c. Clique aqui*

    

``` sql
    INSERT INTO Actor (id, name, salary)
    VALUES(
      "003", 
      "Fernanda Montenegro",
      300000,
      "1929-10-19", 
      "female"
    );
    ```

* *d. Clique aqui*

    

``` sql
    INSERT INTO Actor (id, salary, birth_date, gender)
    VALUES(
      "004",
      400000,
      "1949-04-18", 
      "male"
    );
    ```

* *e. Clique aqui*

    

``` sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
      "005", 
      "Juliana Paes",
      719333.33,
      1979-03-26, 
      "female"
    );
    ```

*f. Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.*

* Dicas

    c.

    

``` sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
      "003", 
      "Fernanda Montenegro",
      300000,
      "1929-10-19", 
      "female"
    );
    ```

    d.

    

``` sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
      "004", 
      "Antônio Fagundes",
      400000,
      "1949-04-18", 
      "male"
    );
    ```

    e.

    

``` sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
      "005", 
      "Juliana Paes",
      719333.33,
      "1979-03-26", 
      "female"
    );
    ```
