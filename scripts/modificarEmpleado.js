/**
  Script Usado para la acción editar.
**/

/**
 *
  fetch('http://localhost:8081/updateEmploye.html', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json, text/plain, * / *',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(data => data.json())
    .then(data => console.log(JSOn.stringify(data))
    );
  **/
function traer() {
  //  fetch('http://localhost:8080/empleados')
  fetch('scripts/main')
    .then(res => res.json())
    .then(datos => {
      console.log(datos);
    })
}

let empleado = [];  //Declaramos el array vacio para obtener el objeto del localStorage.
function setDatos() {

  empleado = JSON.parse(localStorage.getItem("empleadoKey"));

  var nom = empleado[0].nombre.toString().split('\n');
  var ap = empleado[0].apellidos.toString().split('\n');
  var ced = empleado[0].cedula.toString().split('\n');
  var num = empleado[0].telefono.toString().split('\n');
  var fech = empleado[0].fecha_nacimiento.toString().split('T');

  var id = empleado[0].id;
  var nombre = nom[0];
  var apellidos = ap[0];
  var cedula = ced[0];
  var numero = num[0];
  var edad = empleado[0].edad;
  var fecha = fech[0];

  document.getElementById('olIdEmpleado').value = id;

  document.getElementById('olNombreEmpleado').value = nombre;
  document.getElementById('NombreEmpleado').value = nombre;
  document.getElementById('olApellidosEmpleado').value = apellidos;
  document.getElementById('ApellidosEmpleado').value = apellidos;
  document.getElementById('olCedulaEmpleado').value = cedula;
  document.getElementById('CedulaEmpleado').value = cedula;

  document.getElementById('olTelefonoEmpleado').value = numero;
  document.getElementById('TelefonoEmpleado').value = numero;

  document.getElementById('olEdadEmpleado').value = edad;
  document.getElementById('EdadEmpleado').value = edad;
  document.getElementById('olFechaNacimientoEmpleado').value = fecha;
  document.getElementById('FechaNacimientoEmpleado').value = fecha;

  localStorage.removeItem("empleadoKey");
}

function clearDatos() {
  console.log("??");
  //localStorage.removeItem("empleadoKey");
  debugger;
}

window.onload = function () {
  try {
    if (localStorage.getItem("empleadoKey")) {
      setDatos();
    }
    else {
      console.log("No hay datos para actualizar.")
    }
  }
  catch (error) {
    console.log("Hubo un error:")
    console.log(error);
  }
}
