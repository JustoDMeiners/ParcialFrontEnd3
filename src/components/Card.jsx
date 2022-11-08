import React, { useState } from 'react'

const Card = ( {alumno} ) => {

  const [borrar, setBorrar] = useState(alumno.legajo.nombre)

  const borrarNombre = () =>{
    setBorrar(alumno.legajo.nombre = "")

    
  }
  
  return (
    <div className='producto'>
      <h2 className='h2'> Nombre: {alumno.legajo.nombre} </h2>
      <h3>Edad: {alumno.legajo.edad}</h3>
      <h3>Materias probadas: {alumno.materiasAprobadas}</h3>
      <button type='button' onClick={borrarNombre}>Borrar nombre</button>
    </div>
  )
}

export default Card