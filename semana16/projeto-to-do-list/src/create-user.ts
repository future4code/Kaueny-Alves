import knex from "knex";
import dotenv from "dotenv";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

async function createTableTodoList(): Promise<void> {
  try {
    await connection.raw(` CREATE TABLE TodoListUser (
		id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
); `);
    console.log("Sucesso");
  } catch (error) {
    console.log(error);
  }
}

//createTableTodoList();

async function createNewUser(
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<void> {
  try {
    await connection.raw(`
    INSERT INTO TodoListUser VALUES (
        "${id}",
        "${name}",
    "${nickname}",
    "${email}" );
    `);
    console.log("Sucesso");
  } catch (error) {
    console.log(error);
  }
}

createNewUser("2", "Rafael", "rafa", "rafa@ra.com");
