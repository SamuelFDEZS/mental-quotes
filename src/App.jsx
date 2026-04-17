import { useState } from 'react';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router';
import './styles/main.scss';
import { Sign } from './pages/Sign';

function App () {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign" element={<Sign />} />
            </Routes>
        </>
    );
}

export default App;
