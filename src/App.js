import Grilla from "./components/Grilla";
import {random_list} from "./funciones/getRandomArray";
import "./styles/app.css"
function App() {
  const lista = random_list()
  return (
    <div className="App">
      <h1>Picross</h1>
      <div className="principal">
        <Grilla lista = {lista}/>
      </div>
     
    </div>
  );
}

export default App;
