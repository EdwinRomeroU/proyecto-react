import React from "react";
import { useState } from "react";

const ItemCount = ({stock, inicial, manejadorCantidad}) => {

    const [contador, setContador] = useState(inicial); 
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }
    return (
        <div>
            <div>
                <button onClick={decrementar}>-</button>
                <span>{contador}</span>
                <button onClick={incrementar}>+</button>
            </div>
            <div>
                <button onClick={() => manejadorCantidad(contador)}>Agregar al carrito</button>
            </div>
        </div>
    );
}
export default ItemCount;