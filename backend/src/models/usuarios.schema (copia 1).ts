import {model,Schema,Document} from 'mongoose'

export interface IUusuarios extends Document{
  nombre_usuario:string
  correo_usuario:string
  contrasena_usuario:string
}

const userSchema = new Schema({
  nombre_usuario:{
    type:String,
    unique:false,
    required:true,
    lowercase:true,
    trim:true
  },
  correo_usuario:{
    type:String,
    unique:true,
    required:true,
    trim:true
  },
  contrasena_usuario:{
    type:String,
    required:true,
  }
})


export default model<IUusuarios>('usuarios',userSchema)
