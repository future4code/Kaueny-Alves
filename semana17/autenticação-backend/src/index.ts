import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "./services/uuid";

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

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

async function createUser(
  id: string,
  email: string,
  password: string
): Promise<void> {
  try {
    await connection.raw(`
  INSERT INTO User VALUES (
    " ${id}",
  "${email}",
  "${password}" );
  `);
    console.log("Sucesso");
  } catch (error) {
    console.log(error);
  }
}

//createUser("abc", "ka@ka.com", "123456");
createUser("def", "rafa@rafa.com", "654321");
