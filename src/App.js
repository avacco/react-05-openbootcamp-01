import logo from './logo.svg';
import './App.css';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
// import TasklistComponent from './components/container/tasklist';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <TasklistComponent/> */}
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto/> */}
        <Ejemplo4 nombre='Andres'>
        {/* Todo lo que este dentro sera tratado como props.children */}

        <h3> Contenido de props.children </h3>

        </Ejemplo4>
      </header>

    </div>
  );
}

export default App;
