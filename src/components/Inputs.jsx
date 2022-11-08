import React , { useState }from "react";



const Inputs = () => {

    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
    })

    const validacion = (e) => {
        e.preventDefault()
        if(user.nombre.length > 4 && user.apellido.length > 2){
            alert('Capo')
        }
    }


  return (
    <div className="Inputs">
      <form onSubmit={validacion} >
        Nombre: 
        <input type="text" onChange={(e) => setUser({...user, nombre: e.target.value})}/>
        Apellido: 
        <input type="text" onChange={(e) => setUser({...user, apellido: e.target.value})}/>
        <br />
        <h2>{user.nombre}</h2>
        <h2>{user.apellido}</h2>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Inputs;
