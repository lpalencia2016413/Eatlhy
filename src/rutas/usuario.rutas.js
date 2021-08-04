'use strict'
var express = require("express");
var usuarioControlador = require("../controladores/usuarios.controlador");
var md_autorizacion = require("../middlewares/authenticated");
var api = express.Router();

api.post("/agregarUsuario", usuarioControlador.agregarUsuario);
api.post("/login", usuarioControlador.login);
api.delete('/eliminarUsuario', md_autorizacion.ensureAuth, usuarioControlador.eliminarUsuario);
api.put('/editarUsuario', md_autorizacion.ensureAuth, usuarioControlador.editarUsuario);
api.get('/obtenerUsuarios', md_autorizacion.ensureAuth ,usuarioControlador.obtenerUsuarios);
api.get('/obtenerUsuario/:id', md_autorizacion.ensureAuth ,usuarioControlador.obtenerUsuario);
module.exports = api;