import React, {useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import config from '../config/config'
import cookie from 'universal-cookie'
import '../styles/Login.css'
 
function Login(){

  const[correo_usuario,setCorreo] = useState()
  const[contrasena_usuario,setContrasena] = useState()
  const cookies = new cookie()
 
  const validar = async (event)=>{
    event.preventDefault()
    if(correo_usuario && contrasena_usuario){
      const {data} = await axios.post(config.SERVER.URL+'ingresar',{
        correo_usuario,
        contrasena_usuario
      })
      if(data.token){
        cookies.set('token',data.token)
        cookies.set('correo_usuario',correo_usuario)
        cookies.set('contrasena_usuario',contrasena_usuario)
        window.location='/home' 
        
      }else{
        alert('contraseña o correo incorrectos')
      }
  }else{
    alert('faltan datos')
  }
}
 

  return(
    <div>
      <h2 className="Titulo">Follow-Up</h2>
      <Form className="Caja">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control onChange={(e)=>{setCorreo(e.target.value)}} type="email" placeholder="Ingrese su correo" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control onChange={(e)=>{setContrasena(e.target.value)}} type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button onClick={validar} id="login" variant="primary" type="submit">
          Login
        </Button>
        <Link to="/register">
        <Button id="register" variant="primary" type="submit">
          Register
        </Button>
        </Link>
      </Form>
    </div>
  )
}

export default Login
