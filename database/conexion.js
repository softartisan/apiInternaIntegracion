const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'estacionamiento'
});

conexion.connect((err) => {
  if (err) throw err;
});

module.exports = conexion;