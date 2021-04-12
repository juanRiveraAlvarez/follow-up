import './database';
import express from 'express'
import passport from 'passport'
import cors from 'cors';
import morgan from 'morgan';
import {registrar,ingresar} from './routes/usuarios'
import {tareas,crear_tarea, eliminar_tarea} from './routes/tareas'
import {guardar_tiempo,obtener_tiempo} from './routes/tiempo'
const app = express();

// settings
app.set('port',4000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());

//rutas
app.get('/', (req, res) => {
  return res.send(`The API is at http://localhost:${app.get('port')}`);
})
app.use('/registrar',registrar)
app.use('/ingresar',ingresar)
app.use('/tareas',tareas)
app.use('/crear_tarea',crear_tarea)
app.use('/guardar_tiempo',guardar_tiempo)
app.use('/eliminar_tarea',eliminar_tarea)
app.use('/obtener_tiempo',obtener_tiempo)

app.listen(app.get('port'));
console.log(`Listening on http://localhost:${app.get('port')}`);
