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
const nomeArquivo = process.argv[2];
const novaTarefa = process.argv[3];
const bufferArquivo = fs.readFileSync(nomeArquivo);
const textoArquivo = String(bufferArquivo);
const tarefas = textoArquivo ? JSON.parse(textoArquivo) : [];
function salvarTarefa(nomeArquivo, novaTarefa) {
    try {
        tarefas.push(novaTarefa);
        const dadosAtualizados = JSON.stringify(tarefas, null, 2);
        fs.writeFileSync(nomeArquivo, dadosAtualizados);
        console.log("Tarefa salva!");
    }
    catch (error) {
        console.log(error.message || error);
    }
}
if (!nomeArquivo || !novaTarefa) {
    console.log("\x1b[31m", "ERRO: Informe o nome do arquivo e a tarefa a ser salva.");
}
else {
    salvarTarefa(nomeArquivo, novaTarefa);
}
//# sourceMappingURL=index.js.map