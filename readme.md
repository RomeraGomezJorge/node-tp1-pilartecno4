### NODE Trabajo Practico Nº1

#### Servidor Express con Endpoints para Gestionar Estrellas

Este repositorio contiene un servidor Express que cumple con los siguientes requisitos:

- Las capas de ruta y controlador están separadas para una mejor organización del código.
- Se exponen los siguientes endpoints:

    1. `GET api/stars`: Recupera todas las estrellas con un parámetro de consulta opcional ( **name** ) para filtrar.
    2. `POST api/stars`: Crea una nueva estrella con validación Joi en el cuerpo de la solicitud.
    3. `GET api/stars/:id`: Recupera una estrella específica por su ID.

## Requisitos Previos

Antes de ejecutar este servidor, asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu sistema. Puedes descargarlos desde [Node.js official website](https://nodejs.org/).

## Configuración

Sigue estos pasos para configurar y ejecutar el servidor:

1. Clona este repositorio en tu máquina local:

   ```bash
    git clone https://github.com/RomeraGomezJorge/node-tp1-pilartecno4
   ```
2. Navega al directorio del proyecto:

    ```bash
    cd node-tp1-pilartecno4
    ```
3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```
### Uso

Una vez que hayas configurado el servidor y hayas instalado las dependencias, puedes ejecutarlo usando el siguiente comando:

    npm run dev

El servidor Express estará en funcionamiento y escuchando en el puerto 3000 por defecto. Puedes acceder a los endpoints mencionados anteriormente utilizando una herramienta como Postman o haciendo solicitudes HTTP desde tu aplicación cliente.

## Documentación de API
### GET /stars
Recupera todas las estrellas. Puedes proporcionar un parámetro de consulta opcional para filtrar las estrellas según tus criterios.

#### Ejemplo de solicitud:

veces por 5 dias

    GET http://localhost:3000/api/stars?name=Sirius
    
### POST /stars
Crea una nueva estrella. Debes enviar un cuerpo de solicitud JSON con los datos de la estrella que deseas crear. La solicitud se validará utilizando Joi para garantizar que los datos sean correctos.

#### Ejemplo de solicitud:

    POST http://localhost:3000/api/stars
    
    {
        "id": 11,
        "name": "Polaris Australis",
        
        "distancia": "431 años luz",
        "mass": "2.05 masas solares",
        "radius": "1.82 radios solares",
        "temperature": "9,800 K",
        "luminosity": "32 luminosidades solares",
        "age": "350-500 millones de años",
        "composition": {
            "hydrogen": "70%",
            "helium": "28%",
            "otros_elementos": "2%"
        },
        "stellar_history": "Polaris Australis es una estrella de la constelación del Sur y es conocida como el Polo Sur Celestial. Aunque no es tan brillante como Polaris (la Estrella del Norte), cumple un papel similar en la navegación en el hemisferio sur."
    }
    
    
### GET /stars/:id
Recupera una estrella específica por su ID.

#### Ejemplo de solicitud:

    GET http://localhost:3000/api/stars/1

Reemplaza 1 con el ID de la estrella que deseas recuperar.