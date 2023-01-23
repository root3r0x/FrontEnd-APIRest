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

function updateEmploye(data) {

  var mydata = JSON.stringify(data);

  localStorage.setItem("datos", mydata);
  window.location.replace("/updateEmploye.html");

  /* console.log(data.id);
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
  */
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd"d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg>
            Editar
          </button>
        </td>
        <td>
        <button name="${valor.id}" type="submit" class="btn btn-danger btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>
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
        var data = [{
          "id": parseInt(e.target.parentElement.parentElement.children[0].textContent),
          "nombre": e.target.parentElement.parentElement.children[1].textContent.toString(),
          "apellidos": e.target.parentElement.parentElement.children[2].textContent.toString(),
          "cedula": e.target.parentElement.parentElement.children[3].textContent.toString(),
          "edad": e.target.parentElement.parentElement.children[4].textContent.toString(),
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
        updateEmploye(data2);
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
