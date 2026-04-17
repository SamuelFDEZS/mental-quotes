import { NavLink } from 'react-router';

export const Navbar = () => {
    return (
        <nav className="header__menu">
            <ul className="header__menu__list">
                <li className="header__menu__list__item"> <NavLink to="/explore">Explorar</NavLink></li>
                <li className="header__menu__list__item"> <NavLink to="/favorites" >Mis Favoritos</NavLink></li>
            </ul>
        </nav>
    );
};
