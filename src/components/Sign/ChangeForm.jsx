export const ChangeForm = ({ formType, onChangeFormType }) => {
    return (
        <nav className="sign-main__form__choosing">
            {/* Aquí dentro va un onclick en cada uno de los botones para cambiar el valor de la variable useState para escoger el formulario */}
            <div className={`sign-main__form__choosing__buttons-background ${formType === 'login' ? 'sign' : 'register'}`}></div>
            <button onClick={() => onChangeFormType('login')} className={`sign-main__form__choosing__button ${formType === 'login' ? 'active' : ''}`}>Iniciar Sesión</button>
            <button onClick={() => onChangeFormType('register')} className={`sign-main__form__choosing__button ${formType === 'register' ? 'active' : ''}`}>Registrarse</button>
        </nav>
    );
};
