import React, {useState} from 'react'
import NavBar from '../components/navbar.jsx'
import Grafica from '../components/Grafica.jsx'
import {Button, Table} from 'react-bootstrap'
import '../styles/contabilizar.css'

function Contabilizar() {

    const [inicio, setInicio] = useState(0)
    const [fin, setFin] = useState(0)
    const [usado, changeUsado] = useState(false)
    const [contando, setContando] = useState('No')
    const [fecha_exacta,setFecha_exacta] = useState()
    const [dia, setDia] = useState()

    var timer = {
        time: 0,
        now: function(){ return (new Date()).getTime(); },
        start: function(){ this.time = this.now(); },
        since: function(){ return this.now()-this.time; }
    }

    const contar = async () => {
        await setInicio(Date.now())
        changeUsado(true)
        if (usado == false) {
            console.time("t1")
            setInicio(Date.now())
            setContando('Si')
        }
    }

    const parar = async () => {
        const dias = [
            'domingo',
            'lunes',
            'martes',
            'miércoles',
            'jueves',
            'viernes',
            'sábado',
        ];
        const fecha = new Date()
        setDia(dias[fecha.getDay()])
        setFecha_exacta(fecha.toDateString())
        alert(fecha_exacta)
        alert(dia)
        await setFin(Date.now())
        changeUsado(false)
        if (usado == true) {
            setContando('No')
            console.timeEnd("t1",(err,resulset)=>{
                if(err){
                    alert("error")
                }else{
                    alert(resulset)
                }
            })
            setFin(Date.now())
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
