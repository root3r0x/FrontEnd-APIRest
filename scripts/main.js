var contenido = document.querySelector('#tblEmpleados');

//Inputs del formulario
var btnAdd = document.getElementById('btnAgregarEmpleado');
var btnCancel = document.getElementById('btnCancelar');

function traer() {
  fetch('http://127.0.0.1:8080/empleados')
    //fetch('scripts/listaEmpleados.json')
    .then(res => res.json())
    .then(datos => {
      tabla(datos)
    })
}
function tabla(datos) {
  //console.log(datos)
  tblEmpleados.innerHTML = ''

  for (let valor of datos) {
    //console.log(valor.nombre)
    //console.log(valor)

    tblEmpleados.innerHTML += `

    <tr>
     <th scope="row">${valor.id}</th>
      <td>${valor.nombre}</tb>
      <td>${valor.apellidos}</tb>
      <td>${valor.cedula}</tb>
      <td>${valor.edad}</tb>
      <td>${valor.telefono}</tb>
      <td>${valor.fecha_nacimiento}</tb>
    </tr>
    `

  }
}
//function validaciones
var txtNombre = document.getElementById("")
function validaForm(){

}

//function agregarEmpleado
btnAdd.addEventListener('click', function (e) {
  e.preventDefault();
  swal("¡Agregado!", "¡Registro Agregado Exitosamente!", "success");
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


window.onload = function () {
  traer();
}


