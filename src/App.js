import Boton from "./componentes/Boton";
import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
          className="freecodecamp-logo"
        />
      </div>
      <div className="contenedor-calculadora">
        <div className="fila">
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;
