import React, { Children } from "react";

const Boton = (props) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ''
      }`.trimEnd()}
    >
      {props.children}
    </div>
  );
};

export default Boton;
