import { useState } from 'react';
import { Header } from './components/header';
import { MainLayout } from './components/MainLayout';
import { ExploreCategories } from './components/ExploreCategories';
import { FeaturedAuthors } from './components/FeaturedAuthors';
import { Footer } from './components/Footer';
import './styles/main.scss';

function App () {
    return (
        <>
            <Header />
            <MainLayout />
            <ExploreCategories />
            <FeaturedAuthors />
            <Footer />
        </>
    );
}

export default App;
