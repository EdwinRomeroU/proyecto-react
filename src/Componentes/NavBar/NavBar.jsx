import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <h2>JECA Joyería</h2>
            <nav>
                <ul>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} to="/">Inicio</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} to="/Categoria/Aretes">Aretes</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} to="/Categoria/Anillos">Anillos</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')} to="/Contacto">Contacto</NavLink></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    );
}

export default NavBar;