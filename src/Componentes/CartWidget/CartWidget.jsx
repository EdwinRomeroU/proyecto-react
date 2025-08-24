import './CartWidget.css';

const CartWidget = () => {

    const imgCart = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMMhOySko3hQ5qtOoYgg8WuRSaMDCjQKRiDA&s";

    return (
        <div>
            <img className='imgCart' src={imgCart} alt="Imagen Carro de Compras" />
            <span>1</span>
        </div>
    );
}

export default CartWidget;