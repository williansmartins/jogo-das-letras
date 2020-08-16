$(document).ready(function () {
    //Script.colorir();
    Script.apresentarImagens();
    // Script.cursiva();
    // Script.randomize();
    Script.clicks();
    // Script.aplicarFogos();
    $('.fechar').hide();

    window.speechSynthesis.cancel();
});




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
        var letras = $(".letra");
        Script.shuffleAds(letras);

        $(".letra").each(function (chave, valor) {
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



        
        
        $(".letra .tres").click(function (e) {
            e.preventDefault();
            Script.mudarMaiuscula(this);
        });

        $(".letra .quatro").click(function (e) {
            e.preventDefault();
            Script.mudarMinuscula(this);
        });

        $(".letra .cinco").click(function (e) {
            e.preventDefault();
            Script.mudarCursiva(this);
        });

        $(".letra .seis").click(function (e) {
            e.preventDefault();
            Script.mudarForma(this);
        });

        $(".letra img, .letra .caractere").click(function (e) {
            e.preventDefault();
            $(this).parent().find("span.caractere").toggle();
            var imagem = $(this).parent().find("img").toggle();

            var texto = $(this).parent().find(".som-imagem").attr('data-som-imagem');
            Script.falando(texto)
        });
    },

    mudarCursiva: function(atual){
        $(atual).parent().parent().find(".caractere").css('font-family', 'LearningCurve');
    },

    mudarForma: function(atual){
        $(atual).parent().parent().find(".caractere").css('font-family', 'arial');
    },

    mudarMaiuscula: function(atual){
        $(atual).parent().parent().find(".caractere").css('text-transform', 'uppercase');
    },

    mudarMinuscula: function(atual){
        $(atual).parent().parent().find(".caractere").css('text-transform', 'lowercase');
    },

    clicks: function () {
        $(".btn-cursiva, .cursiva").click(function () {
            $(".letra span").css('font-family', 'LearningCurve');
            Script.falando("letra cursiva");
        });
        
        $(".btn-forma, .forma").click(function () {
            $(".letra span").css('font-family', 'arial');
            Script.falando("letra de forma");
        });

        $(".btn-maiuscula, .maiuscula").click(function () {
            $(".letra span").css('text-transform', 'uppercase');
            Script.falando("letra maiúscula");
        });

        $(".btn-minuscula, .minuscula").click(function () {
            $(".letra span").css('text-transform', 'lowercase');
            Script.falando("letra minúscula");
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

        $(".btn-felipe").click(function () {
            Script.falando(`
            Elevo os meus olhos para os montes; de onde me vem o socorro? 

            O meu socorro vem do Senhor, que fez os céus e a terra.
           
            Não deixará vacilar o teu pé; aquele que te guarda não dormirá.
           
            Eis que não dormirá nem dormirá aquele que guarda a Israel.
           
            O Senhor é quem te guarda; o Senhor é a tua sombra à tua mão direita.
           
            De dia o sol não te ferirá, nem a lua de noite.
           
            O Senhor te guardará de todo o mal; ele guardará a tua vida.
           
            O Senhor guardará a tua saída e a tua entrada, desde agora e para sempre.
            `);
        });

        $(".btn-miguel").click(function () {
            Script.falando(`
            O Senhor é o meu pastor; nada me faltará.

            Deitar-me faz em pastos verdejantes; guia-me mansamente a águas tranqüilas.
          
            Refrigera a minha alma; guia-me nas veredas da justiça por amor do seu nome.
          
            Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.
          
            Preparas uma mesa perante mim na presença dos meus inimigos; unges com óleo a minha cabeça, o meu cálice transborda.
          
            Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida, e habitarei na casa do Senhor por longos dias.
            `);
        });
    },

    falando: function (letra) {
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
        // var selectedOption = synth.getVoices();
        for (i = 0; i < voices.length; i++) {
            // if(voices[i].name === selectedOption) {
            //utterThis.voice = voices[i];
            //utterThis.lang = 'pt-BR';
            // window.speechSynthesis.speak(utterThis);
            // }
        }
    }
}