import { MentalLogo } from './MentalLogo';

export const Footer = () => {
    return (
        <footer className="footer">
            <MentalLogo isFooter={true}/>
            <nav className="footer__menu">
                <ul className="footer__menu__list">
                    <a href="" className="footer__menu__list__item"><li>Términos</li></a>
                    <a href="" className="footer__menu__list__item"><li>Privacidad</li></a>
                    <a href="" className="footer__menu__list__item"><li>Contacto</li></a>
                </ul>
            </nav>
            <span className="footer__copyright">@2026 PsicoLogos. Nutriendo el pensamiento</span>
        </footer>
    );
};
