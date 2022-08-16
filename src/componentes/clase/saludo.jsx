import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Saludo extends Component {
  /* Utiliza un constructor para definir estados */
  constructor(props){
    super(props);
    this.state = {
      edad : 25
    }
  }
  
  render() {
    return (
      <div>
        <h1>
          Hola {this.props.nombre} desde componente de clase {/* Recibe la propiedad 'nombre' desde App.js */}
        </h1>
        <h2>
          Tu edad es de: {this.state.edad} {/* 'edad' fue definido en el constructor */}
        </h2>
        <div>
          <button onClick={this.cumple}> {/* Asigna una funcion al boton */}
            Cumplir años
          </button>
        </div>
      </div>
    );
  }
 
  /* Utiliza una funcion flecha para controlar el estado de edad. Esta es por el click del boton */
  cumple = () => {
    /* Se debe utilizar setState para los cambios de estado, de lo contrario, aunque los cambios se registren, no se mostrarán */
    this.setState((prevState) => (
      {
        edad : prevState.edad + 1
      }
    ))
  }
}

/* Define el tipo de dato para la propiedad nombre */
Saludo.propTypes = {
  nombre : PropTypes.string,
};


export default Saludo;
