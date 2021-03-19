import React ,{useState,useEffect} from 'react'
import cookie from 'universal-cookie'
import axios from 'axios'
import config from '../config/config'
import {Row} from 'react-bootstrap'

function Home(){

  const cookies = new cookie()

  const[arreglo,setArreglo]=useState()

   let datos = []

  useEffect(async()=>{
    if(!cookies.get('token')||!cookies.get('correo_usuario')||!cookies.get('contrasena_usuario')){
      window.location.href='/'
    }else{
      alert(cookies.get('token'))
      const {data} = await axios.post(config.SERVER.URL+'tareas',{
        token:cookies.get('token'),
        correo_usuario:cookies.get('correo_usuario'),
        contrasena_usuario:cookies.get('contrasena_usuario')
      })
      console.log(data)
      datos = data
      console.log(datos)
      datos.map((e)=>{console.log((e.nombre_tarea))})
      setArreglo(data)
      console.log(arreglo[0].nombre_tarea)
    }
  }, [])

  return(
    <div>
      <div>
        <p>Hola mundo</p>
        <Row>{
          arreglo.map(e=><p key={e}>{e.nombre_tarea}</p>)
        }</Row>
      </div>
    </div>
  )
}

export default Home
