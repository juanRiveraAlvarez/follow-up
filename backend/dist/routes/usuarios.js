"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingresar = exports.registrar = void 0;
const express_1 = require("express");
const usuarios = express_1.Router();
exports.registrar = (req, res) => {
    if (req.body.email || req.body.contrasena || req.body.nombre) {
        res.send('ingresado');
    }
    else {
        res.send('no');
    }
};
exports.ingresar = (req, res) => {
    res.send('mundo');
};
