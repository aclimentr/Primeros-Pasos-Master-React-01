import React from 'react'

const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has Dado Click al Botón!" + ' ' + nombre);
    }
    
    function hasDadoDobleClick(e, nombre){
        alert("has dado doble click!"+ ' ' + nombre);
    }

    const hasEntrado = (e, accion) => {
        alert(`Has ${accion}a la caja con el mouse!`);
    }
    
    const estasDentro = e => {
        console.log("Estas dentro del input, mete tu nombre");
    }
    
    const estasFuera = e => {
        console.log("Estas fuera del input, chao");
    }

  return (
    <div>

      <h1>Eventos en React</h1>
        <p>
        {/*Evento click */}
            <button onClick={ e => hasDadoClick(e, "Victor") }>Dame Click!</button>
                {/* <button onClick={(e) => {
                    console.log(e);
                    console.log("Hola, soy un evento click");

                }}>Dame click!</button> */}
        </p>

        <p>
        {/*Evento doble click */}
            <button onDoubleClick={ e => hasDadoDobleClick(e, "Carlos") }>Dame Doble Click!</button>
        </p>

        <div id="caja" 
            onMouseEnter={ e => hasEntrado(e, "entrado")}
            onMouseLeave={ e => hasEntrado(e, "salido") }>
        {/*Evento onMouseEnter onMouseLeave*/}
        Pasa por encima
        </div>

        <p>
            <input type="text" 
            onFocus={ estasDentro }
            onBlur={ estasFuera}
            placeholder="Introduce tu nombre" />
        </p>
    </div>
  )
}

export default EventosComponente
