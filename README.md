# Proyecto Integrador Argentina Programa 🚀
# FrontEnd 🚀
# Maldonado Martin 🚀


## Caracteristicas generales del Proyecto 

* Aplicación de `Portfolio` web full stack dinámica.
* Tecnologías `Front-End`: 
* `HTML5`, `CSS3`, `BootsTrap`,`TypeScript`, `Angular`, `Firebase`.
* Herramientas adicionales: `Apache TomCat`, `phpMyAdmin`, `XAMPP`, `Postman`.
* Aplicación del tipo `SPA` o Single Page Application
* Patrón`MVC`.
* Contiene una `Arquitectura Distribuida` con diseño de 
interfaz (front end) que muestra la información agregada por el 
usuario.
* Consta con un motor de `Base de datos MySQL`: para almacenar 
los datos de los diferentes componentes `Angular`.
* `DER` (diseño conceptual), Modelo Relacional (diseño lógico) y diseño físico la base de datos en MYSQL 
* cuenta con `APIs` como `Sprint Boot` para proveer a través de 
internet la información (back end).
* Tecnologías `Back-End`: `Spring-Boot`, `Java v.17`, `Clever Cloud`,  `Heroku`.
* Sistema de `Login` con seguridad JSON Web Token `(JWT)`
* `Una vez logueado puede editar lo componentes`: Experiencia, Educacion, Skills, Proyectos.
* `SCRUM`, para gestionar el tiempo de desarrollo.



## Contenido

- [Instalación y configuración](#instalación-y-configuración)
    - [Angular](#angular)
    - [Comandos](#comandos)
- [La app se divide en](#la-app-se-divide-en)
    - [Acerca de](#acerca-de)
    - [Banner](#banner)
    - [Educacion](#eduacacion)
    - [Experiencia](#experiencia)
    - [HardandsoftSkills](#hardandsoftSkills)
    - [Header](#header)
    - [Home](#home)
    - [Login](#login)
    - [Logo-arg-progr](#logo-arg-progr)
    - [Proyectos](#proyectos)
- [Ide's](#ides)
- [Licencia](#licencia)

## Instalación y configuración

## Angular

1. https://angular.io/
2. Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 14.0.5.
3. también debes tener instalado [NodeJs](https://nodejs.org/en/download/)
4. NodeJs ya te instala los paquetes npm necesarios.
5. [Spring-Boot](https://start.spring.io/)
5. `Web Servers`:
6. [Firebase](https://firebase.google.com/)
7. [Heroku](https://id.heroku.com/)
8. [Clever Cloud](https://www.clever-cloud.com/)

## Comandos

Servidor de desarrollo

Si descargas el proyecto directamente de mi repositorio GitHub.

Ejecutar `npm install` para su mejor funcionamiento.

Ejecute `ng serve -o` para correr servidor local automáticamente en el navegador. 

Navegue a `http://localhost:4200/`.
La aplicación se recargará automáticamente si cambia cualquiera de los archivos de origen.

Ejecute`ng generate component component-nuevoNombre`para generar un nuevo componente. O en su forma abreviada `ng g c component-nuevoNombre`

Ejecute `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en `dist/` directorio.

Ejecute `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

Ejecute `ng e2e` para ejecutar las pruebas de extremo a extremo a través de una plataforma de su elección. Usar este comando, primero debe agregar un paquete que implemente pruebas de extremo a extremo
capacidades.

Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte [Angular CLI
Descripción general y referencia de comandos] (https://angular.io/cli) página.

## La app se divide en

### Acerca de
Breve descripcion personal o lo que creas que sea importante transmitir. Informacion profesional resumida sobre vos.

### Banner
un Banner que represente la idea principal que queres transmitir.

### Educacion
Información Academica, certificaciones, cursos.

### Experiencia
Informacion de trayectoria laboral.

### HardandsoftSkills
Habilidades tecnologicas y habilidades blandas, como por ejemplo la comunicación efectiva. Visualizado con porcentajes para ver el grado de dominio de cada una.

### Header
En la parte superior izquierda, debe contener un logo y nombre dle programa.

### Home
La vista principal de la app.

### Login
La vista para que usuario pueda loguearse. Con la cual debe contar con un username y password. Una vez logueado el usuario puede editar los componentes Experiencia, Educacion, Skills y Proyectos.

### Logo-arg-progr
Logo de la institución.

### Proyectos
Proyecto de los que fuiste parte y desarrollaste.



# Componente Acerca De
### 🚀Lo unico que traigo de forma automatica es el nombre y el apellido a traves de Postman, no aplica dinamismo.🚀


```HTML

<div class="row">

  <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
    <img src="../../../assets/fotoZoom.jpg" alt="foto de perfil personal" 
class="img-fluid" id="foto__perfil__mitad">
  </div>

  <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
    <p id="nombre">{{persona.nombre}} {{persona.apellido}} </p>
    <p id="jr">Full Stack Developer Jr.</p>
  </div>

  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <span>
      <h1>Acerca de</h1>
      <p>Empecé mi trayectoria en el sector Retail, en empresas especializadas en la 
comercialización masiva de productos y servicios. Responsable de la ejecución 
de las actividades comerciales del área, como atención al cliente y ventas. 
Actualmente, estudio y desarrollo pequeños proyectos como páginas Web y Apps. 
Aprender hace parte de mi día a día y los desafíos me motivan a encontrar las 
mejores soluciones. Busco adquirir experiencia en el área de Tecnología de la 
información.</p>
    </span>
  </div>

</div>

```


## Ides
[Visual Studio Code](https://code.visualstudio.com/)
[IntelliJ IDEA](https://www.jetbrains.com/es-es/idea/)
[Java v.17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)



## Licencia
Completamente gratis (MIT)! Consulte [LICENSE.md](LICENSE.md) para obtener más información.
