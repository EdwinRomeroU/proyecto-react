import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, categoria, precio, img, stock, descripcion}) => {
    return (
        <div className="productoDetalle">
            <img src={img} alt={nombre} />
            <h2>{nombre}</h2>
            <p>Categoría: {categoria}</p>  
            <p>Precio: ${precio}</p>
            <p>Id: {id}</p>
            <p>Stock disponible: {stock}</p>
            <p>Descripción: {descripcion}</p>
            <ItemCount stock={stock} inicial={1} manejadorCantidad={(cantidad) => console.log(`Se agregaron ${cantidad} productos al carrito`)}/>
        </div>
    );
}  
export default ItemDetail;