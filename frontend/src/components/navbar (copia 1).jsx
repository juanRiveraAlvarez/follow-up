import React,{useEffect} from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import cookie from 'universal-cookie'

function NavBar(){

  const cookies = new cookie()
 
  const cerrar_sesion = ()=>{
    cookies.remove('token')
    cookies.remove('correo_usuario')
    cookies.remove('contrasena_usuario')
    window.location.href='/'
  }

  useEffect(async()=>{ 
    if(!cookies.get('token')||!cookies.get('correo_usuario')||!cookies.get('contrasena_usuario')){
      window.location.href='/'
    }
  })

    return(
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/home">Follow-Up</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/crear">Agregar Tarea</Nav.Link>
        <Nav.Link onClick={cerrar_sesion}>Cerrar Sesion</Nav.Link>
        </Nav>
      </Navbar>
  )
}

export default NavBar

