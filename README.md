**[Made by Vianam92](https://github.com/Vianam92)** 🤖️

- Exercise URL: [GitHub o Trato](vianam92.github.io/js-api-github//)

---
# GitHub o trato

Nos piden una pequeña web app que consiste en presentar en pantalla el nombre público real de una usuaria de GitHub.

## Qué vamos a practicar

Con esta aplicación vamos a practicar la planificación, peticiones a un servidor, trabajo con objetos, con arrays, con cadenas de texto, unos for muy chulos, algo de imaginación, un poco de trabajo con el DOM y, por supuesto, algo de HTML y CSS.

## Funcionamiento

Nuestra aplicación consta de un campo donde escribir el nick de un usuaria de la plataforma de GitHub. Al hacer clic en el botón "Buscar" tendremos que pedir a Github la información que tienen sobre dicha usuaria usando su [API de usuarias](https://developer.github.com/v3/users/). De la información que recibamos seleccionaremos el nombre real de la criatura (sin los apellidos) y escribiremos cada letra en un `li`de una lista ordenada.

Si nos quedan ganas intentaremos acercarnos a esta propuesta gráfica usando grid o flexbox.

> Cada letra está separada 20px de la siguiente ;)

![Guía](./info/github-api.png)

## Guión

Sería genial que intentaseis primero escribir vuestro propio guión y después contrastéis con este que os proponemos:

1. Crear un proyecto: repositorio, estructura de carpetas y html con los elementos indispensables (usar el Kit con gulp es totalmente opcional).
2. Al hacer clic en el botón de buscar se debe:

   1. Recoger el nick que haya escrito la usuaria en el campo
   1. Componer la url para hacer la petición según indiquen en la documentación de la API
   1. Hacer la petición
   1. Acceder al nombre completo de la criatura
   1. Seleccionar solo el nombre descartando los apellidos y espacios (si los hubiese)
   1. Escribir cada letra del nombre, por orden, en nuestra página usando una lista ordenada

3. Una vez echo esto podemos animarnos con los estilos para intentar acercarnos a la propuesta gráfica que nos dan.

> Recordad que cuando programamos tenemos que huir de los casos específicos: esto tiene que funcionar para cualquier usuario válido de GitHub.

## Pistas que nos pueden ayudar en el camino

Hay una serie de métodos que nos van a hacer la vida más fácil. Uno de ellos es `.split()` [aquí lo explican superbien](https://alligator.io/js/split-string-method/).
Ademas recordad que `.length` nos sirve tanto para arrays como para cadenas y que sabiendo la longitud de una cadena puedo acceder a cada uno de los caracteres como si fuese un array (casi).

## FAQ

### ¿Podemos hacerlo en grupos pequeños?

Sí

---

## Bonus

–Buah, esto es muy fácil, me lo he ventilado en naíca y me queda medio puente todavía. ¿Qué hago?

Venga, si alguien lo acaba todo y el código está indentado y ordenado como una patena de las buenas podemos intentar controlar errores:

- ¿Qué pasa si la usuaria no existe?
- ¿Qué pasa si la usuaria no tiene puesto el nombre completo?

---

**Al turrrón!**
