import { useState } from 'react';
import { Routes, Route } from 'react-router';

import { Home } from './pages/Home';
import { Sign } from './pages/Sign';
import { ExploreQuotes } from './pages/Explore';
import quotes from './data/quotes.json';
import './styles/main.scss';

function App () {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home quoteList={quotes} />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/explore" element={<ExploreQuotes quoteList={quotes} />} />
            </Routes>
        </>
    );
}

export default App;
