import { useState, useEffect } from "react";
import { getProductoById } from "../../Asycmocks";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({productos}) => {

    const [producto, setProducto] = useState({});
    useEffect(()=>{
        getProductoById(3)
            .then(respuesta => setProducto(respuesta))
    }, []);

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    );
}

export default ItemDetailContainer;