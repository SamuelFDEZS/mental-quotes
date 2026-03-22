export const ExploreCategories = ({ categoriesList }) => {
    return (
        <section className="explore-categories">

            <h2 className="explore-categories__title">Explorar Categorías</h2>
            <h5 className="explore-categories__subtitle">Encuentra la sabiduría que necesitas hoy</h5>

            <a href="" className="explore-categories__all">
                <span className="explore-categories__all__text">Ver todas</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m7 7l7-7l-7-7"/></svg>
            </a>
            <div className="explore-categories__categories">
                {/* Aqui hay que importar las categorías, que recibiremos desde App */}
                <div className="explore-categories__categories__category">Motivación</div>
                <div className="explore-categories__categories__category">Nostalgia</div>
                <div className="explore-categories__categories__category">Disciplina</div>
                <div className="explore-categories__categories__category">Sabiduría</div>
                <div className="explore-categories__categories__category">Estoicismo</div>
            </div>
        </section>
    );
};
