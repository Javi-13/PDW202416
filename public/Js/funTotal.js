// FUNCION DEL FORMULARIO 1
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





// FUNCION DEL FORMULARIO 2

//Variables que obtienen los valores
var objSlider = document.getElementById("InpSlider");
var objResultadoSlider = document.getElementById("ResulInp");

//Es la funcion para actualizar el valor en el span del slider
objSlider.oninput = function() {
    objResultadoSlider.innerHTML = this.value;
}

function MostrarDatos() {
    var parrafo = document.getElementById("PResultado");
    var valorSlider = parseInt(objResultadoSlider.innerHTML)
    
    // Funcion para obtener el numero del slidervar y asignar color
    if ((objResultadoSlider.innerHTML>50 )){
        parrafo.style.color= "blue";
        parrafo.textContent = "Tu numero es: " + valorSlider ;
    } else if(objResultadoSlider.innerHTML<50 ) {
        parrafo.style.color ="red";
        parrafo.textContent = "Tu numero es: " + valorSlider ;
    }else{
        parrafo.style.color = "green"
        parrafo.textContent = "El numero neutro es: 50"
    }
}




// FUNCION DEL FORMULARIO 3

//Variables que obtienen los valores
var objTermometro = document.getElementById("InpTermo");
var objResultadoTermo = document.getElementById("ResulTermo");

//Es la funcion para actualizar el valor en el span del slider
objTermometro.oninput = function() {
    objResultadoTermo.innerHTML = this.value;
    MostrarCambioTermo();
}

function MostrarCambioTermo() {
    var parrafoTermometro = document.getElementById("PResultadoTermo");
    var valorTermo = parseInt(objResultadoTermo.innerHTML)
    
    // Funcion para obtener la temperatura y modificar el fondo
    if ((objResultadoTermo.innerHTML<=0 )){
        document.getElementById("Contermometro").style.background= "lightblue";
        parrafoTermometro.textContent = "La temperatura es de: " + valorTermo + "°C";
    } else if(objResultadoTermo.innerHTML<=20 ) {
        document.getElementById("Contermometro").style.background="lightgreen";
        parrafoTermometro.textContent = "La temperatura es de: " + valorTermo + "°C";
    } else if(objResultadoTermo.innerHTML<=35 ) {
        document.getElementById("Contermometro").style.background ="orange";
        parrafoTermometro.textContent = "La temperatura es de: " + valorTermo + "°C";
    }else{
        document.getElementById("Contermometro").style.background = "red"
        parrafoTermometro.textContent = "La temperatura es de: " + valorTermo  + "°C";
    }
}
