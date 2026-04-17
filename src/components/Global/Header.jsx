import { useState } from 'react';
import { MentalLogo } from './MentalLogo';
import { Navbar } from '../Home/Navbar';
import { Navigate, useNavigate } from 'react-router';

export const Header = () => {
    const [isSigned, setIsSigned] = useState(false);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const goToSign = () => {
        navigate('/sign');
    };
    return (
        <header className="header">

            <MentalLogo isFooter={false} />
            <Navbar />

            <button onClick={goToSign} className="header__sign-button">{isSigned ? userName : 'Iniciar Sesión'}</button>
        </header>
    );
};
