//Variables que obtienen los valores
var objTermometro = document.getElementById("InpTermo");
var objResultadoTermo = document.getElementById("ResulTermo");

//Es la funcion para actualizar el valor en el span del slider
objTermometro.oninput = function() {
    objResultadoTermo.innerHTML = this.value;
    MostrarDatos();
}

function MostrarDatos() {
    var parrafo = document.getElementById("PResultado");
    var valorTermo = parseInt(objResultadoTermo.innerHTML)
    
    // Funcion para obtener la temperatura y modificar el fondo
    if ((objResultadoTermo.innerHTML<=0 )){
        document.body.style.background= "lightblue";
        parrafo.textContent = "La temperatura es de: " + valorTermo + "°C";
    } else if(objResultadoTermo.innerHTML<=20 ) {
        document.body.style.background ="lightgreen";
        parrafo.textContent = "La temperatura es de: " + valorTermo + "°C";
    } else if(objResultadoTermo.innerHTML<=35 ) {
        document.body.style.background ="orange";
        parrafo.textContent = "La temperatura es de: " + valorTermo + "°C";
    }else{
        document.body.style.background = "red"
        parrafo.textContent = "La temperatura es de: " + valorTermo  + "°C";
    }
}
