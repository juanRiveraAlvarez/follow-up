import {Router,Request,Response} from 'express'
const usuarios = Router()

export const registrar = (req:Request, res:Response)=>{
  if(req.body.email || req.body.contrasena || req.body.nombre){
    res.send('ingresado')
  }else{
    res.send('no')
  }
}

export const ingresar = (req:Request, res:Response)=>{
  res.send('mundo')
}

