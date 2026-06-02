import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ChangeForm } from './ChangeForm';
import { FormInfo } from './FormInfo';
import { OauthOptions } from './OauthOptions';

export const MainSign = () => {
    const [formType, setFormType] = useState('login');
    const buttonText = {
        login: 'Entrar a mi cuenta',
        register: 'Crear cuenta',
        forgot: 'Enviar instrucciones'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const toggleFormType = (type) => {
        setFormType(type);
    };

    const handleTextClick = () => {
        if (formType === 'login') {
            setFormType('register');
        } else {
            setFormType('login');
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChangeForm = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    useEffect(() => {
        console.log(formType);
    }, [formType]);

    return (
        <main className="sign-main">
            <section className="sign-main__text">
                <h1 className="sign-main__text__title">Tu bienestar mental comienza <span>aquí</span>.</h1>
                <p className="sign-main__text__subtitle">
                    Únete a nuestra comunidad para descubrir sabiduría diaria, guardar tus frases favoritas y seguir tu camino de crecimiento personal.
                </p>
            </section>

            {(formType === 'login' || formType === 'register' || formType === 'forgot') &&

                <form onSubmit={handleSubmit} className={`sign-main__form ${formType === 'register' ? 'register' : formType === 'forgot' ? 'forgot' : ''}`}>
                    {(formType === 'login' || formType === 'register') &&
                        <>
                            <header className="sign-main__form__header">
                                <h1 className="sign-main__form__header__title">{formType === 'login' ? 'Bienvenido de nuevo' : 'Crea tu cuenta'}</h1>
                                <span className="sign-main__form__header__subtitle">{formType === 'login' ? 'Ingresa tus credenciales para continuar' : 'Completa tus datos para empezar tu camino'}</span>
                            </header>

                            <ChangeForm formType={formType} onChangeFormType={toggleFormType} />
                        </>
                    }
                    <FormInfo formType={formType} formData={formData} onChange={handleChangeForm} onChangeFormType={toggleFormType} />

                    <button className={`sign-main__form__sign-button ${formType === 'forgot' ? 'forgot' : ''}`}>{buttonText[formType]}</button>

                    {(formType === 'login' || formType === 'register') &&
                        <>
                            <span className="sign-main__form__oauth-text">{formType === 'login' ? 'O CONTINÚA CON' : 'O REGÍSTRATE CON'}</span>

                            <OauthOptions />

                            <p className="sign-main__form__register-text">{formType === 'login' ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'} <span onClick={handleTextClick}>{formType === 'login' ? 'Regístrate gratis' : 'Inicia sesión'}</span></p>
                        </>
                    }

                    {formType === 'forgot' &&
                        <p className="sign-main__form__forgot-pass__back" onClick={() => toggleFormType('login')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z" />
                            </svg>

                            <span>Volver al inicio de sesión</span>
                        </p>
                    }

                </form>
            }

        </main>
    );
};
