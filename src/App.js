import logo from './logo.svg';
import './App.css';
import Saludo from './componentes/clase/saludo';
import SaludoFuncional from './componentes/funcional/saludoFuncional';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludo nombre="Andres"/>
        <SaludoFuncional nombre="Andres"/>
      </header>
    </div>
  );
}

export default App;
