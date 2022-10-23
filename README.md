# RutDatos

## Web y Api para obtener datos por RUT

Una forma fácil de obtener los datos de una persona por medio del Rut, además incluye una api para peticiones de manera fácil.

### ⚙ Instalación y Configuración

📎 Clonamos el repositorio

```bash
gitclone
```

📦 Instalamos las dependencias

```bash
npm install
```

📄 Debemos crear un fichero denominado `.env` en el cual se ingresaran las variables necesarias para la ejecución de la aplicación, este archivo debe contener lo siguiente:

```env
# Puerto donde corerra la aplicación | default 3000 
PORT_APP = 5000

# Info https://www.npmjs.com/package/morgan
QUERY_LOG_FORMAT = short

# Solo para visualización en documentación de la api en la pagina 
PAGE_HTTP = http://localhost:5000
```

🏃‍♂️ Y por ultimo ejecutamos:

```bash
npm start
```

🏃‍♂️🏃‍♀️ Si utiliza pm2 para mantener las aplicaciones corriendo, utilice:

```bash
npm run pm2
```
