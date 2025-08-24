import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <h2>JECA Joyería</h2>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Acerca de</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    );
}

export default NavBar;