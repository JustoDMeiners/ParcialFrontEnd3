import React from 'react'
import Alumnos from './data.json'
import Card from './Card'


const Listado = () => {
  return (
    <div class="container">
        {Alumnos.map((alumnos) => <Card key= {alumnos.id} alumno={alumnos} /> )}
    
    </div>
  )
}
export default Listado
