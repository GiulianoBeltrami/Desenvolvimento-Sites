var botao = document.querySelector("#buscar-pacientes");

botao.addEventListener("click",function(){
    
    //Ajax -> requisição assíncrona
    var xhr = new XMLHttpRequest();

    //Essa api contém um json
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load",function(){

        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status ==200)
        {
            erroAjax.classList.add("invisivel");

            var pacientes = JSON.parse(xhr.responseText);

            console.log(pacientes);
    
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }
        else
        {
            console.log(xhr.status);

            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }     
    });
    
    xhr.send();
});
