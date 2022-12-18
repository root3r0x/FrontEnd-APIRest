
/*
 * Archivo javascript para empleados.
 * 
 */
const Http = new XMLHttpRequest();
const URL = 'scripts/listaEmpleados.json';

Http.open("GET", URL);
Http.send();

Http.onreadystatechange = (e) => {

  console.log(Http.responseText)
}

