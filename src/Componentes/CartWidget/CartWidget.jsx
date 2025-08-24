import './CartWidget.css';

const CartWidget = () => {

    const imgCart = "https://cdn-icons-png.flaticon.com/512/1170/1170678.png";

    return (
        <div>
            <img className='imgCart' src={imgCart} alt="Imagen Carro de Compras" />
            <span>1</span>
        </div>
    );
}

export default CartWidget;