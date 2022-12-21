/*
 * Archivo javascript para empleados.
 * 
 

function dataTimePicker() {
  console.log("Ingresa tu fecha de nacimiento");
}


window.onload = function () {
  dataTimePicker();
}
  */

//Inputs del formulario
var btnAdd = document.getElementById('btnAgregarEmpleado');
var btnCancel = document.getElementById('btnCancelar');

//function validaciones
var nombre = document.getElementById('NombreEmpleado');
var apellidos = document.getElementById('ApellidosEmpleado');
var cedula = document.getElementById('CedulaEmpleado');
var edad = document.getElementById('EdadEmpleado');
var telefono = document.getElementById('TelefonoEmpleado');
var fecha_nacimiento = document.getElementById('FechaNacimientoEmpleado');

function limpiaCampos() {

  nombre.value = "";
  apellidos.value = "";
  cedula.value = "";
  edad.value = 0;
  telefono.value = "";
  fecha_nacimiento.value = "";

}
function validaForm() {

}

//function agregarEmpleado
btnAdd.addEventListener('click', function (e) {
  e.preventDefault();
  swal("¡Agregado!", "¡Registro Agregado Exitosamente!", "success");
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

})

