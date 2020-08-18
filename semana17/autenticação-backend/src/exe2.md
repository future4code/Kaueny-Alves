Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email e uma senha salva para que consigamos fazer a autenticação dele.
Na hora de salvar essas informações na tabela, é interessante que façamos uma função específica para isso. Abaixo, há um exemplo:

```tsx
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```

_a. Explique o código acima com as suas palavras._

_b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas._

_c. Pela mesma justificativa do exercício anterior, crie uma classe para ser responsável pela comunicação do usuário com a tabela de usuários. Ela deve possuir um método que cria o usuário no banco; além disso, as variáveis necessárias para realizar as queries devem ser atributos dessa classe_

_d. Crie um usuário utilizando somente a classe que você criou_

- Dicas

  b.

  ```sql
  CREATE TABLE User (
  		id VARCHAR(255) PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
  );
  ```

  c. Na pasta: `data/`

  ```tsx
  import knex from "knex";

  export class UserDatabase {
    private connection = knex({
      client: "mysql",
      connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
      },
    });

    private static TABLE_NAME = "User";

    public async createUser(
      id: string,
      email: string,
      password: string
    ): Promise<void> {
      await this.connection
        .insert({
          id,
          email,
          password,
        })
        .into(UserDatabase.TABLE_NAME);
    }
  }
  ```
