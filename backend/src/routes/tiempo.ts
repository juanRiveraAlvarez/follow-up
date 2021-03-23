import {Request,Response} from 'express'
import config from '../config/config'
import jwt from 'jsonwebtoken' 
import Tiempo from '../models/tiempo.schema'


export const guardar_tiempo = async(req:Request, res:Response)=>{
  if(req.body.milisegundos_tiempo && req.body.dias_tiempo && req.body.id_tarea && req.body.correo_usuario && req.body.contrasena_usuario){
    const deco = jwt.verify(req.body.token,config.TOKEN.KEY) 
    if(deco){
      const tiempo = new Tiempo({
        milisegundos_tiempo: req.body.milisegundos_tiempo,
        dias_tiempo: req.body.dias_tiempo,
        id_tarea: req.body.id_tarea,
        correo_usuario: req.body.correo_usuario
      })         
      await tiempo.save()
      res.send('registrado')
    }else{
      res.send('no ha iniciado sesion')
    }
  }else{
    res.send('no')
  }
}
