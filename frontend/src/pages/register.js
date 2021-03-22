import React, {useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import config from '../config/config'
import axios from 'axios'

function Register(){

  const[correo_usuario,setCorreo] = useState()
  const[contrasena_usuario,setContrasena] = useState()
  const[contrasena_usuario2,setContrasena2] = useState()
  const[nombre_usuario,setNombre] = useState()

  const validar = async (event)=>{
    event.preventDefault()
    if(correo_usuario && contrasena_usuario && nombre_usuario){
      if(contrasena_usuario2 === contrasena_usuario){
        const {data} = await axios.post(config.SERVER.URL+'registrar',{
          correo_usuario,
          contrasena_usuario,
          nombre_usuario
        })
        if(data === 'Correo ya existe'){ 
          alert(data)
        }else if(data === 'registrado'){
          alert('Registrado')
          window.location='/'
        }
      }else{
        alert('las contraseñas no coinciden')
      }
    }else{
      alert('faltan datos')
    }
  }

  return(
    <div>
      <h2 className="Titulo">Registrar</h2>
      <Form className="Caja">
        <Form.Group controlId="">
          <Form.Label>Nombre</Form.Label>
          <Form.Control onChange={(e)=>{setNombre(e.target.value)}} type="text" placeholder="Ingrese su correo" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control onChange={(e)=>{setCorreo(e.target.value)}} type="email" placeholder="Ingrese su correo" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control onChange={(e)=>{setContrasena(e.target.value)}} type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label> Confirmar Contraseña</Form.Label>
          <Form.Control onChange={(e)=>{setContrasena2(e.target.value)}} type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button onClick={validar} id="register" variant="primary" type="submit">
          Registrar 
        </Button>
      </Form>
    </div>
  )
}

export default Register
