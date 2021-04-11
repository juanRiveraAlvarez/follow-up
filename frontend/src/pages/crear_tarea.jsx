import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import NavBar from '../components/navbar.jsx'
import '../styles/crear.css'
import axios from 'axios'
import config from '../config/config'
import cookies from 'universal-cookie'

function Crear() {

    const cookie = new cookies()

    const [nombre_tarea, setTarea] = useState(0)
    const [prioridad_tarea, setPrioridad] = useState(0)
    const [fecha_finalizacion_tarea, setFecha] = useState(0)
    const [descripcion_tarea, setDescripcion] = useState(0)

    const crear = async (event) => {
        event.preventDefault()
        if (nombre_tarea && prioridad_tarea && fecha_finalizacion_tarea && descripcion_tarea) {
            const {data} = await axios.post(config.SERVER.URL + 'crear_tarea', {
                nombre_tarea,
                prioridad_tarea,
                fecha_finalizacion_tarea,
                descripcion_tarea,
                correo_usuario: cookie.get('correo_usuario'),
                contrasena_usuario: cookie.get('contrasena_usuario'),
                token: cookie.get('token')
            })
            if (data === 'guardado') {
                alert('tarea insertada con exito')
                window.location.href = '/home'
            } else {
                alert('error al insertar')
            }
        } else {
            alert("Faltan datos")
        }
    }

    return (
        <div>
            <NavBar/>
            <Form className='formulario'>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre de la tarea</Form.Label>
                    <Form.Control type="text" required onChange={(e) => {
                        setTarea(e.target.value)
                    }}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Prioridad de la tarea</Form.Label>
                    <select as="select" name="descripcion" onChange={(e) => {
                        setPrioridad(e.target.value)
                    }}>
                        <option value=""></option>
                        <option value="Alta">Alta</option>
                        <option value="Media">Media</option>
                        <option value="Baja">Baja</option>
                    </select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" required onChange={(e) => {
                        setFecha(e.target.value)
                    }}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripcion tarea</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e) => {
                        setDescripcion(e.target.value)
                    }}/>
                </Form.Group>
                <Button className="insertar" onClick={crear} variant="primary">insertar</Button>
                <Button className="cancelar" onClick='/home' variant="danger">Cancelar</Button>
            </Form>
        </div>
    )
}

export default Crear
