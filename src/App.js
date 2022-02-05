import { useReducer } from "react";
import Grilla from "./components/Grilla";
import { listaReducer } from "./reducers/arrReducer";
import "./styles/app.css";

function App() {
  const [arreglo, arregloDispatcher] = useReducer(listaReducer,listaReducer())
  const respuesta =()=>arregloDispatcher({type:"NEW"})

  console.log(respuesta)
  console.log(arreglo);
  return (
    <div className="App">
      <h1>Picross</h1>
      <div className="principal">
        <Grilla lista = {arreglo.list}/>
      </div>
     
    </div>
  );
}

export default App;
