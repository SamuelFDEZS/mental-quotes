import quotes from '../../assets/Icons/quotes.svg';
import shareIcon from '../../assets/Icons/share.svg';
import heartIcon from '../../assets/Icons/heart.svg';

const abbreviateAuthor = (name) => {
    const splitName = name.split(' ');
    let abbrName = '';

    if (splitName.length > 1) {
        abbrName = (splitName[0].charAt(0) + splitName[1].charAt(0)).toUpperCase();
    } else {
        abbrName = (name.charAt(0) + name.charAt(1)).toUpperCase();
    }

    return abbrName;
};

export const QuoteCard = ({ quote }) => {
    return (
        <article className="quotes__container__quote">
            <img src={quotes} alt="quotes icon" className="quotes__container__quote__icon"/>

            <p className="quotes__container__quote__text">{quote.text}</p>

            <div className="quotes__container__quote__author-container">
                <button className="quotes__container__quote__author-container__abbr">
                    {abbreviateAuthor(quote.author)}
                </button>

                <span className="quotes__container__quote__author-container__author">{quote.author}</span>
            </div>

            <div className="quotes__container__quote__icons-container">
                <img src={heartIcon} alt="Heart icon" />
                <img src={shareIcon} alt="Share icon" />
            </div>
        </article>
    );
};
