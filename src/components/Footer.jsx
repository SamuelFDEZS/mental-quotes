import { MentalLogo } from './MentalLogo';

export const Footer = () => {
    return (
        <footer className="footer">
            <MentalLogo isFooter={true}/>
            <nav className="footer__menu">
                <ul className="footer__menu__ilst">
                    <li className="footer__menu__list__item">Términos</li>
                    <li className="footer__menu__list__item">Privacidad</li>
                    <li className="footer__menu__list__item">Contacto</li>
                </ul>
            </nav>
            <span className="footer__copyright">@2026 PsicoLogos. Nutriendo el pensamiento</span>
        </footer>
    );
};
