"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = __importDefault(require("./JSONFileManager"));
const exercicios_1 = __importDefault(require("./exercicios"));
const fileManager = new JSONFileManager_1.default("data.json");
// Ler a base de dados
const posts = fileManager.readDatabase();
// Receber parâmetros do terminal
const newCpf = process.argv[2];
const newName = process.argv[3];
const newAge = process.argv[3];
// Criar uma instância de Post
const newAcount = new exercicios_1.default("37098498882", "Kaueny Alves", 32);
// Adicionar e salvar o novo post
posts.push(newAcount);
fileManager.writeToDatabase(posts);
