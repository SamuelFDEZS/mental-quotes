import { useState } from 'react';

export const QuotePages = ({ quotes }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageArray = [];
    const quotesPerPage = 6;

    const totalQuotes = quotes.length;
    const totalPages = Math.floor(totalQuotes / quotesPerPage);
    const visiblePages = Math.min(totalPages, 5);
    const sidePages = Math.floor((visiblePages - 1) / 2);
    const idealStart = currentPage - sidePages;
    const maxStart = totalPages - visiblePages + 1;
    const firstVisiblePage = Math.min(Math.max(1, idealStart), maxStart);

    for (let i = 0; i < visiblePages; i++) {
        pageArray.push(firstVisiblePage + i);
    }

    return (
        <section className="quotes__pagecount">
            <div className="quotes__pagecount__container">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 384 512"><path fill="currentColor" d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256l262.7 131.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3" /></svg>
                {pageArray.map((page) => (
                    <article className="quotes__pagecount__container__item">
                        <span>{page}</span>
                    </article>
                ))}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 384 512"><path fill="currentColor" d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1L18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32 32 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01" /></svg>
            </div>
        </section>
    );
};
