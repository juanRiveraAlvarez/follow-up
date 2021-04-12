import React, {useState,useEffect} from 'react'
import axios from "axios";
import config from "../config/config";
import NavBar from '../components/navbar.jsx'
import Grafica from '../components/Grafica.jsx'
import {Button, Table} from 'react-bootstrap'
import '../styles/contabilizar.css'
import cookie from 'universal-cookie'

function Contabilizar() {

    const cookies = new cookie()

    const [inicio, setInicio] = useState(0)
    const [fin, setFin] = useState(0)
    const [milisegundos_tiempo, setSegundos] = useState(0)
    const [usado, changeUsado] = useState(false)
    const [contando, setContando] = useState('No')
    const [fecha_exacta_tiempo, setFecha_exacta] = useState()
    const [dias_tiempo, setDia] = useState()

    const contar = async () => {
        const dias = [
            'domingo',
            'lunes',
            'martes',
            'miércoles',
            'jueves',
            'viernes',
            'sábado',
        ];
        changeUsado(true)
        if (usado == false) {
            setInicio(new Date().getTime() / 1000)
            setContando('Si')
            setDia(dias[new Date().getDay()])
            setFecha_exacta(new Date().toDateString())
        }
    }

    const parar = async (_id) => {
        setFin(Date.now())
        changeUsado(false)
        if (usado == true) {
            setContando('No')
            setFin(new Date().getTime() / 1000)
            setSegundos(inicio - fin)
            const {data} = axios.post(config.SERVER.URL + 'guardar_tiempo', {
                milisegundos_tiempo,
                fecha_exacta_tiempo,
                dias_tiempo,
                id_tarea: cookies.get('_id'),
                correo_usuario: cookies.get('correo_usuario')
            })
        }
    }

    return (
        <div>
            <NavBar/>
            <div className="titulo">
                <h3>Tiempo Invertido en tareas</h3>
            </div>
            <div className="tabla">
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Dias</th>
                        <th>Horas</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Lunes</td>
                        <td>Mark</td>
                    </tr>
                    <tr>
                        <td>Martes</td>
                        <td>Jacob</td>
                    </tr>
                    <tr>
                        <td>Miercoles</td>
                        <td colSpan="2">Larry the Bird</td>
                    </tr>
                    <tr>
                        <td>Jueves</td>
                        <td colSpan="2">Larry the Bird</td>
                    </tr>
                    <tr>
                        <td>Viernes</td>
                        <td colSpan="2">Larry the Bird</td>
                    </tr>
                    <tr>
                        <td>Sabado</td>
                        <td colSpan="2">Larry the Bird</td>
                    </tr>
                    <tr>
                        <td>Domingo</td>
                        <td colSpan="2">Larry the Bird</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <div className="contar">
                <Button onClick={contar}>Contar</Button>
            </div>
            <div className="parar">
                <Button onClick={parar} variant="danger">Parar</Button>
            </div>
            <div className="aviso">
                <h4>Contando: {contando}</h4>
            </div>
            <Grafica/>
        </div>
    )
}

export default Contabilizar
