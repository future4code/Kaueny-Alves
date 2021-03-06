/*1. Criem um tipo para representar uma conta para o usuário
2. Criem mais um tipo: para representar as transações que serão salvas no extrato
3. Criem uma função (`createAccount`) que será responsável por cadastrar um usuário
 em um arquivo `JSON`. Neste momento, não se preocupe, com as validações descritas nas funcionalidades.
4. Criem uma função (`getAllAccounts`) que será responsável por pegar todos os usuários existentes no arquivo `JSON`.
5. Adicione, uma validação na função do item 1 (`createAccount`): o usuário deve possuir
 mais do que 18 anos para conseguir se cadastrar. Caso não possua, exibam uma mensagem de erro.o*/

import * as moment from "moment"

moment.locale("pt-br")


type Usuario = {
    nome: string,
    cpf: number,
    dataNasc: number,
    saldo: number,
    extrato: any[]

}

const conta: Usuario = {
    nome: "Kaka",
    cpf: 11111111111,
    dataNasc: 3 / 5 / 88,
    saldo: 0,
    extrato: [],

}

type Extrato = {
    descrição: string,
    valor: number,
    data: number
}

const extrato: Extrato = {
    descrição: "escola",
    valor: 100,
    data: 1 / 8 / 2020,
}

