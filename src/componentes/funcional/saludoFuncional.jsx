import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SaludoFuncional = (props) => {
/* Utiliza useState para inicializar estados */
  const [edad, setEdad] = useState(25);
  /* Con una funcion flecha para manipular estados */
  const cumple = () => {
    setEdad(edad+1);
  }

  return (
    <div>
    <h1>
      Hola {props.nombre} desde componente funcional {/* Recibe la propiedad 'nombre' desde App.js */}
    </h1>
    <h2>
      Tu edad es de: {edad} {/* 'edad' fue definido a traves de useState */}
    </h2>
    <div>
      <button onClick={cumple}> {/* Asigna una funcion al boton */}
        Cumplir años
      </button>
    </div>
  </div>
  );
};
/* Define el tipo de dato para la propiedad nombre */
SaludoFuncional.propTypes = {
  nombre: PropTypes.string
};

export default SaludoFuncional;