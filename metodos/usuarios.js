// metodos/usuarios.js

let usuarios = [];
let idCounter = 1;

function registrarMetodos(metodos) {
  // CREATE
  metodos.crearUsuario = function (args, callback) {
    const { nombre, email } = args;
    const nuevoUsuario = { id: idCounter++, nombre, email };
    usuarios.push(nuevoUsuario);
    callback(null, { mensaje: "Usuario creado con éxito", usuario: nuevoUsuario });
  };

  // READ (todos)
  metodos.obtenerUsuarios = function (args, callback) {
    callback(null, usuarios);
  };

  // READ (por ID)
  metodos.obtenerUsuarioPorId = function (args, callback) {
    const { id } = args;
    const usuario = usuarios.find((u) => u.id === id);
    if (!usuario) {
      callback({ error: `No se encontró un usuario con ID ${id}` });
    } else {
      callback(null, usuario);
    }
  };

  // UPDATE
  metodos.actualizarUsuario = function (args, callback) {
    const { id, nombre, email } = args;
    const usuario = usuarios.find((u) => u.id === id);
    if (!usuario) {
      callback({ error: `No se encontró un usuario con ID ${id}` });
      return;
    }
    if (nombre) usuario.nombre = nombre;
    if (email) usuario.email = email;
    callback(null, { mensaje: "Usuario actualizado con éxito", usuario });
  };

  // DELETE
  metodos.eliminarUsuario = function (args, callback) {
    const { id } = args;
    const index = usuarios.findIndex((u) => u.id === id);
    if (index === -1) {
      callback({ error: `No se encontró un usuario con ID ${id}` });
      return;
    }
    const eliminado = usuarios.splice(index, 1)[0];
    callback(null, { mensaje: "Usuario eliminado con éxito", usuario: eliminado });
  };
}

module.exports = { registrarMetodos };
