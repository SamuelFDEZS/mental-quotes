import { useState } from 'react';
import { Link } from 'react-router';

export const MainSign = () => {
    const [formType, setFormType] = useState('login');

    return (
        <main className="sign-main">
            <section className="sign-main__text">
                <h1 className="sign-main__text__title">Tu bienestar mental comienza <span>aquí</span>.</h1>
                <p className="sign-main__text__subtitle">
                    Únete a nuestra comunidad para descubrir sabiduría diaria, guardar tus frases favoritas y seguir tu camino de crecimiento personal.
                </p>
            </section>

            <form className="sign-main__form">
                <header className="sign-main__form__header">
                    <h1 className="sign-main__form__header__title">Bienvenido de nuevo</h1>
                    <span className="sign-main__form__header__subtitle">Ingresa tus credenciales para continuar</span>
                </header>

                <nav className="sign-main__form__choosing">
                    {/* Aquí dentro va un onclick en cada uno de los botones para cambiar el valor de la variable useState para escoger el formulario */}
                    <div className="sign-main__form__choosing__buttons-background"></div>
                    <button className={`sign-main__form__choosing__button ${formType === 'login' ? 'active' : ''}`}>Iniciar Sesión</button>
                    <button className={`sign-main__form__choosing__button ${formType === 'register' ? 'active' : ''}`}>Registrarse</button>
                </nav>

                <main className="sign-main__form__info">
                    <label htmlFor="email">Correo Electrónico</label>
                    <div className="sign-main__form__info__email-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m3 7l9 6l9-6"/></g></svg>
                        <input type="email" id="email" placeholder="ejemplo@email.com"/>
                    </div>

                    <label htmlFor="password">Contraseña</label>
                    <div className="sign-main__form__info__password-container">
                        <span className="sign-main__form__info__forgot-pass">¿Olvidaste tu contraseña?</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm3-2V7a4 4 0 1 1 8 0v4m-1 5h.01m-3 0h.01m-3 0h.01"/></svg>
                        <input type="password" id="password" placeholder="12345678"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9"/></svg>
                    </div>
                </main>

                <button className="sign-main__form__sign-button">Entrar a mi cuenta</button>

                <span className="sign-main__form__oauth-text">O CONTINÚA CON</span>

                <div className="sign-main__form__oauth-options">
                    <button className="sign-main__form__oauth-options__option"></button>
                    <button className="sign-main__form__oauth-options__option"></button>
                </div>

                <p className="sign-main__form__register-text">¿No tienes una cuenta? <span>Regístrate gratis</span></p>
            </form>
        </main>
    );
};
