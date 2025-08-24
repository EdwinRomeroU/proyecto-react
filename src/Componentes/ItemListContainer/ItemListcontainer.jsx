import "./ItemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
    return (
        <div>
            <h2 className="mensaje">{mensaje}</h2>
        </div>
    );
}

export default ItemListContainer;