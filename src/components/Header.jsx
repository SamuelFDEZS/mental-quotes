import { useState } from 'react';
import { MentalLogo } from './MentalLogo';
export const Header = () => {
    const [isSigned, setIsSigned] = useState(false);
    const [userName, setUserName] = useState('');

    return (
        <header className="header">

            <MentalLogo isFooter={false} />

            <nav className="header__menu">
                <ul className="header__menu__list">
                    <li className="header__menu__list__item"><a href="">Explorar</a></li>
                    <li className="header__menu__list__item"><a href="">Mis Favoritos</a></li>
                </ul>
            </nav>

            <button className="header__sign-button">{isSigned ? userName : 'Iniciar Sesión'}</button>
        </header>
    );
};
