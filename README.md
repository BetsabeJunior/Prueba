# Prueba Técnica para Desarrolladores

Este repositorio contiene una solución para determinar los números naturales perfectos dentro de un rango dado de números.

## Condiciones de la Prueba

- **Tiempo de Implementación:** 6 horas.
- Se acepta presentación en pseudocódigo.
- Sin restricción de lenguaje.
- Solo se permite el uso de frameworks frontend (como Bootstrap, Handlebars, KendoUI, etc.).

## Requerimiento

Crear una solución que permita determinar los números naturales perfectos en un dado rango de números.

### Reto en la Solución

Descartar ciclos innecesarios.

## Requerimientos Opcionales de Solución

- La aplicación debería funcionar en al menos tres sistemas operativos: OSX, Linux, Windows (no necesariamente desplegable en todos).
- La aplicación debe ser interoperable.
- La aplicación debe ser de fácil mantenimiento.
- El uso de control versión para la solución, por ejemplo, GitHub.
- Persistencia de la información.
- Documentar la escalabilidad de la solución.

## Implementación

### Frontend

- Interfaz desarrollada con HTML, CSS y JavaScript.
- Utilización de Bootstrap para facilitar el diseño y la interactividad.

### Backend

- Desarrollado con ASP.NET Web API 7.

## Instrucciones de Uso

1. Clona o descarga este repositorio en tu máquina local.
2. Abre la aplicación en tu entorno de desarrollo preferido.
3. Ejecuta el frontend y el backend de la aplicación.
4. Abre tu navegador web y navega a la interfaz de la aplicación.
5. Ingresa dos números, el primero representa el inicio del rango y el segundo el final.
6. Haz clic en el botón  Buscar Números Perfectos.
7. La aplicación calculará y mostrará los números naturales perfectos dentro del rango especificado.

## Escalabilidad de la Solución

La solución desarrollada en ASP.NET Web API y HTML/JavaScript/Bootstrap está diseñada para ser escalable y eficiente, aunque no incluya una base de datos. A continuación, se detallan algunas estrategias de escalabilidad:

Arquitectura de Backend Eficiente: El backend implementado en ASP.NET Web API utiliza una arquitectura eficiente que permite manejar múltiples solicitudes simultáneas de manera efectiva. Esta arquitectura está diseñada para escalar horizontalmente mediante la adición de más instancias de la API en caso de aumento en la carga de trabajo.
Escalabilidad Horizontal: La API puede escalar horizontalmente agregando más instancias según sea necesario para manejar un mayor volumen de solicitudes. Esto se puede lograr mediante la implementación de un sistema de balanceo de carga que distribuya las solicitudes entre múltiples instancias de la API, lo que permite una mejor utilización de los recursos y una mayor capacidad de respuesta.
Cacheado de Resultados: Se puede implementar un sistema de cacheado de resultados en el backend para almacenar en caché los resultados de las consultas anteriores. Esto ayuda a reducir la carga en el servidor al evitar el procesamiento repetido de solicitudes similares, mejorando así el rendimiento y la escalabilidad de la solución.
Optimización del Cliente: En el lado del cliente, se pueden implementar técnicas de optimización para reducir la carga en el backend. Esto incluye minimizar el tamaño de las solicitudes y respuestas, implementar el almacenamiento en caché en el navegador y utilizar técnicas de precarga para mejorar la velocidad de carga de la interfaz de usuario.
Monitoreo y Optimización Continua: Es importante monitorear el rendimiento de la aplicación de forma continua y realizar optimizaciones según sea necesario. Esto implica identificar y solucionar cuellos de botella, ajustar la configuración del servidor y realizar mejoras en el código para garantizar una escalabilidad efectiva a medida que la carga de trabajo aumenta.
En resumen, la solución está diseñada para ser escalable y eficiente, incluso sin una base de datos. Se aprovechan técnicas de escalabilidad horizontal, cacheado de resultados y optimización del cliente para garantizar un rendimiento óptimo y una escalabilidad efectiva a medida que la aplicación crece y evoluciona.

## Betsabe Junior Hoyos Barrios
