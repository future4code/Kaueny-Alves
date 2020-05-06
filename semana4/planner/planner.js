function adicionarItem() {
    let input = document.querySelector("input")
    let novoItem = input.value


    const diaSelecionado = document.getElementById("diaDaSemana").selectedIndex
    console.log(diaSelecionado);

    if (novoItem === "") {
        alert("Insira um item!!!")
    } else {

        let listaDeTarefas = ""
        

        switch (diaSelecionado) {

            case 0:

                listaDeTarefas = document.getElementById("segunda")
                listaDeTarefas.innerHTML += "<li>" + novoItem + "</li>"
                input.value = ""
                break

            case 1:

                listaDeTarefas = document.getElementById("terca")
                listaDeTarefas.innerHTML += "<li>" + novoItem + "</li>"
                input.value = ""
                break

            case 2:

                listaDeTarefas = document.getElementById("quarta")
                listaDeTarefas.innerHTML += "<li>" + novoItem + "</li>"
                input.value = ""
                break

            case 3:

                listaDeTarefas = document.getElementById("quinta")
                listaDeTarefas.innerHTML += "<li>" + novoItem + "</li>"
                input.value = ""
                break

            case 4:

                listaDeTarefas = document.getElementById("sexta")
                listaDeTarefas.innerHTML += "<li>" + novoItem + "</li>"
                input.value = ""
                break

            case 5:

                listaDeTarefas = document.getElementById("sabado")
                listaDeTarefas.innerHTML += "<li>" + novoItem + "</li>"
                input.value = ""
                break

            case 6:

                listaDeTarefas = document.getElementById("domingo")
                listaDeTarefas.innerHTML += "<li>" + novoItem + "</li>"
                input.value = ""
                break

        }

    }
}
