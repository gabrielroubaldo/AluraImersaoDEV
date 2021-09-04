var pokemon = parseInt (prompt("Escolha o seu Pokemon: 1-Bulbassaur 2-Charmander 3-Pichu"))
var evolucao = parseInt (prompt("Escolha o grau de evolução de seu Pokemon: 1, 2 ou 3"))

switch (pokemon) {
  case 1: 
      if (evolucao == 1) document.write("<h2><img src=https://media.giphy.com/media/I2nZMy0sI0ySA/giphy.gif></h2>")
      else if (evolucao == 2) document.write("<h2><img src=https://media.giphy.com/media/I2nZMy0sI0ySA/giphy.gif></h2>")
      else if (evolucao == 3) document.write("<h2><img src=https://media.giphy.com/media/rQ6QApodZhmuY/giphy.gif></h2>")
      else document.write("<h2>Esta evolução não existe.</h2>")        
      break;
  case 2:       
      if (evolucao == 1) document.write("<h2><img src=https://media.giphy.com/media/3VQDfP4q4ZYyY/giphy.gif></h2>")
      else if (evolucao == 2) document.write("<h2><img src=https://media.giphy.com/media/u1k1kpDZSw5sA/giphy.gif></h2>")
      else if (evolucao == 3) document.write("<h2><img src=https://media.giphy.com/media/YS5znaiKtMk16yKqqs/giphy.gif></h2>")
      else document.write("<h2>Esta evolução não existe.</h2>")
      break;
  case 3:
      if (evolucao == 1) document.write("<h2><img src=https://media.giphy.com/media/jXOxSiAx5UVnq/giphy.gif></h2>")
      else if (evolucao == 2) document.write("<h2><img src=https://media.giphy.com/media/tK9wGsGc72LcznCSeU/giphy.gif></h2>")
      else if (evolucao == 3) document.write("<h2><img src=https://media.giphy.com/media/LkkL7v64g95YI/giphy.gif></h2>")
      else document.write("<h2>Esta evolução não existe.</h2>")
      break;
  default: document.write("<h2>Ainda não pegamos este Pokemon.</h2>")
}
