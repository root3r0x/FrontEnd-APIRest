// Contenido es la tabla.
var contenido = document.querySelector('#tblEmpleados');

function traer() {
  //  fetch('http://localhost:8080/empleados')
  fetch('scripts/listaEmpleados.json')
    .then(res => res.json())
    .then(datos => {
      tabla(datos)
    })
}

function updateEmploye(datosEmpleado) {

  var empleado = JSON.stringify(datosEmpleado);

  localStorage.setItem("empleadoKey", empleado);

  window.location.replace("/updateEmploye.html");
}

function deleteEmploye(empleado) {
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
    });
}

function tabla(datos) {

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
          <button name="${valor.id}" type="submit" class="btn btn-secondary btn-sm">
          <i class="bi bi-pencil-square"></i> 
          Editar
          </button>
        </td>
        <td>
        <button name="${valor.id}" type="submit" class="btn btn-danger btn-sm">
            <i class="bi bi-trash3"></i> 
            Eliminar
          </button>
          
        </td>
      </td>
    </tr>
    `
  }

  //Tabla de empleados.
  const botones = document.getElementById('tblEmpleados').querySelectorAll('button');

  Array.from(botones).forEach(b =>

    //b.addEventListener("click", function(){
    b.addEventListener("click", (e) => {

      //btn Editar  {"id": 78912}
      if (e.target.matches('.btn-secondary')) {

        var datosEmpleado = [{
          "id": parseInt(e.target.parentElement.parentElement.children[0].textContent),
          "nombre": e.target.parentElement.parentElement.children[1].textContent.toString(),
          "apellidos": e.target.parentElement.parentElement.children[2].textContent.toString(),
          "cedula": e.target.parentElement.parentElement.children[3].textContent.toString(),
          "edad": parseInt(e.target.parentElement.parentElement.children[4].textContent),
          "telefono": e.target.parentElement.parentElement.children[5].textContent.toString(),
          "fecha_nacimiento": e.target.parentElement.parentElement.children[6].textContent.toString()
        }];

        var data2 = [{
          "id": e.target.parentElement.parentElement.children[0].textContent,
          "nombre": e.target.parentElement.parentElement.children[1].textContent,
          "apellidos": e.target.parentElement.parentElement.children[2].textContent,
          "cedula": e.target.parentElement.parentElement.children[3].textContent,
          "edad": e.target.parentElement.parentElement.children[4].textContent,
          "telefono": e.target.parentElement.parentElement.children[5].textContent,
          "fecha_nacimiento": e.target.parentElement.parentElement.children[6].textContent
        }];
        updateEmploye(datosEmpleado);
      }

      //btn Eliminar
      if (e.target.matches('.btn-danger')) {
        console.log(e.target.parentElement.parentElement.children);
        e.preventDefault();
        deleteEmploye("");
      }

    })
  );

}

window.onload = function () {
  traer();
}
