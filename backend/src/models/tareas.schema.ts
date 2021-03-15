import {model,Schema,Document} from 'mongoose'

export interface IUtareas extends Document{
  nombre_tarea:string
  prioridad_tarea:string
  fecha_finalizacion_tarea:string
  correo_usuario:string
}

const tareasSchema = new Schema({
  nombre_tarea:{
    type:String,
    unique:false,
    required:true,
    lowercase:true,
    trim:true
  },
  prioridad_tarea:{
    type:String,
    unique:false,
    required:true,
    lowercase:true,
    trim:true
  },
  fecha_finalizacion_tarea:{
    type:String,
    unique:false,
    required:true,
    lowercase:true,
    trim:true
  },
  participantes_tarea:{
    correo_usuario:{
      type:String,
      unique:false,
      required:false,
      lowercase:true,
      trim:true
    }
  },
  
  correo_usuario:{
    type:String,
    required:true,
    trim:false
  }
})

export default model<IUtareas>('tarea',tareasSchema)
