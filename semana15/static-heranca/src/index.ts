import {User} from "./user"

type person = {
  name: string
}

function createPerson(name: string): person {
	return {name: name} 
} 

const myPerson2 = createPerson("Robson");

console.log(myPerson2);

const userKa = new User("1", "ka@ka", "Ka","ka1") 
console.log(userKa) 