const ItemDetail = ({id, nombre, categoria, precio, img, stock, descripcion}) => {
    return (
        <div>
            <img src={img} alt={nombre} />
            <h2>{nombre}</h2>
            <p>Categoría: {categoria}</p>  
            <p>Precio: ${precio}</p>
            <p>Id: {id}</p>
            <p>Stock disponible: {stock}</p>
            <p>Descripción: {descripcion}</p>
            <button>Agregar al carrito</button>
        </div>
    );
}  
export default ItemDetail;