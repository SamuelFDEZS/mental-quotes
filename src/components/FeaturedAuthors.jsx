export const FeaturedAuthors = () => {
    return (
        <section className="featured-authors">
            <h2 className="featured-authors__title">Autores Destacados</h2>
            <h5 className="featured-authors__subtitle">Voces que han dado forma al entendimiento humano</h5>
            <main className="featured-authors__container">
                {/* Crear lista de autores */}

                <article className="featured-authors__container__item">
                    <div className="featured-authors__container__item__picture"></div>
                    <h4 className="featured-authors__container__item__name">Marco Aurelio</h4>
                </article>

                <article className="featured-authors__container__item">
                    <div className="featured-authors__container__item__picture"></div>
                    <h4 className="featured-authors__container__item__name">Carl Jung</h4>
                </article>

                <article className="featured-authors__container__item">
                    <div className="featured-authors__container__item__picture"></div>
                    <h4 className="featured-authors__container__item__name">Séneca</h4>
                </article>

                <article className="featured-authors__container__item">
                    <div className="featured-authors__container__item__picture"></div>
                    <h4 className="featured-authors__container__item__name">Friedrich Nietzsche</h4>
                </article>

                <article className="featured-authors__container__item">
                    <div className="featured-authors__container__item__picture"></div>
                    <h4 className="featured-authors__container__item__name">Viktor Frankl</h4>
                </article>
            </main>
        </section>
    );
};
