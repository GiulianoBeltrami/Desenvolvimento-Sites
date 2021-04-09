//Alterando o título
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Calculando o IMC para todos os pacientes

//Retorna umn objeto com todos os elementos html que possuem a classe paciente
var pacientes = document.querySelectorAll(".paciente"); 

//Contador que passa por toda a tabela e valida se o peso e altura é valido
for(var contador =0; contador<pacientes.length; contador++){
    
    var paciente = pacientes[contador]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoEValido = validaPeso(peso);
    var alturaEValido = validaAltura(altura);

    //validação do peso e altura
    if (!pesoEValido){
        console.log("Peso inválido");
        pesoEValido = false;
        tdIMC.textContent = "Peso inválido";

        paciente.classList.add("paciente-invalido");
    };
    
    if (!alturaEValido){
        console.log("Altura inválida");
        alturaEValido = false;
        tdIMC.textContent = "Altura inválida";

        paciente.classList.add("paciente-invalido");
    };

    if (alturaEValido && pesoEValido){
        var imc = calculaIMC(peso,altura);
        tdIMC.textContent = imc;
    };
};

//função que calcula o IMC e retorna ele com 2 casas decimais
function calculaIMC(pesoARG,alturaARG){
    var imc = 0;
    imc = pesoARG/(alturaARG**2);
    return imc.toFixed(2);
}

//função que valida o peso
function validaPeso(peso){
    if (peso>0 && peso<1000){
        return true;
    }
    else {
        return false;
    }
}

//função que valida a altura
function validaAltura(altura){
    if (altura>0 && altura<=3){
        return true;
    }
    else{
        return false;
    }
}