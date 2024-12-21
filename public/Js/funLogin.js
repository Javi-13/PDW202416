function LoginRedirect(event) {
  event.preventDefault(); //Esto es momentaneo
  var usuario = document.getElementById("InpUser").value;
  var pass = document.getElementById("InpPassword").value;

  if (usuario == "admin") {
    switch (pass) {
      case "1":
        window.location.href = "http://localhost/PDW202416/Formulario1";
        break;
      case "2":
        window.location.href = "http://localhost/PDW202416/Formulario2";
        break;
      case "3":
        window.location.href = "http://localhost/PDW202416/Formulario3";
        break;
        case "4":
          window.location.href = "http://localhost/PDW202416/FormularioFinal";
          break;
      default:
        alert("Ingreso erroneo");
        break;
    }
  }
}
