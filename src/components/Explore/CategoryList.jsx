import { useState } from 'react';
import { NavLink } from 'react-router';
import bolt from '../../assets/Icons/bolt.svg';
import fire from '../../assets/Icons/fire.svg';
import heart from '../../assets/Icons/heart.svg';
import sandtimer from '../../assets/Icons/sandtimer.svg';
import shield from '../../assets/Icons/shield.svg';
import target from '../../assets/Icons/target.svg';

const list = [
    {
        id: 'motivation',
        name: 'Motivación',
        icon: bolt
    },

    {
        id: 'nostalgia',
        name: 'Nostalgia',
        icon: sandtimer
    },

    {
        id: 'discipline',
        name: 'Disciplina',
        icon: target
    },

    {
        id: 'resilience',
        name: 'Resiliencia',
        icon: shield
    },

    {
        id: 'gratitud',
        name: 'Gratitud',
        icon: heart
    },

    {
        id: 'stoicism',
        name: 'Estoicismo',
        icon: fire
    }
];

export const CategoryList = ({ dailyQuote, handleCategoryChange, category }) => {
    return (
        <aside className="quotes__category-container">
            <h4 className="quotes__category-container__title">Categorias</h4>
            <ul className="quotes__category-container__list">
                {list.map((item) => (
                    <NavLink to="#" onClick={() => handleCategoryChange(item.name)} className={`quotes__category-container__list__item ${category.toLowerCase() === item.name.toLowerCase() ? 'selected' : ''}`}>
                        <img src={item.icon} alt="Category icon" />
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </ul>

            <article className='quotes__category-container__daily-quote'>
                <div className="quotes__category-container__daily-quote__container">
                    <h5 className="quotes__category-container__daily-quote__title">Cita del día</h5>
                    <p className="quotes__category-container__daily-quote__quote">
                        "{dailyQuote}"
                    </p>
                </div>
            </article>
        </aside>
    );
};
