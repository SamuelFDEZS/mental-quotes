import { useState } from 'react';

const list = ['Populares', 'Recientes', 'Más cortos'];

export const FilterList = ({ resultCount }) => {
    const [selected, setSelected] = useState('Populares');
    return (
        <nav className="quotes__filters">
            {list.map((item) => (
                <button className={`quotes__filters__item ${selected === item ? 'selected' : ''}`} onClick={() => setSelected(item)}>{item}</button>
            ))}

            <div className="quotes__filters__results">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M104 40H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 64H56V56h48zm96-64h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 64h-48V56h48zm-96 32H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64H56v-48h48zm96-64h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-48v-48h48z"/></svg>
                <span className="quotes__filters__results__text">Mostrando {resultCount} resultados</span>
            </div>
        </nav>
    );
};
