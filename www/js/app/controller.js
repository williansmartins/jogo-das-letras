angular.module('principal')
.controller('Controller', ['$scope',  '$http', 
	function ($scope, $http) {

    $scope.letras = {
      "itens": [
          {
              "letra": "a",
              "imagem": "abelha",
              "imagemUrl": "abelha.jpeg"
          },
          {
              "letra": "b",
              "imagem": "bola",
              "imagemUrl": "bola.jpeg"
          },
          {
              "letra": "c",
              "imagem": "cachorro",
              "imagemUrl": "cachorro.jpeg"
          },
          {
              "letra": "d",
              "imagem": "dado",
              "imagemUrl": "dado.jpeg"
          },
          {
              "letra": "e",
              "imagem": "elefante",
              "imagemUrl": "elefante.jpeg"
          },
          {
              "letra": "f",
              "imagem": "faca",
              "imagemUrl": "faca.jpeg"
          },
          {
              "letra": "g",
              "imagem": "gato",
              "imagemUrl": "gato.png"
          },
          {
              "letra": "h",
              "imagem": "helicóptero",
              "imagemUrl": "helicoptero.png"
          },
          {
              "letra": "i",
              "imagem": "indio",
              "imagemUrl": "indio.jpeg"
          },
          {
              "letra": "j",
              "imagem": "jacaré",
              "imagemUrl": "jacare.jpeg"
          },
          {
              "letra": "k",
              "imagem": "kiwi",
              "imagemUrl": "kiwi.jpeg"
          },
          {
              "letra": "l",
              "imagem": "laranja",
              "imagemUrl": "laranja.jpeg"
          },
          {
              "letra": "m",
              "imagem": "maçã",
              "imagemUrl": "maca.jpeg"
          },
          {
              "letra": "n",
              "imagem": "navio",
              "imagemUrl": "navio.jpeg"
          },
          {
              "letra": "o",
              "imagem": "ovo",
              "imagemUrl": "ovo.jpeg"
          },
          {
              "letra": "p",
              "imagem": "pato",
              "imagemUrl": "pato.png"
          },
          {
              "letra": "q",
              "imagem": "queijo",
              "imagemUrl": "queijo.jpeg"
          },
          {
              "letra": "r",
              "imagem": "rato",
              "imagemUrl": "rato.jpeg"
          },
          {
              "letra": "s",
              "imagem": "sapo",
              "imagemUrl": "sapo.jpeg"
          },
          {
              "letra": "t",
              "imagem": "tigre",
              "imagemUrl": "tigre.jpeg"
          },
          {
              "letra": "u",
              "imagem": "uva",
              "imagemUrl": "uva.jpeg"
          },
          {
              "letra": "v",
              "imagem": "violão",
              "imagemUrl": "violao.jpeg"
          },
          {
              "letra": "w",
              "imagem": "willians",
              "imagemUrl": "willians.jpeg"
          },
          {
              "letra": "x",
              "imagem": "xadrez",
              "imagemUrl": "xadrez.jpeg"
          },
          {
              "letra": "y",
              "imagem": "yasmin",
              "imagemUrl": "yasmin.jpeg"
          },
          {
              "letra": "z",
              "imagem": "zebra",
              "imagemUrl": "zebra.jpeg"
          }
      ]
    };

    $scope.mostrarLetra = true;

    $scope.apresentarImagens = function(){

    }

    $scope.virarCardLetra = function(letra){
      Script.falando(letra.letra);
      $scope.mostrarLetra = !$scope.mostrarLetra;
    }

    $scope.virarCardImagem = function(letra){
      Script.falando(letra.imagem);

      letra.mostrarLetra = !letra.mostrarLetra;
    }

    init = function() {
        $scope.apresentarImagens();
    };

	init();
}]);