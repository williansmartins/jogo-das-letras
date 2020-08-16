angular.module('principal')
.controller('Controller', ['$scope',  '$http', 
	function ($scope, $http) {

    $scope.letras = {
      "itens": [
          {
              "letra": "A",
              "imagem": "abelha",
              "imagemUrl": "abelha.jpeg"
          },
          {
              "letra": "B",
              "imagem": "bola",
              "imagemUrl": "bola.jpeg"
          },
          {
              "letra": "C",
              "imagem": "cachorro",
              "imagemUrl": "cachorro.jpeg"
          },
          {
              "letra": "D",
              "imagem": "dado",
              "imagemUrl": "dado.jpeg"
          },
          {
              "letra": "E",
              "imagem": "elefante",
              "imagemUrl": "elefante.jpeg"
          },
          {
              "letra": "F",
              "imagem": "faca",
              "imagemUrl": "faca.jpeg"
          },
          {
              "letra": "G",
              "imagem": "gato",
              "imagemUrl": "gato.png"
          },
          {
              "letra": "H",
              "imagem": "helicóptero",
              "imagemUrl": "helicoptero.png"
          },
          {
              "letra": "I",
              "imagem": "indio",
              "imagemUrl": "indio.jpeg"
          },
          {
              "letra": "J",
              "imagem": "jacaré",
              "imagemUrl": "jacare.jpeg"
          },
          {
              "letra": "K",
              "imagem": "kiwi",
              "imagemUrl": "kiwi.jpeg"
          },
          {
              "letra": "L",
              "imagem": "laranja",
              "imagemUrl": "laranja.jpeg"
          },
          {
              "letra": "M",
              "imagem": "maçã",
              "imagemUrl": "maca.jpeg"
          },
          {
              "letra": "N",
              "imagem": "navio",
              "imagemUrl": "navio.jpeg"
          },
          {
              "letra": "O",
              "imagem": "ovo",
              "imagemUrl": "ovo.jpeg"
          },
          {
              "letra": "P",
              "imagem": "pato",
              "imagemUrl": "pato.png"
          },
          {
              "letra": "Q",
              "imagem": "queijo",
              "imagemUrl": "queijo.jpeg"
          },
          {
              "letra": "R",
              "imagem": "rato",
              "imagemUrl": "rato.jpeg"
          },
          {
              "letra": "S",
              "imagem": "sapo",
              "imagemUrl": "sapo.jpeg"
          },
          {
              "letra": "T",
              "imagem": "tigre",
              "imagemUrl": "tigre.jpeg"
          },
          {
              "letra": "U",
              "imagem": "uva",
              "imagemUrl": "uva.jpeg"
          },
          {
              "letra": "V",
              "imagem": "violão",
              "imagemUrl": "violao.jpeg"
          },
          {
              "letra": "W",
              "imagem": "willians",
              "imagemUrl": "willians.jpeg"
          },
          {
              "letra": "X",
              "imagem": "xadrez",
              "imagemUrl": "xadrez.jpeg"
          },
          {
              "letra": "Y",
              "imagem": "yasmin",
              "imagemUrl": "yasmin.jpeg"
          },
          {
              "letra": "Z",
              "imagem": "zebra",
              "imagemUrl": "zebra.jpeg"
          }
      ]
    };

    $scope.mostrarLetra = true;

    $scope.mudarTodasParaMaiuscula = function(){
        $(".letra span").css('text-transform', 'uppercase');
        Script.falando("letra maiúscula");
    }

    $scope.mudarTodasParaMinuscula = function(){
        $(".letra span").css('text-transform', 'lowercase');
        Script.falando("letra minúscula");
    }

    $scope.mudarTodasParaCursiva = function(){
        $(".letra span").css('font-family', 'LearningCurve');
        Script.falando("letra cursiva");
    }

    $scope.mudarTodasParaForma = function(){
        $(".letra span").css('font-family', 'arial');
        Script.falando("letra de forma");
    }

    $scope.mudarParaMinuscula = function(letra){
        var modificado = letra.letra.toLowerCase();
        letra.letra = modificado;
        letra.maiuscula = !letra.maiuscula;
        Script.falando("letra minúscula");
    }

    $scope.mudarParaMaiuscula = function(letra){
        var modificado = letra.letra.toUpperCase();
        letra.letra = modificado;
        letra.maiuscula = !letra.maiuscula;
        Script.falando("letra maiúscula");
    }

    $scope.mudarParaCursiva = function(letra){
        letra.cursiva = !letra.cursiva;
        
        if(letra.cursiva){
            Script.falando("letra cursiva");
        }else{
            Script.falando("letra de forma");
        }
    }

    $scope.virarCardLetra = function(letra){
      Script.falando(letra.letra);
    }

    $scope.virarCardImagem = function(letra){
      Script.falando(letra.imagem);
      letra.mostrarLetra = !letra.mostrarLetra;
    }

    init = function() {
        window.speechSynthesis.cancel();
    };

	init();
}]);