import { useState, useEffect } from "react";
import { getProductos } from "../../Asycmocks";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const [productos, setProducto] = useState([]);

    useEffect(()=>{
        getProductos()
            .then(respuesta => setProducto(respuesta))
            .catch(error => console.log(error))
    }, []);

    return (
        <>
            <h2>Mis Productos</h2>
            <ItemList productos={productos}/>
        </>
    );
}

export default ItemListContainer;