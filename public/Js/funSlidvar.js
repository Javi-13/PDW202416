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
