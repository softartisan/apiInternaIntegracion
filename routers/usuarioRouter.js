const express = require('express');
const Usuario = require('../models/usuario');

const router = express.Router();

router.get('/listarclientes', function(req, res) {
  Usuario.listarClientes((err, result) => {
    if(err) return res.send({error: err});
    return res.send(result);
  });
});

router.get('/listararrendadores', function(req, res) {
  Usuario.listarArrendadores((err, result) => {
    if(err) return res.send({error: err});
    return res.send(result);
  });
});

router.get('/leer/:id', function(req, res) {
  Usuario.leerUsuario(id, (err, result) => {
    if(err) return res.send({error: err});
    return res.send(result);
  });
});

module.exports = router;