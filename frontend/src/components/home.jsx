import React ,{useState,useEffect} from 'react'
import cookie from 'universal-cookie'
import axios from 'axios'
import config from '../config/config'
import {Row,Card,Navbar,Nav} from 'react-bootstrap'
import '../styles/home.css'

function Home(){

  const cookies = new cookie()

  const[arreglo,setArreglo]=useState([])

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
      setArreglo(data)
    }
  }, [])

  return(
    <div>
       <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/home">Follow-Up</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/">Agregar Tarea</Nav.Link>
        <Nav.Link href="/">Cerrar sesion</Nav.Link>
        </Nav>
      </Navbar>
    <Row className='columna'>
        {arreglo.map(e=>
          <Card style={{ width: '20rem' }} className='targeta'>
            <Card.Body>
              <Card.Title>{e.nombre_tarea}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{e.prioridad_tarea}</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card> 
        )}
      </Row>
    </div>
  )
}

export default Home
