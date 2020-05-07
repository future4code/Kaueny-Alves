const blog = {
    titulo:[],
    autor:[],
    texto:[],
}

conteudo = []
let contar = 0

console.log(blog)

function capturarTexto (){

  let recebeTitulo = document.getElementById ("titulo").value  
  blog.titulo = recebeTitulo

  let recebeTexto  = document.getElementById ("texto").value  
  blog.texto = recebeTexto

  let recebeAutor = document.getElementById ("autor").value  
  blog.autor = recebeAutor
 
 conteudo.push(blog)
 console.log (blog)

 enviarPosts()

}

function enviarPosts () {

    let enviarTitulo = conteudo[contar].titulo
    let enviarAutor = conteudo[contar].autor
    let enviarTexto = conteudo[contar].texto

    enviarPostsHtml = document.getElementById ("posts")
    enviarPostsHtml.innerHTML += "<article>" + enviarTitulo + "</article>"

    enviarPostsHtml = document.getElementById ("posts")
    enviarPostsHtml.innerHTML += "<article>" + enviarAutor + "</article>"

    enviarPostsHtml = document.getElementById ("posts")
    enviarPostsHtml.innerHTML += "<article>" + enviarTexto + "</article>"

    contar = contar +1
}




