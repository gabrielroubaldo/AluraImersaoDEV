var carta1 = {
  nome:"Pikachu",
  foto:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  atributos:{
    ataque:80,
    defesa:60,
    magia:90
  }
}

var carta2 = {
  nome:"Bulbassaur",
  foto:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  atributos:{
  ataque:70,
  defesa:65,
  magia:85
  }
}

var carta3 = {
  nome:"Squirtle",
  foto:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  atributos:{
    ataque:88,
    defesa:62,
    magia:90
  }
}

var carta4 = {
  nome:"Charmander",
  foto:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  atributos:{
    ataque:88,
    defesa:62,
    magia:90
  }
}



var cartaMaquina
var cartaJogador
var fotoCartaJogador
var cartas = [carta1, carta2, carta3, carta4]
              //0         //1        //2
function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]
  //console.log(cartaMaquina)
  
  var numeroCartaJogador = parseInt(Math.random() * 3)  
  
  while (numeroCartaJogador == numeroCartaMaquina){
    numeroCartaJogador = parseInt(Math.random() * 3)
    
  }
  cartaJogador = cartas[numeroCartaJogador]
  fotoCartaJogador = cartas[numeroCartaJogador].foto
  console.log(cartaJogador) 
    
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""  
  opcoesTexto += "<table border=1 align=center> <tr><td><img class=poke src='" + fotoCartaJogador + "'></td></tr>"
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<tr><td><input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "</tr></td>"    
  }  
  opcoesTexto += "</table>"
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')  
  for (var i = 0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    alert("Você venceu!!")
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    alert("Você perdeu!!")
  } else {
    alert("Você empatou!!")
  }
  console.log(cartaMaquina)
}

//colocar imagem
//possibilidades
