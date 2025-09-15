import { useState, useEffect } from "react";
import { getProductoById } from "../../Asycmocks";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({productos}) => {

    const {idItem} = useParams();

    const [producto, setProducto] = useState({});
    useEffect(()=>{
        getProductoById(idItem)
            .then(respuesta => setProducto(respuesta))
    }, [idItem]);

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...producto} />
        </div>
    );
}

export default ItemDetailContainer;