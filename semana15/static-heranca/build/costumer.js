"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
class Customer extends user_1.User {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }
    getCreditCard() {
        return this.creditCard;
    }
}
/*a. *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?*

b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*/ 
