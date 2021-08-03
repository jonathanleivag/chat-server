# [Chat-server](https://openweathermap.jonathanleivag.cl/)

## javascript

El server de la app [chat-app](https://github.com/jonathanleivag/chat-app)

- [Nodejs](https://nodejs.org/es/)
- javascript
- [express](https://expressjs.com/)
- [Graphql](https://graphql.org/)
- [Apollo server](https://www.apollographql.com/)
- [Socket.io](https://socket.io/)

## Instalación

Chat-server Requiere  
[Node.js](https://nodejs.org/) y
[NPM](https://nodejs.org/)/
[Yarn](https://yarnpkg.com/)

Instale las dependencias y dependencias de desarrollo.

```sh
cd chat-server
yarn o yarn install || npm i o npm install
```

#### Variables de entorno

Cree un archivo en la raíz del proyecto llamado .env con lo siguiente

```sh
PORT=puerto-apollo-server
MONGO_DB=conexión-de-mongodb
KEY_JWT=key-random-jwt
```

Tiene que crear una base de datos en mongodb puedes utilizar [mongo atlas](https://www.mongodb.com/es/cloud/atlas) con una cluster free o descarga [mongodb server](https://www.mongodb.com/try/download/community)

## Comandos

Tiene un listado de comando para realizar

| Comandos   | Descripción                                          |
| ---------- | ---------------------------------------------------- |
| yarn dev   | servidor en modo desarrollo                          |
| yarn build | Crear los archivos necesario para producción (./lib) |
| yarn start | Servidor en producción                               |

## License

Usar este programas para aprender, no lo utilice como un servidor para un chat.
MIT

**Free Software, Hell Yeah!**
