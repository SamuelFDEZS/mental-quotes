import { useMemo, useState } from 'react';

import { Header } from '../components/Global/Header';
import { FilterList } from '../components/Explore/filterList';
import { CategoryList } from '../components/Explore/categoryList';
import { QuoteList } from '../components/Explore/QuoteList';
import { QuotePages } from '../components/Explore/QuotePages';
import { Footer } from '../components/Global/Footer';
import { QuoteSearch } from '../components/Explore/QuoteSearch';

const normalizeText = (text) => {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
};

export const ExploreQuotes = ({ quoteList }) => {
    const [category, setCategory] = useState('Motivación');
    const [searchText, setSearchText] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState('');

    const filteredQuotes = useMemo(() => {
        return quoteList.filter((quote) => normalizeText(quote.category).includes(normalizeText(categoryFilter)) && normalizeText(quote.text).includes(searchQuery));
    }, [quoteList, searchQuery]);

    /*
    const filteredQuotes = useMemo(() => {
        return quoteList.filter((quote) => normalizeText(quote.category) === normalizeText(categoryFilter) && normalizeText(quote.text).includes(searchQuery));
    }, [quoteList, searchQuery, categoryFilter]);
    */

    const handleSearchClick = () => {
        setIsSearchActive(!isSearchActive);

        if (isSearchActive) {
            setSearchQuery(normalizeText(searchText));
        }
    };

    return (
        <>

            <Header />

            <section className="quotes">
                <CategoryList category={category} handleCategoryChange={setCategory} dailyQuote={'La disciplina es el puente entre las metas y los logros.'} />
                <div className="quotes__content-container">
                    <article className="quotes__header">
                        <div className="quotes__header__category">
                            <span className="quotes__header__category__page">Explorar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" /></svg>
                            <span className="quotes__header__category__name">{category}</span>
                        </div>

                        <h2 className="quotes__header__title">{category}</h2>
                        <h3 className="quotes__header__subtitle">Encuentra la chispa necesaria para superar tus límites hoy.</h3>

                        <QuoteSearch quotes={quoteList} onSearch={handleSearchClick} searchText={searchText} onSearchChange={setSearchText} isSearchActive={isSearchActive} setSearchQuery={setSearchQuery} />
                    </article>

                    <FilterList resultCount={filteredQuotes.length} />

                    <QuoteList quotes={filteredQuotes} />
                    <QuotePages quotes={filteredQuotes} />
                </div>
            </section>

            <Footer />
        </>
    );
};
