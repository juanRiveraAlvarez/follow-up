import {model,Schema,Document} from 'mongoose'

export interface IUtiempo extends Document{
  milisegundos_tiempo:string
  dias_tiempo:string
  id_tarea:string
  correo_usuario:string
}

const tiempoSchema = new Schema({
  milisegundos_tiempo:{   
    type:String,
    unique:false,
    required:true,
    lowercase:true,
    trim:true
  },
  dias_tiempo:{   
    type:String,
    unique:false,
    required:true,
    lowercase:true,
    trim:true
  },
  id_tarea:{   
    type:String,
    unique:false,
    required:true,
    lowercase:true,
    trim:true
  },
  correo_usuario:{   
    type:String,
    unique:false,
    required:true,
    lowercase:true,
    trim:true
  }
})

export default model<IUtiempo>('tiempo',tiempoSchema)
