// This is a JavaScript file




$(document).on("click","#calcular",function(){

 var nome;
  var idade;
  var peso;
  var altura;
  var sexofeminino;
  var sexomasculino;
  var nivel;
  var resultado;

   nome = $("#nome").val();
   idade = $("#idade").val();
   peso = $("#peso").val();
   altura = $("#altura").val();
   sexofeminino = $("input[id = 'mulher']:checked").val();
   sexomasculino = $("input[id = 'homem']:checked").val();
   nivel = $("#nivelAtividade").val();

    

  if(sexomasculino == 'masculino'){

    resultado = nivel *(66 + ((13,7 * peso) + (5 * altura) - (6.8 * idade)));
        $("#resultado").val(resultado);

  }
  else if(sexofeminino == 'feminino'){

    resultado = nivel *(655 + ((13,7 * peso) + (1.8 * altura) - (4.7 * idade)));
    
    $("#resultado").val(resultado);

  }




})
