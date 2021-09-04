//aumentardeck OK!!
//criarsupertrunfo OK!!
//audio

var superGurgel = {
    nome: "Super Gurgel",
    imagem: "https://www.sabo.com.br/wp-content/uploads/2019/12/gurgel.png",
    audio:"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/audio/BsTwCwBHBjzwub4i4/car-horn_M1zna3Eu_WM.mp3",
    atributos: {
        velocidade: 99,
        economia: 99,
        buzina: 99
    }
}

var fusca = {
    nome: "Fusca",
    imagem: "https://revistacarro.com.br/wp-content/uploads/2020/01/VW-Fusca.jpg",
    audio:"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/audio/BsTwCwBHBjzwub4i4/car-horn-3_Gy26a2Nd_WM.mp3",
    atributos: {
        velocidade: 70,
        economia: 80,
        buzina: 65
    }
}

var brasilia = {
    nome: "Brasilia",
    imagem: "https://combustivel.app/imgs/t650/consumo-brasilia-1-6-1.jpg",
    audio:"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/audio/BsTwCwBHBjzwub4i4/double-car-horn_fycfyfNO_WM.mp3",
    atributos: {
        velocidade: 90,
        economia: 55,
        buzina: 70
    }
}

var marajo = {
    nome: "Marajo",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Opel_Kadett_C_Kombi_Lahti.JPG/250px-Opel_Kadett_C_Kombi_Lahti.JPG",
    audio:"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/audio/BsTwCwBHBjzwub4i4/car-horn-4_M1Ho63V__WM.mp3",
    atributos: {
        velocidade: 85,
        economia: 70,
        buzina: 55
    }
}

var garelli = {
    nome: "garelli",
    imagem: "http://bakada.com.br/arquivos_loja/36816/Fotos/thumbs3/produto_Foto1_8252613.jpg",
    audio:"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/audio/BsTwCwBHBjzwub4i4/bike-bell-ring_zynk0YNd_WM.mp3",
    atributos: {
        velocidade: 50,
        economia: 90,
        buzina: 65
    }
}

var mangaLarga = {
    nome: "Manga Larga",
    audio: "https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/BsTwCwBHBjzwub4i4/horse-whinnying_MJ9bMpVu_NWM.mp3",
    imagem: "https://pbs.twimg.com/profile_images/655437571405803520/D80NbCtF.png",
    atributos: {
        velocidade: 70,
        economia: 95,
        buzina: 40
    }
}

var cartaMaquina
var cartaJogador
var cartas = [superGurgel, fusca, brasilia, marajo, garelli, mangaLarga]


function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length)
    }
    cartaJogador = cartas[numeroCartaJogador]
    
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
  
    exibeCartaJogador()
   
}

    function exibeCartaJogador() {
      var divCartaJogador = document.getElementById("carta-jogador")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
      var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
      var opcoesTexto = ""
      for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
      }
             
      var html = "<div id='opcoes' class='carta-status'>"
      
      divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
    }


function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.nome == "Super Gurgel") {
        htmlResultado = '<p class="resultado-final">Você conseguiu o super Gurgel, vitória Garantida!</p> '
        var audio = new Audio(cartaJogador.audio);
        audio.play();
        divResultado.innerHTML = htmlResultado
    } else if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
      var audio = new Audio(cartaJogador.audio);
        audio.play();
        divResultado.innerHTML = htmlResultado
        exibeCartaMaquina()
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      var audio = new Audio('https://dm0qx8t0i9gc9.cloudfront.net/watermarks/audio/BsTwCwBHBjzwub4i4/man-laughing_fJO7Xp4u_WM.mp3');
        audio.play();
        divResultado.innerHTML = htmlResultado
        exibeCartaMaquina()
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'     
        divResultado.innerHTML = htmlResultado
        exibeCartaMaquina()
    }  
}
  function exibeCartaMaquina() {
      var divCartaMaquina = document.getElementById("carta-maquina")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
      var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
      var opcoesTexto = ""
      for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
      }
             
      var html = "<div id='opcoes' class='carta-status'>"
      
      divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>' 
  }
