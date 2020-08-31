angular.module('principal')
.controller('ImagemSomController', ['$scope',  '$http', '$timeout',
	function ($scope, $http, $timeout) {

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

    var numeros = [];
    $scope.letra = "";
    $scope.resultado = "";
    $scope.pontos = 0;
    $scope.maximo = 5;
    $scope.terminou = false;
    
    var sortear = function(){

        if(!$scope.terminou){
            numeros = [];
            
            while (numeros.length < 4) {
                var aleatorio = Math.floor(Math.random() * $scope.letras.itens.length);
                
                if (numeros.indexOf(aleatorio) == -1){
                    numeros.push(aleatorio);
                }
            }
    
            $scope.opcao1 = $scope.letras.itens[numeros[0]];
            $scope.opcao2 = $scope.letras.itens[numeros[1]];
            $scope.opcao3 = $scope.letras.itens[numeros[2]];
            $scope.opcao4 = $scope.letras.itens[numeros[3]];
        
            // $scope.letra = $scope.letras.itens[numeros[Math.floor(Math.random() * 3)]].letra;
            $scope.sorteado = $scope.letras.itens[numeros[Math.floor(Math.random() * 3)]];
    
            $scope.resultado = "";
        }
    }
    
    $scope.falando = function(letra){
        letra = letra.toLowerCase();
        window.speechSynthesis.cancel();
        var voices = window.speechSynthesis.getVoices();
        var msg = new SpeechSynthesisUtterance(letra);
        msg.lang = "pt-BR";
        //msg.voice = voices[0];
        // msg.voiceURI = "native";
        // msg.volume = 1;
        // msg.rate = 1;
        // msg.pitch = 1.1;
        window.speechSynthesis.speak(msg);

        var utterThis = new SpeechSynthesisUtterance(letra);
    }

    $scope.validar = function(opcao){
        if(opcao.letra == $scope.letra){

            var promise1 = $timeout(500);
            promise1.then(function() {
                $scope.falando(opcao.imagem);
            });
            
            var promise2 = $timeout(2000);
            promise2.then(function() {
                $scope.falando("acertou!!!"); 
                $scope.resultado = "ACERTOU!";
                $scope.pontos++;
            });

            var promise3 = $timeout(4000);
            promise3.then(function() {
                $scope.falarPontos();
            });

            var promise4 = $timeout(7000);
            promise4.then(function() {
                sortear();
            });
            
        }else{
            // $timeout($scope.falando("errou!!!"), 500);
            // $timeout($scope.falando(opcao.imagem), 2000);

            var promise1 = $timeout(500);
            var promise2 = $timeout(2000);
            var promise3 = $timeout(6000);
  
            promise1.then(function() {
                $scope.falando("errou!!!");
                $scope.resultado = "ERROU!";
                $scope.pontos--;
            });

            promise2.then(function() {
                $scope.falarPontos();
            });

            promise3.then(function() {
                $scope.falando(opcao.imagem);
            });
        }
    }

    $scope.falarPontos = function(){
        if($scope.pontos == 1){
            $scope.falando("Você ganhou 1 ponto.");
        }else{
            $scope.falando("Você tem agora " + $scope.pontos + " pontos");
        }

        var promise1 = $timeout(3000);
  
        promise1.then(function() {
            if($scope.pontos >= 5){
                $scope.falando("Parabéns, você ganhou o jogo!");
                $scope.terminou = true;
            }
    
            if($scope.pontos < 0){
                $scope.falando("Qué Qué Qué Qué Qué , você perdeu o jogo!");
                $scope.terminou = true;
            }
        });

    }

    $scope.escolher = function(opcao){
        if(opcao.letra == $scope.sorteado.letra){
            fluxoAcertou();
        }else{
            fluxoErrou();
        }

        
    }

    var fluxoAcertou = function(){
        var promise2 = $timeout(500);
        promise2.then(function() {
            $scope.falando("acertou!!!"); 
            $scope.resultado = "ACERTOU!";
            $scope.pontos++;
        });

        var promise3 = $timeout(2000);
        promise3.then(function() {
            $scope.falarPontos();
        });

        var promise4 = $timeout(4000);
        promise4.then(function() {
            sortear();
        });
    }

    var fluxoErrou = function(){
        var promise1 = $timeout(500);
        var promise2 = $timeout(2000);
        var promise3 = $timeout(6000);

        promise1.then(function() {
            $scope.falando("errou!!!");
            $scope.resultado = "ERROU!";
            $scope.pontos--;
        });

        promise2.then(function() {
            $scope.falarPontos();
        });

        promise3.then(function() {
            $scope.falando(opcao.imagem);
        });
    }

    init = function() {
        // var promise = $timeout(500);
        // promise.then(function() {
        //     $scope.falando("Clique no som e descubra qual imagem começa com a letra");
        // });
        
        sortear();
    };

	init();
}]);