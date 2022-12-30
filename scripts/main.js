var contenido = document.querySelector('#tblEmpleados');

//Inputs del formulario
var btnAdd = document.getElementById('btnAgregarEmpleado');
var btnCancel = document.getElementById('btnCancelar');

function traer() {
  //fetch('http://127.0.0.1:8080/empleados')
  fetch('scripts/listaEmpleados.json')
    .then(res => res.json())
    .then(datos => {
      tabla(datos)
    })
}
function tabla(datos) {
  //console.log(datos)
  tblEmpleados.innerHTML = ''

  for (let valor of datos) {

    tblEmpleados.innerHTML += `

      <tr>
        <th scope="row">${valor.id}</th>
        <td>${valor.nombre}</tb>
        <td>${valor.apellidos}</tb>
        <td>${valor.cedula}</tb>
        <td>${valor.edad}</tb>
        <td>${valor.telefono}</tb>
        <td>${valor.fecha_nacimiento}</tb>

        <td>
          <input type="image"
            class="btn btn-outline-warning btn-sm"
            name="${valor.id}" 
            src="/images/edit.svg">
          </input>
          
          <input type="image"
            class="btn btn-outline-danger btn-sm"
            name="${valor.id}" 
            src="/images/trash.svg"
          </input>
        </td>

      </td>
    </tr >
    `
  }
}
//function validaciones
var txtNombre = document.getElementById("")
function validaForm() {
}

window.onload = function () {
  traer();
}
