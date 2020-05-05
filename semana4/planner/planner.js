function adicionarItem() {
    const input = document.querySelector("input")
    const novoItem = input.value

    const diaDaSemana = document.querySelector("#diaDaSemana").value
     

    console.log(diaDaSemanas)

    if(novoItem === ""){
        alert("Insira um item!!!")
    } else {
 
        const listaDeCompras = document.querySelector("#terca")
        const listaDeComprasUl = document.querySelector("ul")
        listaDeCompras.innerHTML += "<li>" + novoItem + "</li>"
        input.value = ""
    
    
    
    }
}