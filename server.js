// server.js

const jayson = require("jayson");
const { registrarMetodos } = require("./metodos/usuarios");

// Creamos un objeto vacío para registrar métodos
const metodos = {};

// Registramos todos los métodos definidos en usuarios.js
registrarMetodos(metodos);

// Creamos el servidor JSON-RPC con los métodos registrados
const server = new jayson.Server(metodos);

// Iniciamos el servidor en el puerto 3000
server.http().listen(3000, () => {
console.log("Servidor JSON-RPC corriendo en http://localhost:3000");
});
