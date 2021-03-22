import React from 'react'
import NavBar from '../components/navbar.jsx'
import Grafica from '../components/Grafica.jsx'
import {Form,Button} from 'react-bootstrap'

function Contabilizar(){
  return(
    <div>
      <NavBar/>
      <Grafica lunes='5' martes='3' miercoles='10' jueves='6' viernes='8' sabado='8' domingo='1'/>
      <Form className='formulario'>
        <Button className="insertar" variant="primary">insertar</Button>
        <Button className="cancelar" variant="danger">Cancelar</Button>
      </Form>
    </div>
  )
}

export default Contabilizar
