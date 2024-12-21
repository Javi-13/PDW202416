let numeroaleatorio = Math.floor(Math.random() * 100) + 1;

function funAdivinar() {
    var objetoDiv = document.getElementById("DivResultado");
    var lecturanumero = parseInt(document.getElementById("InpNumero").value); 

    if (isNaN(lecturanumero)) {
        objetoDiv.textContent = "Ingrese valores numéricos";
    } else if (lecturanumero > numeroaleatorio) {
        objetoDiv.textContent = "El número es muy alto";
        document.getElementById("InpNumero").value = "";
    } else if (lecturanumero < numeroaleatorio) {
        objetoDiv.textContent = "El número es muy bajo";
        document.getElementById("InpNumero").value = "";
    } else {
        objetoDiv.textContent = "¡Felicidades! Adivinaste el numero";
    }
}

function funReiniciar() {
    numeroaleatorio = Math.floor(Math.random() * 100) + 1;
    document.getElementById("InpNumero").value = "";
    document.getElementById("DivResultado").textContent = "";
}
