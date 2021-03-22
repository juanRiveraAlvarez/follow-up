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
exports.actualizar_tarea = exports.crear_tarea = exports.tareas = void 0;
const tareas_schema_1 = __importDefault(require("../models/tareas.schema"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
exports.tareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('hola');
    if (req.body.token && req.body.correo_usuario && req.body.contrasena_usuario) {
        const deco = jsonwebtoken_1.default.verify(req.body.token, config_1.default.TOKEN.KEY);
        console.log(deco);
        if (deco) {
            const resulset = yield tareas_schema_1.default.find({ "correo_usuario": req.body.correo_usuario });
            res.send(resulset);
            console.log('envido');
        }
    }
    else {
        res.send('no ha iniciado sesion');
    }
});
exports.crear_tarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.correo_usuario && req.body.contrasena_usuario && req.body.nombre_tarea && req.body.prioridad_tarea && req.body.descripcion_tarea && req.body.fecha_finalizacion_tarea) {
        const deco = jsonwebtoken_1.default.verify(req.body.token, config_1.default.TOKEN.KEY);
        if (deco) {
            console.log('entro');
            const tarea = new tareas_schema_1.default({
                nombre_tarea: req.body.nombre_tarea,
                prioridad_tarea: req.body.prioridad_tarea,
                fecha_finalizacion_tarea: req.body.fecha_finalizacion_tarea,
                descripcion_tarea: req.body.descripcion_tarea,
                correo_usuario: req.body.correo_usuario
            });
            yield tarea.save();
            res.send('guardado');
        }
        else {
            res.send('error token');
        }
    }
    else {
        res.send('no ha iniciado sesion');
    }
});
exports.actualizar_tarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.correo_usuario && req.body.contrasena_usuario && req.body.nombre_tarea && req.body.prioridad_tarea && req.body.fecha_finalizacion_tarea) {
        const resulset = yield tareas_schema_1.default.findOneAndUpdate({ "": req.body.correo_usuario }, {
            nombre_tarea: req.body.nombre_tarea,
            prioridad_tarea: req.body.prioridad_tarea,
            fecha_finalizacion_tarea: req.body.fecha_finalizacion_tarea
        });
    }
});
