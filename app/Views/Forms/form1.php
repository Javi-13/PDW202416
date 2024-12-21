<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego de Adivinanza</title>
    <link rel="stylesheet" href="public/Css/styleform1.css">
</head>

<body>
    <div class="container">
    <h1>Adivina el numero</h1>
    <input id="InpNumero" type="number" placeholder="Ingresa un numero">
    <button id="BtnAdiv" onclick="funAdivinar()">Adivinar</button>
    <button id="BtnReini" onclick="funReiniciar()">Reiniciar</button>
    <div id="DivResultado"></div>
    </div>
</body>
<script src="public/Js/funAdivina.js"></script>
</html>