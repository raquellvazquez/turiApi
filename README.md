<h1 align="center">TURI API</h1>


## ¿Qué es Turi?

Pueblos mágicos es una Página Web que tiene como objetivo mostrar recomendaciones sobre que hacer en los diferentes pueblos mágicos dentro de la República Mexicana.

En esta primer etapa Turi solo mostrará la información de los pueblos mágicos de 2 estados dentro de la República como lo son: ESTADO DE MÉXICO E HIDALGO.

En cada recomendación el usuario podrá conocer información como:

Los costos aproximados por visitar las atracciones más populares dentro del pueblo.
Ubicacion aproximada desde el centro del pueblo.
Ademas de esto, los usuarios que se registren en la página pueden dejar comentarios, calificaciones y/o reseñas sobre las recomendaciones que ya se encuentran publicadas para de este modo los otros usuarios sepan si es información confiable o no.


<h2 align="center">Desarrollo de la API</h2>

[Turi API](https://donapet.herokuapp.com/v1) lo desarrollamos utilizando diferentes tecnologías que a continuación describimos.


- :bulb: **NodeJs**: es un entorno de ejecución de JavaScript back-end, multiplataforma y de código abierto que se ejecuta en el motor V8 y ejecuta código JavaScript fuera de un navegador web. 


- :scroll: **MongoDB**:  es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos JSON.


- :art: **Postman**: es un cliente de API popular que facilita a los desarrolladores crear, compartir, probar y documentar API.

El cual nos ayudo a realizar las peticiones a nuestra base de datos.

- :gear: **Heroku**: es una plataforma que nos permite saltarnos muchos pasos de configuración de arquitectura y lanzar una aplicación en sencillos pasos.


- :gear: **Mongoose**: proporciona una solución sencilla y basada en esquemas para modelar los datos de la aplicación. Incluye conversión de tipos integrada, validación, creación de consultas, enlaces de lógica de negocios y mucho más, de fábrica.

## Uso de la API

A continuación ejemplicamos un poco sobre de la API y sus diferentes funcionalidades.


#### Ejemplo 1

- Usuarios

Pasos: 

1. Abrir Postman y crear un nuevo REQUEST.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/postman1.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

2. Crear una nueva solicitud **POST** agregar la ruta de la API (https://donapet.herokuapp.com/v1) y agregar **/users** como se muestra a continuación: 

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/postman2.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

3. En el apartado de Body de postman agregamos la siguiente estructura (formato JSON):

```bash
{
    "id_usuario": 1,
    "id_organizacion": 4,
    "cantidad": "18928",
    "estatus": "EN PROCESO"
}
```
Es importante aclarar que no es necesario agregar el id ya que es autoasignado por MongoDB.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/donacionesPOST.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

4. Enviar la petición con el boton azul y de no existir errores se obtendrá la un codigo 200 y el cuerpo de lo que acabamos de agregar.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/modelo_relacional.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

#### Ejemplo 2

En este ejemplo solo hariamos la consulta de todas las reseñas.

Pasos: 

1. Crear una nueva solicitud **GET** agregar la ruta de la API (https://donapet.herokuapp.com/v1) y agregar **/comments** como se muestra a continuación: 

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/donacionesGET.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

2. Al ser una petición get en este caso no necesitamos enviar un body por lo cual, una vez de hacer el paso anterior solo será necesario enviar la solicitud y de no existir errores se obtendrá la un codigo 200 y el listado.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/donacionesGETResult.png" alt="entidad relacion" width="100%" height="70%" />
    <p></p>
</div>

#### Ejemplo 3

Pasos: 

1. Abrir Postman y crear un nuevo REQUEST.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/postman1.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

2. Crear una nueva solicitud **PUT** agregar la ruta de la API (https://donapet.herokuapp.com/v1) y agregar **/towns/id** como se muestra a continuación: 

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/donacionesPUT.png" alt="entidad relacion" width="100%" height="70%" />
    <p></p>
</div>


3. En el apartado de Body de postman agregamos la siguiente estructura con los datos que queremos modificar de dicha donación en formato JSON:

```bash
{
    "id_usuario": 1,
    "id_organizacion": 5,
    "cantidad": "100",
    "estatus": "EN PROCESO"
}
```

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/develop/src/assets/PUTDONACIONES.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

4. Enviar la petición con el boton azul y de no existir errores se obtendrá la un codigo 200 y un mensaje de "OK", como se muestra a continuación.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/develop/src/assets/PUTRESULT.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

#### Ejemplo 4

Pasos: 

1. Abrir Postman y crear un nuevo REQUEST.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/postman1.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

2. Crear una nueva solicitud **DELETE** agregar la ruta de la API (https://donapet.herokuapp.com/v1) y agregar **/town/id** como se muestra a continuación: 

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/donacionesDelete.png" alt="entidad relacion" width="100%" height="100%" />
    <p></p>
</div>

3. Al ser una petición **DELETE** en este caso no necesitamos enviar un body por lo cual, una vez de hacer el paso anterior solo será necesario enviar la solicitud y de no existir errores se obtendrá la un codigo 200 y un mensaje de "OK".

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/develop/src/assets/DELETERESULT.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>


### Anotaciones:

Endpoint para la colección Users:

- **GET** https://donapet.herokuapp.com/v1/usuarios/
- **POST** https://donapet.herokuapp.com/v1/usuarios/
- **PUT** https://donapet.herokuapp.com/v1/usuarios/id
- **DELETE** https://donapet.herokuapp.com/v1/usuarios/id


Endpoint para la colección Towns:

- **GET** https://donapet.herokuapp.com/v1/organizaciones/
- **POST** https://donapet.herokuapp.com/v1/organizaciones/
- **PUT** https://donapet.herokuapp.com/v1/organizaciones/id
- **DELETE** https://donapet.herokuapp.com/v1/organizaciones/id

Endpoint para la colección Comments:

- **GET** https://donapet.herokuapp.com/v1/organizaciones/
- **POST** https://donapet.herokuapp.com/v1/organizaciones/
- **PUT** https://donapet.herokuapp.com/v1/organizaciones/id
- **DELETE** https://donapet.herokuapp.com/v1/organizaciones/id


## Desarrolladores


| [<img src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/boy.png" alt="IE / Edge" width="24px" height="24px" />](https://github.com/Kyervnienh)</br>Kevin Henry López Vázquez| [<img src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/girl.png" alt="Safari" width="24px" height="24px" />](https://github.com/PaulinaQuintero)</br>Paulina Valeria Quintero Mucito| [<img src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/boy.png" alt="Chrome" width="24px" height="24px" />](https://github.com/JesrigPineda)</br>Jesrig Soid Pineda Salinas| [<img src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/girl.png" alt="Safari" width="24px" height="24px" />](https://github.com/raquellvazquez)</br>Laura Raquel Vazquez Sanchez ||
| --- | --- | --- | --- | --- |
| kevin.kyervnienh@gmail.com | paulina.mucito@gmail.com | Js.pineda.sa@gmail.com| raquelskrats@gmail.com |

<br>

## ¿Cómo se ve TURI en la Web?

Puedes visitar nuestra página y visualizar cómo se ve actualmente TURI, visitando:
[TURI](https://ecstatic-kalam-24f842.netlify.app/).


<p align="center">THANK YOU FOR USING TURI API</p>
