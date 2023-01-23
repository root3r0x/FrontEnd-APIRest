/**
  Script Usado para la acción editar.
**/
function traer() {
  //  fetch('http://localhost:8080/empleados')
  fetch('scripts/main')
    .then(res => res.json())
    .then(datos => {
      console.log(datos);
    })
}

window.onload = function () {

  var mydata = localStorage.getItem("datos");
  //  var mydata = localStorage["datos"];
  localStorage.removeItem("datos");

  console.log("Datos: ");
  console.log(mydata);
}
