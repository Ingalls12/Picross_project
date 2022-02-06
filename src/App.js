import { useReducer, useState } from "react";
import Grilla from "./components/Grilla";
import { puntacionReducer } from "./reducers/puntuacionReducer";
import "./styles/app.css";
import Puntuacion from "./components/Puntuacion";
import { poinstContext } from "./components/context/pointsContext";
import Instrucciones from "./components/Instrucciones";
function App() {
  const [puntaje,setPuntaje] = useReducer(puntacionReducer,puntacionReducer());
  return (
    <poinstContext.Provider value={{puntaje,setPuntaje}}>
      <div className="App">
        <h1 className="titulo">Picross</h1>
        <div className="principal">
          <Grilla />
        </div>
        <Puntuacion />
        <Instrucciones/>
      </div>
    </poinstContext.Provider>
  );
}

export default App;
