var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){

    
    event.preventDefault(); //Evita que a pagina recarregue

    var form = document.querySelector("#form-adiciona");

    var paciente = getFormValues(form);
    console.log(paciente);

    var erros = validaPaciente(paciente);
    if (erros.length > 0){
        exibeMenssagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var menssagensDeErro = document.querySelector("#mensagens-erro");
    menssagensDeErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = criaPacienteTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function getFormValues (formARG){
    var paciente = {
        nome: formARG.nome.value,
        peso: formARG.peso.value,
        altura: formARG.altura.value,
        gordura: formARG.gordura.value,
        imc: calculaIMC(formARG.peso.value,formARG.altura.value)
    };

    return paciente;
}

function criaPacienteTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd (paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd (paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd (paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd (paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd (paciente.imc,"info-imc"));

    return pacienteTr
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente (paciente){
    
    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco.");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco.");
    }
    
    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco.");
    }
    
    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco.");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura inválida.");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso inválido.");
    }

    return erros;
}

function exibeMenssagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}