# BitPress
Bienvenido a nuestro proyecto BitPress fullstack el proyecto se trata de una aplicación web de gestión de noticias con sistema de usuarios y roles, los usuarios podrán acceder con sesiones encriptadas y tendrán dos roles: administrador y usuario estándar. El proyecto tiene como objetivo proporcionar una plataforma donde los usuarios puedan interactuar con noticias, ya sea consultándolas como usuarios estándar o gestionándolas como administradores.

-**ESTRUCTURA DEL PROYECTO**
- **TECNOLOGÍAS**
- **INSTALACIÓN**
- **DESARROLLADORAS**

Estructura DEL ROYECTO 
PÁGINA PRINCIPAL-
-La página de inicio tiene una estructura básica pero visualmente atractiva,con las opiones de regiter y login ubicados en la parte izquierda en el que segun seas admi o users te redirigira a tus opciones.

FOTOS DEL REGISTER Y LOGIN 


## TECNOLOGIAS 
- React
- Typescrit
- Jest 
- Node
- Express
- Mysql 
- Visual Studio Code
- Github
- CSS
- JSON Server


## INSTALACIÓN ENTORNO TEST CON NODE Y TYPESCRIPT
-npm init -y
-npm i -D jest ts-jest supertest @types/jest
-npx ts-jest config:init

el comando anterior crea este archivo 📄 jest.config.js 👇 que podemos
modificar en función de nuestras necesidades, abajo te indico con ✏ las líneas
extra


/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
 preset: 'ts-jest',
 testEnvironment: 'node',
✏testMatch: ["**/**/*.test.ts"], //si no tenemos carpeta de 
✏verbose: false,
✏forceExit: true,

el comando anterior crea este archivo 📄 jest.config.js 👇 que podemos
modificar en función de nuestras necesidades, abajo te indico con ✏ las líneas
extra

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
 preset: 'ts-jest',
 testEnvironment: 'node',
 testMatch: ["**/**/*.test.ts"], // Si no tenemos carpeta de 
 verbose: false,
 forceExit: true,
};

En nuestro caso lo dejaremos asi ☝

vamos a crear nuestro Script de test npm run test
📄 package.json
 "test": "jest --detectOpenHandles --silent --verbose"
4️⃣creamos la carpeta de 📂 __test__
y ahora a testeeea




