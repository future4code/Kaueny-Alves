export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    public interoduceYourself(): string {
        return "Olá, bom dia!"
     }

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
}




/*Analise a classe `User`. Perceba quais propriedades são públicas e quais são privadas. 
Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, email, etc que você quiser)
 e imprima, no terminal, o id, o nome e o email desse usuário. 

a. *Seria possível imprimir a senha (`password`) atrelada a essa instância?*

b. *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*/