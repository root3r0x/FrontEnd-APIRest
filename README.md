# Frontend for Spring boot WebApi



#### Introducción

Este repositorio( _Frontend_ ) es creado para consumir un webservice rest escrito en java con el framework SpringBoot, JPA, Hibernate y MySQL. 
* Backend: [APIRestSpringBootExample](https://github.com/root3r0x/APIRestSpringBootExample)

Dicho repositorio backend esta en esta misma cuanta de GitHub.

#### Configuración

El proyecto esta realizado en HTML(Vanilla), Javascript vanilla y *Fetch API* para las peticiones _POST_, _GET_, _PUT_ y _DELETE_ al servidor con el cual nos comunicamos mediante JSON. La base de datos esta sobre MySQL.

Tecnologías utilizadas:

* [MYSQL Ver 8.0.11 for Win64 on x86_64 (MySQL Community Server - GPL).](https://www.mysql.com/)
* [NodeJS v14.16.1.](https://nodejs.org/en/)
- [NPM v14.16.1.](https://www.npmjs.com/)
* - [Live Server 1.2.2](https://www.npmjs.com/package/live-server)
* Javascript
- [Jquery 3.6.1 (para hacer uso de fetch api)](https://jquery.com/download/)
- [SweetAlert (Alertas personalizadas).](https://sweetalert.js.org/)
* CSS
- [Bootstrap v5.3.0-alpha1](https://getbootstrap.com/)

#### Ejecutando el proyecto 

> Importante: Ejecutar el _backend_ antes de lanzar el proyecto _frontend_

El servidor de Spring se ejecuta por defecto en el puerto _**8080**_ por lo cual y para evitar conflictos lanzaremos la página principal sobre el puerto _**8081**_ en el localhost (127.0.0.1). Para realizar esto nos apoyaremos de la extensión _live server_ estando ubicados sobre la carpeta raíz del proyecto dónde se encuentra nuestro archivo _index.html_:

![Image](https://github.com/root3r0x/FrontEnd-APIRest/blob/main/images/docs/rootPATH.JPG)

Ejecutaremos el siguiente comando:

```` live-server --no-browser --port=8081````

El comando contiene dos parámetros *_--no-browser_* y *__--port=8081__* los cuales podemos encontrar en la página oficial de la extensión ([https://github.com/tapio/live-server#readme](https://github.com/tapio/live-server#readme)) pero de igual manera explicare a continuación:

* `--port=NUMBER` - para seleccionar el puerto que usaremos, por defecto: PORT env var (puerto configurado en el entorno) o puerto 8080 (Yo usare el 8081 por motivos que ya comente).
* `--no-browser` - suprime el lanzamiento automático en el navegador por defecto.

Una vez ejecutado el comando tendremos en la terminal o prompt dependiendo lo que use la siguiente pantalla (en mi caso estoy usando la Windows Terminal):

![Image](https://github.com/root3r0x/FrontEnd-APIRest/blob/main/images/docs/live_server_command.JPG)

Teniendo el servidor corriendo solo nos dirigiremos a nuestro local host ya sea usando _*https://localhost:8081*_ o _*127.0.0.1:8081*_ indicando en la URL el puerto 8081 que es donde esta corriendo nuestra página web.


#### Explicación del sitio

##### Index 

En nuestro navegador veremos lo siguiente:

![Image](https://github.com/root3r0x/FrontEnd-APIRest/blob/main/images/docs/index.JPG)

###### Menú principal

Para poder navegar en el sitio web tendemos el siguiente menú:

![Image](https://github.com/root3r0x/FrontEnd-APIRest/blob/main/images/docs/menu.JPG)

Cuenta con 3 rutas básicas a las acciones _Agregar Empleados_, _Modificar Lista_, y _Página principal_ , para poder saber en que parte estamos ubicados basta con mirar el menú dónde estará activa la opción de la página actual.



###### Tabla Empleados



![Image](https://github.com/root3r0x/FrontEnd-APIRest/blob/main/images/docs/tablaEmpleados.JPG)


En la página de inicio podemos ver una tabla con la información de los usuarios mostrando los siguientes campos:

- _*#*_: (Id)Identificador en la base de datos.
- _*Nombre*_: Nombre del empleado, para validar campos de texto.
- _*Apellidos*_: Apellidos materno y paterno, usado igual que el campo nombre.
- _*Cedula*_: Cedula de identidad, identificador único de cada persona, para validar longitud y caracteres especiales en el texto.
- _*Edad*_: Edad (de 18 a 99 años), para validar números enteros.
- _*Número telefónico*_: Número telefónico que consta de 10 dígitos numéricos, para validar longitud y caracteres numéricos.
- _*Fecha de nacimiento*_: Este campo es usado para validar los formatos de fecha.
- _*Modificar y Eliminar*_: Contamos con dos iconos para realizar las operaciones de eliminar y modificar dicho usuario.

##### Agregar Empleados

En la sección de agregar empleados tenemos un formulario sencillo en el cual introducimos los datos que necesita el registro(descritos en la sección anterior) el cual mostramos a continuación:

![Image](https://github.com/root3r0x/FrontEnd-APIRest/blob/main/images/docs/agregarEmpleados.JPG)

Formulario utilizando los estilos de bootstrap, es responsivo es decir que se adapta al tamaño de la pantalla del dispositivo. Cuenta con dos botones de acción:

- Aceptar:
   * Una vez llenos los datos requeridos (validar campos) con este botón mandamos la petición JSON con el método post de fetch api para realizar la petición al servidor. Una vez dado de alta el registro nos muestra una alerta (sweet alert) confirmando el registro. En caso contrario nos indica el error que sucedió en el proceso.
- Cancelar:
   * Este botón sirve para cancelar el registro para lo cual una alerta (sweet alert) nos pedirá confirmación, de pulsar aceptar procede a limpiar los campos dejando listo el formulario para un nuevo registro. En caso contrario solo se cierra la ventana sin alterar los datos del formulario.

---

> Author: Migue LD.  
> Github: [root3r0x](https://github.com)  
> Email: ledesmaduarte@duck.com
