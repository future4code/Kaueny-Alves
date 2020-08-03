"use strict";
//Analise a classe `UserAccount`. Perceba quais propriedades são públicas e quais são privadas.
Object.defineProperty(exports, "__esModule", { value: true });
//1) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
//O constructor serve para poder setar o valor das propriedades do objeto que foi passado.
//2) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe 
//(dê o nome, cpf, dataDeNascimento ou idade, etc que você quiser). Quantas vezes a mensagem 
//`"Chamando o construtor da classe User"` foi impressa no terminal?*
//3) Como conseguimos ter acesso às propriedades privadas de uma classe?*
//através da função chamando o método getter
//4) Com os métodos fornecidos pela classe, seria possível imprimir alguma das propriedades 
//da classe no terminal? Se sim, realize a impressão.*
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    getBalance() {
        //Aqui deve ser inserida a lógica de pegar saldo do usuário
        this.balance;
    }
    addBalance(value) {
        //Aqui deve ser inserida a lógica de adicionar saldo 
        this.balance = 10;
        console.log('Saldo atualizado com sucesso');
    }
}
exports.default = UserAccount;
const myAcount = new UserAccount("37098498882", "Kaueny Alves", 32);
