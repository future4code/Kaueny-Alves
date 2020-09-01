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

async function createTableTodoListTask(): Promise<void> {
  try {
    await connection.raw(` CREATE TABLE TodoListTask (
        id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id varchar(255) NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
    ); `);
    console.log("Sucesso");
  } catch (error) {
    console.log(error);
  }
}

// createTableTodoListTask();

async function createNewTask(
  id: string,
  title: string,
  description: string,
  status: string,
  limit_date: string,
  creator_user_id: string
): Promise<void> {
  try {
    await connection.raw(`
    INSERT INTO TodoListTask VALUES (
        "${id}",
        "${title}",
    "${description}",
    "${status}",
    "${limit_date}",
    "${creator_user_id}" );
    `);
    console.log("Sucesso");
  } catch (error) {
    console.log(error);
  }
}

createNewTask(
  "003",
  "Rever as aulas ",
  "Devemos rever as aulas de backend para entender melhor",
  "a fazer",
  "2020/08/20",
  ""
);
