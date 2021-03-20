import React ,{useState,useEffect} from 'react'
import cookie from 'universal-cookie'
import axios from 'axios'
import config from '../config/config'
import {Row,Card,Navbar,Nav} from 'react-bootstrap'
import '../styles/home.css'

function Home(){

  const cookies = new cookie()

  const[arreglo,setArreglo]=useState([])

  const cerrar_sesion = ()=>{
    cookies.remove('token')
    cookies.remove('correo_usuario')
    cookies.remove('contrasena_usuario')
    window.location.reload()
  }

  useEffect(async()=>{ 
    if(!cookies.get('token')||!cookies.get('correo_usuario')||!cookies.get('contrasena_usuario')){
      window.location.href='/'
      }else{ 
        const {data} = await axios.post(config.SERVER.URL+'tareas',{
        token:cookies.get('token'),
        correo_usuario:cookies.get('correo_usuario'),
        contrasena_usuario:cookies.get('contrasena_usuario')
      })
      setArreglo(data)
    }
  }, [])

  return(
    <div>
       <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/home">Follow-Up</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link>Agregar Tarea</Nav.Link>
        <Nav.Link onClick={cerrar_sesion}>Cerrar Sesion</Nav.Link>
        </Nav>
      </Navbar>
    <Row className='columna'>
        {arreglo.map(e=>
          <Card style={{ width: '20rem' }} className='targeta'>
            <Card.Body>
              <Card.Title>{e.nombre_tarea}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">prioridad: {e.prioridad_tarea}</Card.Subtitle>
              <Card.Text>
                {e.descripcion_tarea}
              </Card.Text>
              <Card.Link href="#">editar</Card.Link>
              <Card.Link href="#">contabilizar</Card.Link>
              <Card.Link href="#">eliminar</Card.Link>
            </Card.Body>
          </Card> 
        )}
      </Row>
    </div>
  )
}

export default Home
