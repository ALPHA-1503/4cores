import { NavLink, Outlet } from 'react-router-dom';
import {useState} from "react";
import ScrollToTop from './scripts/ScrollTop.jsx';
import { Twirl as Hamburger } from 'hamburger-react';

export default function Root(){
    const currentYear = new Date().getFullYear();
    const [isBurgerActive, setIsBurgerActive] = useState(false);

    const toggleMenuBurger = () => {
        setIsBurgerActive(!isBurgerActive);
    };

    return(
        <div>
            <ScrollToTop/>
            <section className="header">
                <section className="left">
                    <NavLink to="/Home">
                        <img src="/images/FULL_v1_white.png" alt="Avetech Logo"/>
                    </NavLink>
                </section>
                <section className="middle">
                    <NavLink to="/Home">Accueil</NavLink>
                    <NavLink to="/">A propos</NavLink>
                    <NavLink to="/">Réalisations</NavLink>
                </section>
                <section className="right">
                    <NavLink to="/">Contactez-moi</NavLink>
                </section>
                <section className="burger">
                    <Hamburger onToggle={toggleMenuBurger} toggled={isBurgerActive}/>
                </section>
            </section>

            <section className={`burger-nav${isBurgerActive ? 'active' : ''}`}>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/">A propos</NavLink>
                <NavLink to="/">Réalisations</NavLink>
                <NavLink to="/">Contact</NavLink>
            </section>

            <div className="content">
                <Outlet/>
            </div>

            <div className="footer">
                <p>© Avetech {currentYear} - Tous droits réservés</p>
            </div>
        </div>
    );
}