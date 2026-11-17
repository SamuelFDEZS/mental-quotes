export const QuoteSearch = ({ searchText, onSearch, onSearchChange, isSearchActive, setSearchQuery }) => {
    const clearInput = () => {
        onSearchChange('');
        setSearchQuery('');
    };
    return (
        <section className="quotes__header__quote-search">
            <main className="quotes__header__quote-search__container">
                <button onClick={onSearch}className="quotes__header__quote-search__container__button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8s3.59 8 8 8c1.85 0 3.54-.63 4.9-1.69l5.1 5.1L21.41 20l-5.1-5.1A8 8 0 0 0 18 10M4 10c0-3.31 2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6"/></svg>
                </button>

                <div className={`quotes__header__quote-search__container__box ${isSearchActive ? 'active' : ''}`} >
                    <input
                        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
                        onChange={(e) => onSearchChange(e.target.value)}
                        type="text"
                        placeholder='Busca tu frase aquí' value={searchText}
                    />

                    <button onClick={clearInput} className={searchText ? 'visible' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m7.76 14.83l-2.83 2.83l1.41 1.41l2.83-2.83l2.12-2.12l.71-.71l.71.71l1.41 1.42l3.54 3.53l1.41-1.41l-3.53-3.54l-1.42-1.41l-.71-.71l5.66-5.66l-1.41-1.41L12 10.59L6.34 4.93L4.93 6.34L10.59 12l-.71.71z"/></svg>
                    </button>
                </div>
            </main>
        </section>
    );
};
