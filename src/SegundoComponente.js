import React from 'react'

const SegundoComponente = () => {

    const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];
    // const libros = [];

  return (
    <div className='segundo-componente'>
        <h1>Listado de libros:</h1>

    {libros.length >= 1 ? 
    (<ul>
          { 
            libros.map((libro, index) => {
              return <li key={index}>{libro}</li>;
              })
          }
      </ul>)
      : <p>No hay libros disponibles</p>
    }
    </div>
  )
}

export default SegundoComponente
