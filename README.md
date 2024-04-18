# BitPress :newspaper:

Bienvenido a nuestro proyecto BitPress fullstack el proyecto se trata de una aplicación web de gestión de noticias con sistema de usuarios y roles, los usuarios podrán acceder con sesiones encriptadas y tendrán dos roles: administrador y usuario estándar. El proyecto tiene como objetivo proporcionar una plataforma donde los usuarios puedan interactuar con noticias, ya sea consultándolas como usuarios estándar o gestionándolas como administradores.

## INDICE 

- [ESTRUCTURA DEL PROYECTO](#ESTRUCTURA-DEL-PROYECTO)
- [TECNOLOGÍAS](#TECNOLOGÍAS-UTILIZADAS)
- [DEPENDENCIAS](#DEPENDENCIAS)
- [INSTALACIÓN](#INSTALACIÓN-ENTORNO-TEST-CON-TYPESCRIPT).
- [DOCUMENTACION DE POSTMAN](#DOCUMENTACION-POSTMAN)
- [DESARROLLADORAS](#DESARROLLADORAS)


## ESTRUCTURA DEL PROYECTO 

La página de inicio tiene una estructura básica pero visualmente atractiva,con las opiones de regiter y login ubicados en la parte izquierda en el que según seas admi o users te redirigira a tus opciones.

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


## DEPENDENCIAS
npm install --save-dev @types/bcrypt@^5.0.2 \
@types/bcryptjs@^2.4.6 \
@types/cors@^2.8.17 \
@types/dotenv@^8.2.0 \
@types/jest@^29.5.12 \
@types/jsonwebtoken@^9.0.6 \
@types/node@^20.11.30 \
@types/sequelize@^4.28.20 \
@types/supertest@^6.0.2 \
@types/validator@^13.11.9 \
dotenv@^16.4.5 \
jest@^29.7.0 \
sequelize-typescript@^2.1.6 \
supertest@^6.3.4 \
ts-jest@^29.1.2 \
ts-node-dev@^2.0.0 \
typescript@^5.4.3
´´´

## INSTALACIÓN ENTORNO TEST CON NODE Y TYPESCRIPT
```
npm init -y
npm i -D jest ts-jest supertest @types/jest
npx ts-jest config:init
```

El comando anterior crea este archivo 📄 jest.config.js 👇 que podemos
modificar en función de nuestras necesidades, abajo te indico con ✏ las líneas
extra

```
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/**/*.test.ts"], // Si no tenemos carpeta de 
  verbose: false,
  forceExit: true,
};
```


El comando anterior crea este archivo 📄 jest.config.js 👇 que podemos
modificar en función de nuestras necesidades, abajo te indico con ✏ las líneas
extra
```
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
 preset: 'ts-jest',
 testEnvironment: 'node',
 testMatch: ["**/**/*.test.ts"], // Si no tenemos carpeta de 
 verbose: false,
 forceExit: true,
};
```
En nuestro caso lo dejaremos asi ☝

Vamos a crear nuestro Script de test npm run test
📄 package.json
 "test": "jest --detectOpenHandles --silent --verbose"
4️⃣creamos la carpeta de 📂 __test__
y ahora a testear.


## DOCUMENTACION DE POSTMAN
https://documenter.getpostman.com/view/32563781/2sA3BkbYME


## DESARROLLADORAS 
- Nhoeli (Scrum Master)
- Triana (Product Owner)
- Rebeca (Developer)
- Lucero (Developer)
- Estefania (Developer)
- Andrea (Developer)

