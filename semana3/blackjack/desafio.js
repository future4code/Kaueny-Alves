

if (confirm("Quer iniciar uma nova rodada")) {

    let cartaUsuario1 = comprarCarta()
    let cartaUsuario2 = comprarCarta()
    let cartaComputador1 = comprarCarta()
    let cartaComputador2 = comprarCarta()

    if (cartaUsuario1 && cartaUsuario2 || cartaComputador1 && cartaComputador2 === 11) // As = 11
        {
            cartaUsuario1 = comprarCarta()
            cartaComputador1 = comprarCarta()
    }

    let cartasUsuarios = []
    cartasUsuarios.push(cartaUsuario1.texto, cartaUsuario2.texto)
    let valorUsuario = cartaUsuario1.valor + cartaUsuario2.valor

    let cartasComputador = []
    cartasComputador.push(cartaComputador1.texto, cartaComputador2.texto)
    let valorComputador = cartaComputador1.valor + cartaComputador2.valor


    while (confirm(
        "Suas cartas são " + cartasUsuarios + ". A carta revelada do computador é " + cartaComputador1.texto + "." +
        "\n" +  // \n faz pular a linha
        "Deseja comprar mais uma carta?")) {

        let carta = comprarCarta()
        cartasUsuarios.push(carta.texto)
        valorUsuario = valorUsuario + carta.valor

        if (valorUsuario > 21) {
            alert(
                "Suas cartas são " + cartasUsuarios + ". Sua pontuação é " + valorUsuario + "." + "\n" +  // \n faz pular a linha
                "As cartas do computador são: " + cartasComputador + ". A pontuação do computador é: " + valorComputador + "\n" +
                "\n" + "O computador ganhou!"
            )
            break
        }
    }

    carta = comprarCarta()
    cartasComputador.push(carta.texto)
    valorComputador = valorComputador + carta.valor


    if (valorComputador > 21 && valorUsuario <= 21 ){

         alert(
               "Suas cartas são " + cartasUsuarios + ". Sua pontuação é " + valorUsuario + "." + "\n" +  // \n faz pular a linha
               "As cartas do computador são: " + cartasComputador + ". A pontuação do computador é: " + valorComputador + "\n" +
               "\n" + "O usuario ganhou!"
         )


    }else if (valorComputador > valorUsuario && valorComputador <= 21 ) {

        alert(
            "Suas cartas são " + cartasUsuarios + ". Sua pontuação é " + valorUsuario + "." + "\n" +  // \n faz pular a linha
            "As cartas do computador são: " + cartasComputador + ". A pontuação do computador é: " + valorComputador + "\n" +
            "\n" + "O computador ganhou!"
        )

    }else if (valorUsuario > valorComputador && valorUsuario <= 21) {

        alert(
            "Suas cartas são " + cartasUsuarios + ". Sua pontuação é " + valorUsuario + "." + "\n" +  // \n faz pular a linha
            "As cartas do computador são: " + cartasComputador + ". A pontuação do computador é: " + valorComputador + "\n" +
            "\n" + "O usuario ganhou!"
        )

    }else if (valorUsuario === valorComputador) {

        alert(
            "Suas cartas são " + cartasUsuarios + ". Sua pontuação é " + valorUsuario + "." + "\n" +  // \n faz pular a linha
            "As cartas do computador são: " + cartasComputador + ". A pontuação do computador é: " + valorComputador + "\n" +
            "\n" + "Empate"
        )
    }
}
