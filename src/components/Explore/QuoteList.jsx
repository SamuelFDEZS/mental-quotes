import { QuoteCard } from './quoteCard';

export const QuoteList = ({ quotes }) => {
    return (
        <section className="quotes__container">
            {quotes.map((quote) => (
                <QuoteCard quote={quote}/>
            ))}
        </section>
    );
};
