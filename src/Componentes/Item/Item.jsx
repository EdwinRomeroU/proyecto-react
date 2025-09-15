import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, nombre, categoria, precio, img, stock, descripcion}) => {
    return (
        <div className="producto">
            <img src={img} alt={nombre} />
            <h3>Nombre: {nombre}</h3>
            <p>Precio: {precio}</p>
            <p>ID: {id}</p>
            <p>Categoría: {categoria}</p>
            <p>Stock: {stock}</p>
            <p>Descripción: {descripcion}</p>
            <Link to={`/item/${id}`}><button>Ver Detalle</button></Link>
        </div>
    );
}

export default Item;