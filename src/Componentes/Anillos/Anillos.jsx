import React from 'react';
import { useParams } from 'react-router-dom';

const Anillos = () => {

    const {id} = useParams();
    console.log(id);

    return (
        <div>
            <h1>Anillos</h1>
            <p>Bienvenido a la sección de Anillos. {id}</p>
        </div>
    );
}  

export default Anillos;