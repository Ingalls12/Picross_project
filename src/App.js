import { useReducer, useState } from "react";
import Grilla from "./components/Grilla";
import { puntacionReducer } from "./reducers/puntuacionReducer";
import "./styles/app.css";
import Puntuacion from "./components/Puntuacion";
function App() {
  const [puntaje,setPunaje] = useReducer(puntacionReducer,puntacionReducer())
  const [puntos,setPuntos] = useState(puntaje)
  return (
    <div className="App">
      <h1>Picross</h1>
      <div className="principal">
        <Grilla />
      </div>
      <Puntuacion puntaje = {puntos}/>
    </div>
  );
}

export default App;
