# Introdução a Banco de Dados e SQL

> Status do Projeto: Em desenvolvimento

<h4>Exercício 5</h4>

Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)

*a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT` , pesquise sobre ele se precisar. Explique a query resumidamente.*

*Crie 4 filmes com as seguintes informações:* 

* b. Clique aqui

    id: `001`
    Título: `Se Eu Fosse Você`
    Sinopse: `Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos`
    Data de lançamento: `06/01/2006`
    Avaliação: `7`
* c. Clique aqui

    id: `002`
    Título: `Doce de mãe`
    Sinopse: `Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela`
    Data de lançamento: `27/12/2012`
    Avaliação: `10`
* d. Clique aqui

    id: `003`
    Título: `Dona Flor e Seus Dois Maridos`
    Sinopse: `Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.`
    Data de lançamento: `02/11/2017`
    Avaliação: `8`
* e. Clique aqui

    Pesquise algum filme brasileiro e crie ele na tabela

* Dicas

    a.

    

``` sql
    CREATE TABLE Movie (
    		id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL UNIQUE,
        synopsis TEXT NOT NULL,
        release_Date DATE NOT NULL,
        rating INT NOT NULL
    )
    ```

    Achamos que já demos muitos exemplos de `INSERT` . Então aqui vai uma query para o item `e` :

    

``` sql
    INSERT INTO Movie (id, title, synopsis, release_date, rating) 
    VALUES(
    	"004",
        "Deus é Brasileiro",
        "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
        "2003-01-31",
        9
    **)**
    ```
