import Conversor from "./components/Conversor"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className="coin">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>

        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>

      <div className="coin">
      <Conversor moedaA="EUR" moedaB="BRL"></Conversor>

      <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
    </div>
  );
}

export default App;
