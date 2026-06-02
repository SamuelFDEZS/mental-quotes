import { useState } from 'react';

export const FormInfo = ({ formType, formData, onChange, onChangeFormType }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [forgottenEmail, setForgottenEmail] = useState('');

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleInputForgottenEmail = (e) => {
        setForgottenEmail(e.target.value);
    };

    return (
        <main className={`sign-main__form__info ${formType === 'forgot' ? 'forgot' : ''}`}>

            {(formType === 'login' || formType === 'register') && (
                <>
                    {formType === 'register' &&
            <>
                <label htmlFor="name">Nombre Completo</label>
                <div className="sign-main__form__info__name-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M16.5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z"/><path stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M16.5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z"/></g></svg>
                    <input onChange={onChange} name="name" type="text" id="name" placeholder="Tu nombre y apellido" value={formData.name}/>
                </div>
            </>
                    }

                    <label htmlFor="email">Correo Electrónico</label>
                    <div className="sign-main__form__info__email-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="m3 7l9 6l9-6" /></g></svg>
                        <input onChange={onChange} name="email" type="email" id="email" placeholder="ejemplo@email.com" value={formData.email} />
                    </div>

                    <div className="sign-main__form__info__label">
                        <label htmlFor="password" className="login-pass-label">Contraseña</label>
                        {formType === 'login' && <span className="sign-main__form__info__label__forgot-pass" onClick={() => onChangeFormType('forgot')}>¿Olvidaste tu contraseña?</span>}
                    </div>
                    <div className="sign-main__form__info__password-container">
                        <svg className="sign-password-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M16 24v-4m5-5V8a5 5 0 0 0-10 0v7M6 27V17a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2" /></svg>

                        <input onChange={onChange} name="password" type={showPassword ? 'text' : 'password'} id="password" placeholder="••••••••" value={formData.password} className={showPassword ? 'password-visible' : ''} />

                        <svg onClick={handleShowPassword} className={`sign-password-eye ${showPassword ? 'visible' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5c-6.307 0-9.367 5.683-9.91 6.808a.44.44 0 0 0 0 .384C2.632 13.317 5.692 19 12 19s9.367-5.683 9.91-6.808a.44.44 0 0 0 0-.384C21.368 10.683 18.308 5 12 5" /><circle cx="12" cy="12" r="3" /></g></svg>
                    </div>

                    {formType === 'register' &&
            <>
                <label htmlFor="confirm-pass">Confirmar Contraseña</label>
                <div className="sign-main__form__info__confirm-pass-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"><path strokeLinecap="round" d="M21.5 12A9.5 9.5 0 1 1 12 2.5a9.5 9.5 0 0 1 8.71 5.7m.79-2.7l-.475 3.175L18 8"/><path d="M10 11V9.5a2 2 0 1 1 4 0V11m-2.75 5.5h1.5c1.173 0 1.76 0 2.163-.31a1.5 1.5 0 0 0 .277-.277c.31-.404.31-.99.31-2.163s0-1.76-.31-2.163a1.5 1.5 0 0 0-.277-.277c-.404-.31-.99-.31-2.163-.31h-1.5c-1.173 0-1.76 0-2.163.31a1.5 1.5 0 0 0-.277.277c-.31.404-.31.99-.31 2.163s0 1.76.31 2.163a1.5 1.5 0 0 0 .277.277c.404.31.99.31 2.163.31Z"/></g></svg>

                    <input onChange={onChange} name="confirmPassword" type={showPassword ? 'text' : 'password'} id="confirm-pass" className={showPassword ? 'password-visible' : ''} placeholder="••••••••" value={formData.confirmPassword} />

                </div>
            </>
                    }
                </>
            )}

            {formType === 'forgot' &&
            <>
                <div className="sign-main__form__forgot-pass__svg-container">

                    <svg className="sign-main__form__forgot-pass__svg-container__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><path stroke-linecap="round" d="M21.5 12A9.5 9.5 0 1 1 12 2.5a9.5 9.5 0 0 1 8.71 5.7m.79-2.7l-.475 3.175L18 8"/><path d="M10 11V9.5a2 2 0 1 1 4 0V11m-2.75 5.5h1.5c1.173 0 1.76 0 2.163-.31a1.5 1.5 0 0 0 .277-.277c.31-.404.31-.99.31-2.163s0-1.76-.31-2.163a1.5 1.5 0 0 0-.277-.277c-.404-.31-.99-.31-2.163-.31h-1.5c-1.173 0-1.76 0-2.163.31a1.5 1.5 0 0 0-.277.277c-.31.404-.31.99-.31 2.163s0 1.76.31 2.163a1.5 1.5 0 0 0 .277.277c.404.31.99.31 2.163.31Z"/></g></svg>

                </div>

                <h1 className="sign-main__form__forgot-pass__title">Recuperar contraseña</h1>
                <p className="sign-main__form__forgot-pass__subtitle">Introduce tu correo electrónico y te enviaremos las instrucciones para restablecer tu acceso</p>

                <label htmlFor="email">Correo Electrónico</label>
                <div className="sign-main__form__forgot-pass__container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="m3 7l9 6l9-6" /></g></svg>
                    <input onChange={handleInputForgottenEmail} name="email" type="email" id="email" placeholder="ejemplo@email.com" value={forgottenEmail} />
                </div>

            </>
            }
        </main>
    );
};
