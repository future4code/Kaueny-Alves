"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
function createPerson(name) {
    return { name: name };
}
const myPerson2 = createPerson("Robson");
console.log(myPerson2);
const userKa = new user_1.User("1", "ka@ka", "Ka", "ka1");
console.log(userKa);
