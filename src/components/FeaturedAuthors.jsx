export const FeaturedAuthors = () => {
    return (
        <section className="featured-authors">
            <h2 className="featured-authors__title">Autores Destacados</h2>
            <h5 className="featured-authors__subtitle">Voces que han dado forma al entendimiento humano</h5>
            <main className="featured-authors__container">
                {/* Crear lista de autores */}
                {/* Falta también añadir una comprobación en caso de que el elemento no tenga imagen de fondo, hay que poner un icono de usuario */}

                <section className="featured-authors__container__item">
                    <article className="featured-authors__container__item__content">
                        <div className="featured-authors__container__item__content__picture">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/MarcoAurelio.png" alt="" />
                        </div>
                    </article>
                    <h4 className="featured-authors__container__item__name">Marco Aurelio</h4>
                </section>

                <section className="featured-authors__container__item">

                    <article className="featured-authors__container__item__content">
                        <div className="featured-authors__container__item__content__picture">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M16.5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z"/><path stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M16.5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z"/></g></svg>
                        </div>
                    </article>
                    <h4 className="featured-authors__container__item__name">Carl Jung</h4>
                </section>

                <section className="featured-authors__container__item">

                    <article className="featured-authors__container__item__content">
                        <div className="featured-authors__container__item__content__picture">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M16.5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z"/><path stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M16.5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z"/></g></svg>
                        </div>
                    </article>
                    <h4 className="featured-authors__container__item__name">Séneca</h4>
                </section>

                <section className="featured-authors__container__item">

                    <article className="featured-authors__container__item__content">
                        <div className="featured-authors__container__item__content__picture">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M16.5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z"/><path stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M16.5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z"/></g></svg>
                        </div>
                    </article>
                    <h4 className="featured-authors__container__item__name">Niezstche Friedrich </h4>
                </section>

                <section className="featured-authors__container__item">

                    <article className="featured-authors__container__item__content">
                        <div className="featured-authors__container__item__content__picture">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M16.5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z"/><path stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M16.5 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z"/></g></svg>
                        </div>
                    </article>
                    <h4 className="featured-authors__container__item__name">Viktor Frankl</h4>
                </section>
            </main>
        </section>
    );
};
