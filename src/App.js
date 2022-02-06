import { useReducer, useState } from "react";
import Grilla from "./components/Grilla";
import { puntacionReducer } from "./reducers/puntuacionReducer";
import "./styles/app.css";
import Puntuacion from "./components/Puntuacion";
import { poinstContext } from "./components/context/pointsContext";
import Instrucciones from "./components/Instrucciones";
import Footer from "./components/Footer";
function App() {
  const [puntaje,setPuntaje] = useReducer(puntacionReducer,puntacionReducer());
  return (
    <poinstContext.Provider value={{puntaje,setPuntaje}}>
      <div className="App">
        <h1 className="titulo"><span className="inicial">X</span>Picross</h1>
        <div className="principal">
          <Grilla />
        </div>
        <Puntuacion />
        <Instrucciones/>
        <Footer/>
      </div>
    </poinstContext.Provider>
  );
}

export default App;
