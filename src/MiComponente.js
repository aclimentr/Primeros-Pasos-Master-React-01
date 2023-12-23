// Importar modulos de react / dependencias

import React from 'react';

// Funcion del componente

const MiComponente = () => {

    let nombre = "Alvaro";
    let web = "alvarocliment.es"; 
    let usuario = {
        nombre: "Alvaro",
        apellido: "Climent",
        web: "alvarocliment.es"
    }

    return (
    <div>
    <hr/>
    <h2>Componente creado</h2>
    <h3>Datos del usuario: </h3>
    <ul>
        <li>Nombre: {nombre}</li>
        <li>Web: <strong>{web}</strong></li>
        <li>Apellido: {usuario.apellido}</li>
        <li>Mostrar obj completo: {JSON.stringify(usuario)}</li>
    </ul>
    <p>Este es mi primer componente</p>
    <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
    </ul>
    </div>
)};

// Export
export default MiComponente;