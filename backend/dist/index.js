"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./database");
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const usuarios_1 = require("./routes/usuarios");
const tareas_1 = require("./routes/tareas");
const tiempo_1 = require("./routes/tiempo");
const app = express_1.default();
// settings
app.set('port', 4000);
// middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
//rutas
app.get('/', (req, res) => {
    return res.send(`The API is at http://localhost:${app.get('port')}`);
});
app.use('/registrar', usuarios_1.registrar);
app.use('/ingresar', usuarios_1.ingresar);
app.use('/tareas', tareas_1.tareas);
app.use('/crear_tarea', tareas_1.crear_tarea);
app.use('/guardar_tiempo', tiempo_1.guardar_tiempo);
app.use('/eliminar_tarea', tareas_1.eliminar_tarea);
app.listen(app.get('port'));
console.log(`Listening on http://localhost:${app.get('port')}`);
