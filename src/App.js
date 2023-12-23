import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SegundoComponente from './SegundoComponente';
import TercerComponente from './TercerComponente';

let ficha_medica = {
  nombre: 'Alvaro',
  apellido: 'Climent',
  estado: 'bueno',
  direccion: {
    calle: 'acamar',
    numero: 69,
    ciudad: 'Madrid'
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react
        </p>
        {/* Cargar mi primer componente */}
      <div className="componentes">
          <hr/>
          <TercerComponente nombre="Alvaro" apellido ="Climent" ficha={ficha_medica}/>
          <hr/>
          <SegundoComponente/>
          <hr/>
          <MiComponente />
      </div>
     
      </header>
    </div>
  );
}

export default App;
