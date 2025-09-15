import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosByCategoria } from "../../Asycmocks";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const [productos, setProducto] = useState([]);

    const {idCategoria} = useParams();

    useEffect(()=>{

        const funcionProductos = idCategoria ? getProductosByCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(respuesta => setProducto(respuesta))
            .catch(error => console.log(error))
    }, [idCategoria]);

    return (
        <>
            <h2>Mis Productos</h2>
            <ItemList productos={productos}/>
        </>
    );
}

export default ItemListContainer;