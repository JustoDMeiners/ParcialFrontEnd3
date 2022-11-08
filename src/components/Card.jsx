import React from 'react'

const Card = ( {alumno} ) => {
  
  return (
    <div className='producto'>
      <h2> Nombre: {alumno.legajo.nombre} </h2>
      <h3>Edad: {alumno.legajo.edad}</h3>
      <h3>Materias probadas: {alumno.materiasAprobadas}</h3>
      <button type='button'>Borrar Alumno</button>
    </div>
  )
}

export default Card