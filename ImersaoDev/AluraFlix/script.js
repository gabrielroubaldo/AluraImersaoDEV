function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  trataFilme(filmeFavorito)
  campoFilmeFavorito.value = ""
}

  function trataFilme(link){
    if (link.startsWith('https://www.youtube.com')){      
      link = link.replace("watch?v=", "embed/");      
      alert("Seu link foi convertido para o modo embutido: " + link)
      listarFilmesNaTela(link)
      
    }
    else {
      alert("Este link não pertence ao youtube")      
    }
    
  }


function listarFilmesNaTela (filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<iframe src=" + filme + "/iframe>"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme 
}
