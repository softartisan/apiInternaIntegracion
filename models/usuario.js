const conexion = require('../database/conexion');

const listarClientes = (callback) => {
  const consulta = "SELECT * FROM usuario WHERE tipo_usuario = 'cliente'";
  conexion.query(consulta, (err, result) => {
    if (err){
      callback('No se pudieron obtener los clientes', undefined);
    } else if(result.length < 0){
      callback('No existen clientes', undefined);
    } else {
      callback(undefined, result);
    }
  })
}

const listarArrendadores = (callback) => {
  const consulta = "SELECT * FROM usuario WHERE tipo_usuario = 'arrendador'";
  conexion.query(consulta, (err, result) => {
    if (err){
      callback('No se pudieron obtener los arrendadores', undefined);
    } else if(result.length === 0){
      callback('No existen arrendadores', undefined);
    } else {
      callback(undefined, result);
    }
  })
}

const leerUsuario = (id_usuario ,callback) => {
  const consulta = `SELECT * FROM usuario WHERE id_usuario = '${id_usuario}'`;
  conexion.query(consulta, (err, result) => {
    if (err){
      callback('No se pudieron obtener datos del usuario', undefined);
    } else if(result.length === 0){
      callback('No existe el usuario', undefined);
    } else {
      callback(undefined, result);
    }
  })
}

const deshabilitarUsuario = (id_usuario ,callback) => {
  const consulta = `UPDATE usuario SET isenabled_usuario = false WHERE id_usuario = '${id_usuario}'`;
  conexion.query(consulta, (err, result) => {
    if (err){
      callback('No se pudo deshabilitar el usuario', undefined);
    } else {
      callback(undefined, true);
    }
  })
}

const habilitarUsuario = (id_usuario ,callback) => {
  const consulta = `UPDATE usuario SET isenabled_usuario = true WHERE id_usuario = '${id_usuario}'`;
  conexion.query(consulta, (err, result) => {
    if (err){
      callback('No se pudo habilitar el usuario', undefined);
    } else {
      callback(undefined, true);
    }
  })
}

const eliminarUsuario = (id_usuario ,callback) => {
  const consulta = `DELETE FROM usuario WHERE id_usuario = '${id_usuario}'`;
  conexion.query(consulta, (err, result) => {
    if (err){
      callback('No se pudo eliminar el usuario', undefined);
    } else {
      callback(undefined, true);
    }
  })
}

const crearCliente = (username, password, email, nombre, apellido, telefono, callback) => {
  const consulta = `INSERT INTO usuario(username_usuario, password_usuario, email_usuario, nombre_usuario, apellido_usuario, telefono_usuario, tipo_usuario, isenabled_usuario)
                    VALUES('${username}', '${password}', '${email}', '${nombre}', '${apellido}', '${telefono}', 'cliente', true)`;
  conexion.query(consulta, (err, result) => {
    if (err){
      callback('No se pudo crear el cliente', undefined);
    } else {
      callback(undefined, true);
    }
  })

}

const crearArrendador = (username, password, email, nombre, apellido, telefono, callback) => {
  const consulta = `INSERT INTO usuario(username_usuario, password_usuario, email_usuario, nombre_usuario, apellido_usuario, telefono_usuario, tipo_usuario, isenabled_usuario)
                    VALUES('${username}', '${password}', '${email}', '${nombre}', '${apellido}', '${telefono}', 'arrendador', true)`;
  conexion.query(consulta, (err, result) => {
    if (err){
      callback('No se pudo crear el cliente', undefined);
    } else {
      callback(undefined, true);
    }
  })

}


module.exports = {
  listarClientes,
  listarArrendadores,
  leerUsuario,
  crearArrendador,
  crearCliente,
  eliminarUsuario,
  habilitarUsuario,
  deshabilitarUsuario
}



