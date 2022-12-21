//obtenemos la tabla 
var contenido = document.querySelector('#tblEmpleados');

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

window.onload = function () {
  traer();
}


