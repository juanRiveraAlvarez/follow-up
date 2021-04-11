"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tiempoSchema = new mongoose_1.Schema({
    milisegundos_tiempo: {
        type: String,
        unique: false,
        required: true,
        lowercase: true,
        trim: true
    },
    fecha_exacta_tiempo: {
        type: String,
        unique: false,
        required: true,
        lowercase: true,
        trim: true
    },
    dias_tiempo: {
        type: String,
        unique: false,
        required: true,
        lowercase: true,
        trim: true
    },
    id_tarea: {
        type: String,
        unique: false,
        required: true,
        lowercase: true,
        trim: true
    },
    correo_usuario: {
        type: String,
        unique: false,
        required: true,
        lowercase: true,
        trim: true
    }
});
exports.default = mongoose_1.model('tiempo', tiempoSchema);
