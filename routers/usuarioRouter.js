const express = require('express');
const usuario = require('../models/usuario');

const router = express.Router();

router.get('/listarClientes', function(req, res) {
  usuario.listarClientes((err, result) => {
    if(err) return res.send({error: err});
    return res.send(result);
  })
})

router.get('/listarArrendadores', function(req, res) {
  usuario.listarArrendadores((err, result) => {
    if(err) return res.send({error: err});
    return res.send(result);
  })
})

router.get('/leer/:id', function(req, res) {
  const id = req.params.id;
  usuario.leerUsuario(id, (err, result) => {
    if(err) return res.send({error: err});
    return res.send(result);
  })
})

router.post('/crearArrendador', function(req, res) {
  const username = req.query.username;
  const password = req.query.password;
  const email = req.query.email;
  const nombre = req.query.nombre;
  const apellido = req.query.apellido;
  const telefono = req.query.telefono;
  usuario.crearArrendador(username,password,email,nombre,apellido,telefono, (err, result) => {
    if(err) return res.send({error: err});
    return res.send(result);
  })
})

// username=cheche&password=123xdxdxd&email=cheche@gmail.com&nombre=Fransisco&apellido=Goyeneche&telefono=133
router.post('/crearCliente', function(req, res) {
  const username = req.query.username;
  const password = req.query.password;
  const email = req.query.email;
  const nombre = req.query.nombre;
  const apellido = req.query.apellido;
  const telefono = req.query.telefono;
  console.log(username);
  usuario.crearCliente(username,password,email,nombre,apellido,telefono, (err, result) => {
    if(err) return res.send({error: err});
    return res.send(result);
  })
})

router.delete('/eliminar/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  usuario.eliminarUsuario(id, (err, result) => {
    if(err) return res.send({error: err});
    return res.send(result);
  });
})

router.patch('/habilitar/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  usuario.habilitarUsuario(id, (err, result) => {
    if(err) return res.send({error: err});
    return res.send(result);
  });
})

router.patch('/deshabilitar/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  usuario.deshabilitarUsuario(id, (err, result) => {
    if(err) return res.send({error: err});
    return res.send(result);
  });
})

module.exports = router;