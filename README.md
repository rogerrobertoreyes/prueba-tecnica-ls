# prueba-tecnica-ls
Prueba técnica

# base-de-datos sql-server
Se debe ejecutar el script: ScriptEntidades.sql

# back-end
Este proyecto esta desarrollado en vs 2022 con .net core y entity-framework

Esta configurado para ejecutarse en el puerto:7236 
`https://localhost:7236/swagger/index.html`

En el caso de que se quiera usar otro puerto, se debe modificar el archivo: launchSettings.json
<!--
"https": {
  "commandName": "Project",
  "dotnetRunMessages": true,
  "launchBrowser": true,
  "launchUrl": "swagger",
  "applicationUrl": "https://localhost:7236;http://localhost:5138",
  "environmentVariables": {
    "ASPNETCORE_ENVIRONMENT": "Development"
  }
}
-->

La cadena de conexion esta congigurada en el archivo: appsettings.json
<!--
"ConnectionStrings": {
  "DefaultConnection": "server=SERVIDOR; database=BASE_DE_DATOS; integrated security=true; trustservercertificate=true"
}
-->

La clase: SeedData.cs, realiza la carga inicial de datos de prueba.

# front-end
Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) versión 19.0.1.
En el caso de que se quiera usar otro puerto, se debe modificar el archivo: proxy.conf.json
<!--
{
  "/api": {
    "target": "https://localhost:7236",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
}
-->

Para los estilos se esta usando tailwindcss
`npm install -D tailwindcss postcss autoprefixer`

El archivo tailwind.config.js, apunta a los archivos de plantilla, por ejemplo: 
<!--
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
-->

# development-server

Ejecute en este orden:
`npm install -g npm`
`npm cache clean --force`
`npm update`
`npm install`

Ejecute `ng serve` para un servidor de desarrollo. Vaya a `http://localhost:4200/`. La aplicación se recargará automáticamente si modifica alguno de los archivos fuente.