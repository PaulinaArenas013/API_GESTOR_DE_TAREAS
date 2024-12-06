# API_GESTOR_DE_TAREAS
Aplicación para gestionar tareas personales con Python y JavaScript.

## ÍNDICE

1. Objetivo del proyecto
2. Tecnologías y dependencias utilizadas
3. Instrucciones de Implementación

****

## 1. 🎯 Objetivo del proyecto

El objetivo de este proyecto es desarrollar una aplicación para gestionar tareas personales, con las siguientes funciones:
* Crear una nueva tarea. 
* Visualizar las tareas creadas.
* Actualizar el estado de una tarea (completada/no completada).
* Eliminar una tarea.

## 2. Tecnologías y dependencias utilizadas

* **Backend:**
  * Python: Lenguaje principal para la implementación del backend.
  * Flask: Framework ligero para desarrollar la API y manejar las rutas.
  * Flask-Login: Para la autenticación y gestión de sesiones de usuarios.
  * Flask-SQLAlchemy: Para la integración con la base de datos.
  * SQLite: Base de datos utilizada en desarrollo.

* **Frontend:**
  * HTML
  * CSS
  * JavaScript: Gestión de interacciones dinámicas con la API y animaciones visuales (como Confetti library).
  * Bootstrap: Framework para diseño responsivo y componentes predefinidos.


## 3. Instrucciones de Implementación

* Crear un entorno virtual con el comando de python -m venv env 
* Posteriormente activarlo con .\env\Scripts\activate.
* Instalar dependencias:  pip install flask flask-sqlalchemy , pip install flask-login
* Finalmente ejecutar el comando flask --app app --debug run para interactuar con la aplicación.

## 4. Link a demo
http://34.57.149.76:5000/login
