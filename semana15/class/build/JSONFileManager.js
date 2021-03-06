"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    readDatabase() {
        try {
            const fileData = fs.readFileSync(this.fileName).toString();
            return JSON.parse(fileData);
        }
        catch (error) {
            console.log(`Aviso: falha ao ler a base de dados (${error.message})`);
            return [];
        }
    }
    writeToDatabase(data) {
        try {
            const dataAsString = JSON.stringify(data, null, 2);
            fs.writeFileSync(this.fileName, dataAsString);
            console.log("Base de dados atualizada");
        }
        catch (error) {
            console.log("Erro ao salvar os dados: " + error.message);
        }
    }
}
exports.default = JSONFileManager;
