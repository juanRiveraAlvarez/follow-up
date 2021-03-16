import React,{useEffect, useState} from 'react'
import Plot from 'react-plotly.js'

function Grafica(){
  
  const[data,setData] = useState()
  const[layaut,setLayaut] = useState()

  const datos = ()=>{
    setData(
      {
          x: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domigno'],
          y: [2, 6, 3, 4, 7,5,1],
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
