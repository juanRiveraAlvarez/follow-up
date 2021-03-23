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
exports.guardar_tiempo = void 0;
const config_1 = __importDefault(require("../config/config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tiempo_schema_1 = __importDefault(require("../models/tiempo.schema"));
exports.guardar_tiempo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.milisegundos_tiempo && req.body.dias_tiempo && req.body.id_tarea && req.body.correo_usuario && req.body.contrasena_usuario) {
        const deco = jsonwebtoken_1.default.verify(req.body.token, config_1.default.TOKEN.KEY);
        if (deco) {
            const tiempo = new tiempo_schema_1.default({
                milisegundos_tiempo: req.body.milisegundos_tiempo,
                dias_tiempo: req.body.dias_tiempo,
                id_tarea: req.body.id_tarea,
                correo_usuario: req.body.correo_usuario
            });
            yield tiempo.save();
            res.send('registrado');
        }
        else {
            res.send('no ha iniciado sesion');
        }
    }
    else {
        res.send('no');
    }
});
