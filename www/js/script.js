$(document).ready(function(){
    //Script.colorir();
    Script.apresentarImagem();
    // Script.cursiva();
    // Script.randomize();
    Script.clicks();
    // Script.aplicarFogos();
    $('.fechar').hide();
});



Script = {
    
    aplicarFogos: function(){
        $('.fogos').fireworks({ sound: true, opacity: 0.9, width: '100%', height: '100%' });
        $('.fechar').show();

        $('.fechar').click(function(){
            $('#fireworksField').remove();
            $('.fechar').hide();
        });
    },

    shuffleAds: function(arr){
        for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    },

    randomize: function(){
        // var alfabeto = Script.random('a', 'z');
        // alfabeto.forEach(element => {
        //     console.info("-->" + element);
        // });

        var letras = $(".letra");
        Script.shuffleAds(letras);
        
        // $(".letras").empty();
        
        $(".letra").each(function(chave, valor){
            console.info("-->" + chave);
            console.info("-->" + valor);
            // $(".letras").append(valor);
            $(valor).remove();
        });
        
        $(".letras").append(letras);
        Script.apresentarImagem();
    },

    random: function(c1, c2) {
        a = 'abcdefghijklmnopqrstuvwxyz'.split('');
        return (a.slice(a.indexOf(c1), a.indexOf(c2) + 1)); 
    },

	colorir: function(){
		$(".letra").click(function(){
            $(this).toggleClass('selecionada');
        });
    },

    apresentarImagem: function(){
		$(".letra").click(function(){
            var texto = $(this).find("span").html();
            $(this).find("span").toggle();
            Script.falando(texto)

            var imagem = $(this).find("img");
            $(imagem).toggle();
        });
    },

    clicks: function(){
        $(".btn-cursiva").click(function(){
            $(".letra span").css('font-family', 'cursive');
        });

        $(".btn-maiuscula").click(function(){
            $(".letra span").css('text-transform', 'uppercase');
        });

        $(".btn-minuscula").click(function(){
            $(".letra span").css('text-transform', 'lowercase');
        });

        $(".btn-forma").click(function(){
            $(".letra span").css('font-family', 'arial');
            Script.falando('Oi vó Rosangela, aqui é o Miguel, eu te amo, amo o coração dela, quero brincar com ela, brincar de piscina');
        });

        $(".btn-randomize").click(function(){
            Script.randomize();
            Script.falando('misturando tudo');
        });
    },

    falando: function(letra){
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
        for(i = 0; i < voices.length ; i++) {
            // if(voices[i].name === selectedOption) {
                console.info("-->" + voices[i]);
                utterThis.voice = voices[i];
                utterThis.lang = 'pt-BR';
                // window.speechSynthesis.speak(utterThis);
            // }
        }
    }
}