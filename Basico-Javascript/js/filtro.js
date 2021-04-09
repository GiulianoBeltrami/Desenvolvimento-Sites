var campoPesquisa = document.querySelector("#filtrar-tabela");

campoPesquisa.addEventListener("input",function(){

    var pacientes = document.querySelectorAll(".paciente");

    for (var i = 0; i<pacientes.length; i++){
        //Pega o objeto paciente
        var paciente = pacientes[i];
        //Pega a classe info nome dentro do objeto paciente
        var pacienteTd = paciente.querySelector(".info-nome");
        //Pega o nome do paciente
        var nome = pacienteTd.textContent;
        
        var expressao = new RegExp(this.value,"i");

        if(expressao.test(nome)){
            paciente.classList.remove("invisivel");
        }
        else{
            paciente.classList.add("invisivel");
        }
    }
});