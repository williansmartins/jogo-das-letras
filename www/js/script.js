$(document).ready(function () {
    //Script.colorir();
    Script.apresentarImagens();
    // Script.cursiva();
    // Script.randomize();
    Script.clicks();
    // Script.aplicarFogos();
    $('.fechar').hide();
});

var letrasJson = {
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


Script = {

    aplicarFogos: function () {
        $('.fogos').fireworks({ sound: true, opacity: 0.9, width: '100%', height: '100%' });
        $('.fechar').show();

        $('.fechar').click(function () {
            $('#fireworksField').remove();
            $('.fechar').hide();
        });
    },

    shuffleAds: function (arr) {
        for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    },

    randomize: function () {
        // var alfabeto = Script.random('a', 'z');
        // alfabeto.forEach(element => {
        //     console.info("-->" + element);
        // });

        var letras = $(".letra");
        Script.shuffleAds(letras);

        // $(".letras").empty();

        $(".letra").each(function (chave, valor) {
            console.info("-->" + chave);
            console.info("-->" + valor);
            // $(".letras").append(valor);
            $(valor).remove();
        });

        $(".letras").append(letras);
        Script.apresentarImagens();
    },

    random: function (c1, c2) {
        a = 'abcdefghijklmnopqrstuvwxyz'.split('');
        return (a.slice(a.indexOf(c1), a.indexOf(c2) + 1));
    },

    colorir: function () {
        $(".letra").click(function () {
            $(this).toggleClass('selecionada');
        });
    },

    apresentarImagens: function () {

        for (letra in letrasJson.itens) {
            var letra = letrasJson.itens[letra];

            $(".letras").append(`
            <div class='letra'>
                <span class='caractere'>`+ letra.letra + `</span>
                <a href="#" class='som-letra' data-som-letra='` + letra.letra + `'></a>
                <a href="#" class='som-imagem' data-som-imagem='` + letra.imagem + `'></a>
                <a href="#" class='imagem'></a>
                <img src='img/alfabeto/`+ letra.imagemUrl + `' alt="` + letra.imagem + `">
            </div>`);
        };

        $(".letra .som-letra").click(function (e) {
            e.preventDefault();
            var texto = $(this).attr('data-som-letra');
            Script.falando(texto)
        });

        $(".letra .som-imagem").click(function (e) {
            e.preventDefault();
            var texto = $(this).attr('data-som-imagem');
            Script.falando(texto)
        });
        
        $(".letra .imagem").click(function (e) {
            e.preventDefault();
            $(this).parent().find("span.caractere").toggle();
            var imagem = $(this).parent().find("img");
            $(imagem).toggle();
        });
    },

    clicks: function () {
        $(".btn-cursiva").click(function () {
            $(".letra span").css('font-family', 'cursive');
        });
        
        $(".btn-forma").click(function () {
            $(".letra span").css('font-family', 'arial');
        });

        $(".btn-maiuscula").click(function () {
            $(".letra span").css('text-transform', 'uppercase');
        });

        $(".btn-minuscula").click(function () {
            $(".letra span").css('text-transform', 'lowercase');
        });

        $(".btn-randomize").click(function () {
            Script.randomize();
            Script.falando('misturando tudo');
        });

        $(".btn-rosangela").click(function () {
            Script.falando('Oi vó Rosangela, aqui é o Miguel, eu te amo, amo o coração dela, quero brincar com ela, brincar de piscina');
        });

        $(".btn-nayara").click(function () {
            Script.falando('mamae nayara, eu te amo muito, eu quero que você brinque muito comigo, eu te amo infinito.');
        });
    },

    falando: function (letra) {
        var voices = window.speechSynthesis.getVoices();
        var msg = new SpeechSynthesisUtterance(letra);
        msg.lang = "pt-BR";
        // msg.voice = voices[9];
        // msg.voiceURI = "native";
        // msg.volume = 1;
        // msg.rate = 1;
        // msg.pitch = 1.1;
        window.speechSynthesis.speak(msg);

        var utterThis = new SpeechSynthesisUtterance(letra);
        // var selectedOption = synth.getVoices();
        for (i = 0; i < voices.length; i++) {
            // if(voices[i].name === selectedOption) {
            console.info("-->" + voices[i]);
            utterThis.voice = voices[i];
            utterThis.lang = 'pt-BR';
            // window.speechSynthesis.speak(utterThis);
            // }
        }
    }
}