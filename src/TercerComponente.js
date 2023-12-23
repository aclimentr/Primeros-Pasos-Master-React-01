import React from 'react'
import PropTypes from 'prop-types';

const TercerComponente = ({nombre, apellido, ficha}) => {

    console.log(nombre, apellido, ficha)

  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.estado}</li>
            <li></li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

TercerComponente.defaultProps = {
    nombre: "DefaultName",
    apellido: "DefaultSurname"
}


export default TercerComponente
