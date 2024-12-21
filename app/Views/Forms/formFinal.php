<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contenedor</title>
    <link rel="stylesheet" href="public/Css/stylestotal.css">
</head>

<body>
    <div class="containerform1">
        <h1>Adivina el numero</h1>
        <input id="InpNumero" type="number" placeholder="Ingresa un numero">
        <button id="BtnAdiv" onclick="funAdivinar()">Adivinar</button>
        <button id="BtnReini" onclick="funReiniciar()">Reiniciar</button>
        <div id="DivResultado"></div>
    </div>
    <div class="containerform2">
        <h1>Slidervar con color</h1>
        <input id="InpSlider" type="range" min="0" max="100" value="50">
        <span id="ResulInp">50</span>
        <button id="btn-form2" onclick="MostrarDatos()">Comprobar</button>
        <p id="PResultado"></p>
    </div>
    <div id="Contermometro" class="containerform3">
        <h1>Termómetro</h1>
        <input id="InpTermo" type="range" min="-20" max="50" value="20">
        <span id="ResulTermo">20</span>
        <p id="PResultadoTermo"></p>
    </div>
</body>
<script src="public/Js/funTotal.js"></script>
</html>