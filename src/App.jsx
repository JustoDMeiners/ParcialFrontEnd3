import { useState } from "react";
import "./App.css";
import Card from "./components/Listado";
import Listado from './components/Listado'
import  "./index.css"
import Inputs from './components/Inputs'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form></form>
      <Card />
      <Inputs />
    </div>  
  );
}

export default App;
