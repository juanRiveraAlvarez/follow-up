import {Request,Response} from 'express'
import Tareas from '../models/tareas.schema'
import jwt from 'jsonwebtoken' 
import config from '../config/config'

export const tareas = async(req:Request, res:Response)=>{
  if(req.body.token && req.body.correo_usuario && req.body.contrasena_usuario){
    const deco = jwt.verify(req.body.token,config.TOKEN.KEY) 
    if(deco == req.body.contrasena_usuario){
      const resulset = await Tareas.find({"correo_usuario":req.body.correo_usuario})
      res.send(resulset)
    }
  }else{
    res.send('no ha iniciado sesion')
  }
}

export const crear_tarea = async(req:Request, res:Response)=>{
  if(req.body.correo_usuario &&req.body.contrasena_usuario &&  req.body.nombre_tarea && req.body.prioridad_tarea && req.body.fecha_finalizacion_tarea){
    //const deco = jwt.verify(req.body.token,config.TOKEN.KEY) 
    //if(deco == req.body.contrasena_usuario){
      const tarea = new Tareas({
        nombre_tarea: req.body.nombre_tarea,
        prioridad_tarea: req.body.prioridad_tarea,
        fecha_finalizacion_tarea: req.body.fecha_finalizacion_tarea,
        correo_usuario: req.body.correo_usuario
      })      
      await tarea.save()
      res.send('guardado')
    //}else{
     // res.send('error token')
    //} 
  }else{
    res.send('no ha iniciado sesion')
  }
}

