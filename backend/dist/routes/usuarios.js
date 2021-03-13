"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingresar = exports.registrar = void 0;
const usuarios_schema_1 = __importDefault(require("../models/usuarios.schema"));
exports.registrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    if (req.body.correo_usuario && req.body.contrasena_usuario && req.body.nombre_usuario) {
        const usuario = new usuarios_schema_1.default(req.body);
        yield usuario.save();
        res.send('registrado');
    }
    else {
        res.send('no');
    }
});
exports.ingresar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.correo_usuario && req.body.contrasena_usuario && req.body.nombre_usuario) {
        const resulset = yield usuarios_schema_1.default.find({ "correo_usuario": req.body.correo_usuario });
        res.send(resulset);
    }
});
