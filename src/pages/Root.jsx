import { NavLink, Outlet } from 'react-router-dom';
import {useState} from "react";
import ScrollToTop from './scripts/ScrollTop.jsx';

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
                    <img src="/images/FULL_v1_white.png" alt="Avetech Logo"/>
                </section>
                <section className="middle">
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/propos">A propos</NavLink>
                    <NavLink to="/realisations">Réalisations</NavLink>
                </section>
                <section className="right">
                    <NavLink to="/contact">Contact</NavLink>
                </section>

            </section>

            <div className="content">
                <Outlet/>
            </div>
        </div>
    );
}