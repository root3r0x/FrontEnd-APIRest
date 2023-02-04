/**
  Script Usado para la acción editar.
**/

/**
 *
  console.log(data.id);
  console.log(data.nombre);
  console.log(data.apellidos);
  console.log(data.cedula);
  console.log(data.edad);
  console.log(data.telefono);
  console.log(data.fecha_nacimiento);
  console.log(data); 
  

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

let empleado = [];  //Obtenemos el objeto del localStorage.
let cEmpleado = []; //Guardamos los datos limpios.

function clearData() {

  empleado = JSON.parse(localStorage.getItem("empleadoKey"));

  var id = empleado[0].id;
  var edad = empleado[0].edad;

  var nombre = empleado[0].nombre;
  var apellidos = empleado[0].apellidos;
  var cedula = empleado[0].cedula;
  var numero = empleado[0].numeroTelefono;
  var fecha = empleado[0].fecha_nacimiento;

  cEmpleado = {}

  /**  cEmpleado = {
      apellidos: "prueba 3333333\n        ",
      cedula: "1234567890\n        ",
      edad: 27,
      fecha_nacimiento: "1995-07-08T00:00:00.000+00:00\n\n        ",
      id: 456,
      nombre: "usuario 3333\n        ",
      telefono: "8993339990\n        "
    }
   **/
}

function setDatos() {

  empleado = clearData();

  document.getElementById('olIdEmpleado').value = empleado[0].id;

  document.getElementById('olNombreEmpleado').value = empleado[0].nombre;
  document.getElementById('NombreEmpleado').value = empleado[0].nombre;
  document.getElementById('olApellidosEmpleado').value = empleado[0].apellidos;
  document.getElementById('ApellidosEmpleado').value = empleado[0].apellidos;
  document.getElementById('olCedulaEmpleado').value = empleado[0].cedula;
  document.getElementById('CedulaEmpleado').value = empleado[0].cedula;

  //document.getElementById('olNumeroTelefonicoEmpleado').value = empleado[0].telefono;
  //document.getElementById('NumeroTelefonicoEmpleado').value = empleado[0].telefono;

  document.getElementById('olEdadEmpleado').value = empleado[0].edad;
  document.getElementById('EdadEmpleado').value = empleado[0].edad;
  document.getElementById('olFechaNacimientoEmpleado').value = empleado[0].fecha_nacimiento;
  document.getElementById('FechaNacimientoEmpleado').value = empleado[0].fecha_nacimiento;

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
