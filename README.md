# Frontend for Spring boot WebApi



#### Objetivo

Este repositorio( _Frontend_ ) es creado para consumir un webservice rest escrito en java con el framework SpringBoot, JPA, Hibernate y MySQL. 
* Backend: [APIRestSpringBootExample](https://github.com/root3r0x/APIRestSpringBootExample)

Dicho repositorio backend esta en esta misma cuanta de GitHub.

##### Configuración

El projecto esta realizado en HTML(Vanilla), Javascript vanilla y *Fetch API* para las peticiones _GET_, _POST_, _DELETE_ y _UPDATE_ al servidor con el cúal nos comunicamos mediante JSON. La base de datos esta sobre MySQL.

Técnologías utilizadas:

* [MYSQL Ver 8.0.11 for Win64 on x86_64 (MySQL Community Server - GPL).](https://www.mysql.com/)
* [NodeJS v14.16.1.](https://nodejs.org/en/)
   - [NPM v14.16.1.](https://www.npmjs.com/)
*    - [Live Server 1.2.2](https://www.npmjs.com/package/live-server)
* Javascript
   - [Jquery 3.6.1 (para hacer uso de fetch api)](https://jquery.com/download/)
   - [SweetAlert (Alertas personalizadas).](https://sweetalert.js.org/)
 * CSS
    - [Bootstrap v5.3.0-alpha1](https://getbootstrap.com/)

#### Ejecutando el proyecto 

> Importante: Ejecutar el _backend_ antes de lanzar el proyecto _frontend_

El servidor de Spring se ejectuta por defecto en el puerto _**8080**_ por lo cúal y para evitar conflictos lanzaremos la página principal sobre el puerto _**8081**_ en el localhost (127.0.0.1). Para realizar esto nos apoyaremos de la extención _live server_ estando ubicados sobre la carpeta raíz del proyecto dónde se encuentra nuestro archivo _index.html_:

![Image](./images/docs/rootPATH.jpg)

Ejecutaremos el siguiente comando:

```` live-server --no-browser --port=8081````


***
> Author: Migue LD.             
> github: [root3r0x](https://github.com)              
> Email: ledesmaduarte@duck.com

***
