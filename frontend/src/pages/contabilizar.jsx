import React,{useState} from 'react'
import NavBar from '../components/navbar.jsx'
import Grafica from '../components/Grafica.jsx'
import {Form,Button} from 'react-bootstrap'

function Contabilizar(){

  const[inicio,setInicio] = useState(Date.now())
  const[fin,setFin] = useState(Date.now())
  const[tiempo,setTiempo] = useState(Date.now())

  const contabilizar = (event)=>{
    event.preventDefault()
    let hora = Date.now()
    setInicio(hora)
    console.log(inicio)
  }

  const parar = (event)=>{
    event.preventDefault()
    let hora = Date.now()
    setFin(hora)
    console.log(fin)
    console.log(fin-inicio)
  }

  return(
    <div>
    <NavBar/>
    <Grafica lunes='5' martes={((tiempo/1000)/60)/60} miercoles='10' jueves='6' viernes='8' sabado='8' domingo='1'/>
    <Form className='formulario'>
    <Button onClick={contabilizar} className="contabilizar" variant="primary">Contabilizar</Button>
    <Button onClick={parar} className="cancelar" variant="danger">Parar</Button>
    </Form>
    </div>
  )
}

export default Contabilizar
