$(document).ready(function(){
    //Script.colorir();
    Script.metodo();
});


Script = {

	colorir: function(){
		$(".letra").click(function(){
            $(this).toggleClass('selecionada');
        });
    },

    metodo: function(){
		$(".letra").click(function(){
            $(this).find("span").hide();
            var imagem = $(this).find("img");
            $(imagem).show();
        });
    }
}