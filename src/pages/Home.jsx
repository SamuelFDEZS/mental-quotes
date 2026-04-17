import { Header } from '../components/Global/Header';
import { MainLayout } from '../components/Home/MainLayout';
import { ExploreCategories } from '../components/Home/ExploreCategories';
import { FeaturedAuthors } from '../components/Home/FeaturedAuthors';
import { Footer } from '../components/Global/Footer';

export const Home = () => {
    return <>
        <Header />
        <MainLayout />
        <ExploreCategories />
        <FeaturedAuthors />
        <Footer />
    </>;
};
