
# Aprofundamento SQL

> Status do Projeto: Em desenvolvimento :warning:


<h4>Exercício 1</h4>


d. Agora,  altere a coluna gender da tabela `ACTOR` para que ele aceite strings com até `100 caracteres`
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
<h4>Exercício 2</h4>

a. Escreva uma query que atualize o `nome e a data de nascimento do ator` com o id `003`.
````
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
````

b. Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PÃES`. Então, escreva outra query para voltar ao nome anterior.
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```

c. Escreva uma query que atualize todas as informações do ator com o id `005`
```
UPDATE Actor
SET 
		name = "Moacyr Franco",
		birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";
```

d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.



<h4>Exercício 3</h4>

<h4>Exercício 4</h4>

<h4>Exercício 5</h4>

<h4>Exercício 6</h4>