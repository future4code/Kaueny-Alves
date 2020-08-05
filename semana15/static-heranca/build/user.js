"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
/*Analise a classe `User`. Perceba quais propriedades são públicas e quais são privadas.
Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, email, etc que você quiser)
 e imprima, no terminal, o id, o nome e o email desse usuário.

a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?*

b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*/ 
