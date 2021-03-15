"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tareasSchema = new mongoose_1.Schema({
    nombre_tarea: {
        type: String,
        unique: false,
        required: true,
        lowercase: true,
        trim: true
    },
    prioridad_tarea: {
        type: String,
        unique: false,
        required: true,
        lowercase: true,
        trim: true
    },
    fecha_finalizacion_tarea: {
        type: String,
        unique: false,
        required: true,
        lowercase: true,
        trim: true
    },
    participantes_tarea: {
        correo_usuario: {
            type: String,
            unique: false,
            required: false,
            lowercase: true,
            trim: true
        }
    },
    correo_usuario: {
        type: String,
        required: true,
        trim: false
    }
});
exports.default = mongoose_1.model('tarea', tareasSchema);
