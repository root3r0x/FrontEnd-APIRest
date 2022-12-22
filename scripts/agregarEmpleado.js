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


  //const data = {username: 'example'};
  //  fetch("http://localhost:8081/addEmploye.html")
  fetch("http://localhost:8081/addEmploye.html", {
    method: 'post', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
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

function limpiaCampos() {
  nombre.value = "";
  apellidos.value = "";
  cedula.value = "";
  edad.value = null;
  telefono.value = "";
  fecha_nacimiento.value = "";
}


function envioJSON() {

  //var fech = document.getElementById('FechaNacimientoEmpleado').value.toString();
  var fech = fecha_nacimiento.value.toString();
  var matriz = fech.split('/'); //["12","14","2022"]
  var fecha = matriz[2] + "-" + matriz[0] + "-" + matriz[1];

  const data = [
    {
      "nombre": nombre.value = "Miguel",
      "apellidos": apellidos.value = "Guadalupe",
      "cedula": cedula.value = "90IO90IKIO",
      //"edad": parseInt(edad.value), Edad del formulario
      "edad": edad.value = 27,
      "telefono": telefono.value = "8992491860",
      "fecha_nacimiento": fecha
    }
  ];
  //var fecha = document.getElementById('FechaNacimientoEmpleado').value;
  console.log("Datos:", data);
}

//Botones
btnAdd.addEventListener('click', function (e) {
  e.preventDefault();
  //sendDatos();
  envioJSON();
  //swal("¡Agregado!", "¡Registro Agregado Exitosamente!", "success");
  console.log("Hola desde addEmploye.js");
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
      /**
      else {
        swal("");
      }*/
    });
});

