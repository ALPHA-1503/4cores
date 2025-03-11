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
                    <NavLink to="/About">A propos</NavLink>
                    <NavLink to="/Soon">Réalisations</NavLink>
                </section>
                <section className="right">
                    <NavLink to="/Contact">Contactez-nous</NavLink>
                </section>
                <section className="burger">
                    <Hamburger onToggle={toggleMenuBurger} toggled={isBurgerActive}/>
                </section>
            </section>

            <section className={`burger-nav${isBurgerActive ? 'active' : ''}`}>
                <section className="menu">
                    <NavLink to="/Home">Accueil</NavLink>
                    <NavLink to="/About">A propos</NavLink>
                    <NavLink to="/Soon">Réalisations</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                </section>
            </section>

            <div className="content">
                <Outlet/>
            </div>

            <section className="footer">
                <section className="top">
                    <article className="left">
                        <img src="/images/FULL_v1_white.png" alt="Avetech Logo"/>
                    </article>
                    <article className="right">
                        <NavLink to="/Contact">Contactez-nous</NavLink>
                    </article>
                </section>
                <section className="bottom">
                    <article className="left">
                        <p>© Avetech {currentYear} - Tous droits réservés</p>
                        <p>Conditions générales</p>
                        <p>Politique de cookies</p>
                        <p>TVA XXXXXX</p>
                    </article>
                    <article className="right">
                        <img src="/images/courrier-b.png" alt="mail logo"/>
                        <img src="/images/linkedin.png" alt="linkedin logo"/>
                    </article>
                </section>
            </section>
        </div>
    );
}