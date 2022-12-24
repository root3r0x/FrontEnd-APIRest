/*
 * Archivo javascript para empleados.
 *  
 */

//Inputs del formulario
var btnAdd = document.getElementById('btnAgregarEmpleado');
var btnCancel = document.getElementById('btnCancelar');

//variables inputs
var nombre = document.getElementById('NombreEmpleado');
var apellidos = document.getElementById('ApellidosEmpleado');
var cedula = document.getElementById('CedulaEmpleado');
var edad = document.getElementById('EdadEmpleado');
var telefono = document.getElementById('TelefonoEmpleado');
var fecha_nacimiento = document.getElementById('FechaNacimientoEmpleado');


function sendDatos() {

  const data = [
    {
      "nombre": "Aplicación de empleados",
      "apellidos": "Por Amsedel Etraud",
      "cedula": "00xx00XX00",
      "edad": 27,
      "telefono": "8992491869",
      "fecha_nacimiento": "1995-07-08"
    }
  ];
}

function limpiaCampos() {
  nombre.value = "";
  apellidos.value = "";
  cedula.value = "";
  edad.value = null;
  telefono.value = "";
  fecha_nacimiento.value = "";
}

function envioJSON() {

/**
  nombre.value = "Miguel";
  apellidos.value = "Guadalupe";
  cedula.value = "90IO90aasKIO";
  //"edad": parseInt(edad.value), Edad del formulario
  edad.value = 27;
  telefono.value = "8992491860";
**/
  var fech = fecha_nacimiento.value.toString();
  var matriz = fech.split('/'); //["12","14","2022"]
  var fecha = matriz[2] + "-" + matriz[0] + "-" + matriz[1];
  //Datos
  const data = {
    "nombre": nombre.value.toString(),
    "apellidos": apellidos.value.toString(),
    "cedula": cedula.value.toString(),
    "edad": parseInt(edad.value),
    "telefono": telefono.value.toString(),
    "fecha_nacimiento": fecha
  }
  //debugger;
  //fetch('http://localhost:8081/addEmploye.html',{
  fetch('http://localhost:8080/empleados', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    //.then(resp => resp.text()).then(console.log)
    .then(res =>
      res.json())
    .then(data =>
      console.log(data + "<=Esta es la databro"))
    .catch(
      function (error) {
        swal("Error!", 'Hubo un problema con la petición Fetch:' + error.message, "error");
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      })
      /**
    .then(function (data) {
      if (data.ok) {
        return data.text();
      }
      else {
        throw "Ocurrio un error";
      }
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    }); */
}


//Botones
btnAdd.addEventListener('click', function (e) {
  e.preventDefault();
  envioJSON();
  //swal("¡Agregado!", "¡Registro Agregado Exitosamente!", "success");
})

//function Cancelar
btnCancel.addEventListener('click', function (e) {

  e.preventDefault();

  swal({
    title: "¿Desea cancelar Registro?",
    text: "¡¡¡Una vez cancelado debera ingresar de nuevo los datos!!!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        limpiaCampos();
        swal("¡Registro cancelado exitosamente!", {
          icon: "success",
        });
      }
    });
});

