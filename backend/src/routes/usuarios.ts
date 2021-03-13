import {Request,Response} from 'express'
import Usuarios from '../models/usuarios.schema'

export const registrar = async(req:Request, res:Response)=>{
  console.log(req.body)
  if(req.body.correo_usuario && req.body.contrasena_usuario && req.body.nombre_usuario){
    const usuario = new Usuarios(req.body)
    await usuario.save()
    res.send('registrado')
  }else{
    res.send('no')
  }
}

export const ingresar = async(req:Request, res:Response):Promise<void> =>{
  if(req.body.correo_usuario && req.body.contrasena_usuario && req.body.nombre_usuario){
    const resulset = await Usuarios.find({"correo_usuario":req.body.correo_usuario})
    res.send(resulset)
  }
}

