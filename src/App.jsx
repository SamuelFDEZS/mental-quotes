import { useState } from 'react';
import { Header } from './components/header';
import { MainLayout } from './components/MainLayout';
import { ExploreCategories } from './components/ExploreCategories';
import { Footer } from './components/Footer';
import './styles/main.scss';

function App () {
    return (
        <>
            <Header />
            <MainLayout />
            <ExploreCategories />
            <Footer />
        </>
    );
}

export default App;
