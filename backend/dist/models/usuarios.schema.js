"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    nombre_usuario: {
        type: String,
        unique: false,
        required: true,
        lowercase: true,
        trim: true
    },
    correo_usuario: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    contrasena_usuario: {
        type: String,
        required: true,
    }
});
exports.default = mongoose_1.model('usuarios', userSchema);
