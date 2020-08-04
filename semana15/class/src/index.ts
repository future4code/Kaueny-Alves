import JSONFileManager from './JSONFileManager'
import Acount from './exercicios'
import moment, {Moment} from "moment";

const fileManager: JSONFileManager = new JSONFileManager("data.json")

// Ler a base de dados
const posts: any = fileManager.readDatabase()

// Receber parâmetros do terminal
const newCpf: string = process.argv[2]
const newName: string = process.argv[3]
const newAge: string = process.argv[3]

// Criar uma instância de Post
const newAcount: Acount = new Acount(
  "37098498882",
    "Kaueny Alves",
    32
)

// Adicionar e salvar o novo post
posts.push(newAcount)
fileManager.writeToDatabase(posts)

