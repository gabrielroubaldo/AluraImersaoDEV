var banca = parseInt((Math.random() * 10) +11)
var jogador = parseInt(Math.random() * 10)
var tentarNovamente = "S"

alert("Bem vindo ao Cassino! Tecle enter para jogar Black Jack!") 

while (tentarNovamente != "n" && jogador < 22) {
  var tentarNovamente = prompt("Você tem " + jogador + " pontos, deseja jogar novamente? (s/n)" )      
    if (tentarNovamente == "s") {
      jogador = jogador + parseInt((Math.random() * 10) + 1)
        if (jogador > 21) {
          alert(jogador + "pontos. Você perdeu!" )
        }
    } else if (tentarNovamente != "s" && tentarNovamente != "n"){
      alert("Resposta inválida, favor responder com s ou n.")
    }
}
  
  if (jogador < 22) {
    if (jogador > banca) alert("Você fez " + jogador + " pontos. A banca fez " + banca + " pontos. Você venceu!" )
    else if (jogador == banca) alert("Você fez " + jogador + " pontos. A banca fez " + banca + " pontos. Houve um empate!" )
    else alert("Você fez " + jogador + " pontos. A banca fez " + banca + " pontos. Você perdeu!" )
  }

