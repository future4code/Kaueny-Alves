const despesas = {

    valor:"",
    tipo: "",
    descricao:"",

}

let despesasGerais = []

function cadastrarDespesas() {

    let cadastraValor = document.getElementById ("valor").value
    despesas.valor = cadastraValor

    let cadastraTipo = documecument.getElementById ("tipoDespesas").selectedIndex
    despesas.tipo = cadastraTipo

    let cadastraDescricao = document.getElementById ("descricao").value
    despesas.descricao = cadastraDescricao

    if (cadastraValor === "" && cadastraTipo === "" && cadastraDescricao === 0){
        alert ("Informe todos os campos")
    } else {
       despesasGerais.push (despesas)
    }
}








