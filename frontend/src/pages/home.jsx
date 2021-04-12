import React ,{useState,useEffect} from 'react'
import cookie from 'universal-cookie'
import axios from 'axios'
import config from '../config/config'
import {Row,Card} from 'react-bootstrap'
import '../styles/home.css'
import NavBar from '../components/navbar.jsx'

function Home(){

  const cookies = new cookie()

  const[arreglo,setArreglo]=useState([])

  const contabilizar = (_id)=>{
    cookies.set('_id',_id)
    window.location.href='/contabilizar'
  }

  const eliminar = async(_id)=>{
    const {data} = await axios.post(config.SERVER.URL+'eliminar_tarea',{
      _id
    })
    if(!data=='eliminado'){
      alert('ERROR')
    }
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
    <NavBar/>
    <Row className='columna'>
        {arreglo.map(e=>
          <Card style={{ width: '20rem' }} className='targeta'>
            <Card.Body>
              <Card.Title>{e.nombre_tarea}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">prioridad: {e.prioridad_tarea}</Card.Subtitle>
              <Card.Text>
                {e.descripcion_tarea}
              </Card.Text>
              <Card.Text>
                {e.fecha_finalizacion_tarea}
              </Card.Text>
              <Card.Link onClick={()=>{contabilizar(e._id)}}>contabilizar</Card.Link>
              <Card.Link onClick={()=>{eliminar(e._id)}} href="#">eliminar</Card.Link>
            </Card.Body>
          </Card> 
        )}
      </Row>
    </div>
  )
}

export default Home
