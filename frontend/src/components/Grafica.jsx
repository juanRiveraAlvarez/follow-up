import React,{useEffect, useState} from 'react'
import Plot from 'react-plotly.js'

function Grafica(props){
  
  const[data,setData] = useState()
  const[layaut,setLayaut] = useState()

  const datos = (event)=>{
    setData(
      {
          x: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domigno'],
          y: [props.lunes, props.martes, props.miercoles, props.jueves, props.viernes, props.sabado, props.domingo],
          type: 'bar'
      }
    )
    setLayaut('Horas de trabajo diario')
  }

  useEffect(()=>{
    datos()
  })

  return(
    <div>
      <Plot
        data={[data]}
        layout={{title:layaut}}
       /> 
    </div>
  )
}

export default Grafica
