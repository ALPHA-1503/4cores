import { NavLink, Outlet } from 'react-router-dom';
import {useState} from "react";
import ScrollToTop from './scripts/ScrollTop.jsx';
import { Twirl as Hamburger } from 'hamburger-react';
import CookieBanner from "./scripts/Cookie-Banner.jsx";

export default function Root(){
    const currentYear = new Date().getFullYear();

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
            </section>
            <section className="bottom-navigation">
                <nav className="nav-container">
                    <NavLink to="/Home" className="nav-item">
                        {({isActive}) => (
                            <>
                                <img src={isActive ? "/images/home-selected.png" : "/images/home-mobile.png"}
                                     alt="home icon"/>
                                <h1>Accueil</h1>
                            </>
                        )}
                    </NavLink>
                    <NavLink to="/About" className="nav-item">
                        {({isActive}) => (
                            <>
                                <img src={isActive ? "/images/a-propos-selected.png" : "/images/a-propos.png"}
                                     alt="about icon"/>
                                <h1>A propos</h1>
                            </>
                        )}
                    </NavLink>
                    <NavLink to="/Soon" className="nav-item">
                        {({isActive}) => (
                            <>
                                <img src={isActive ? "/images/realisation-selected.png" : "/images/realisation.png"}
                                     alt="projects icon"/>
                                <h1>Réalisations</h1>
                            </>
                        )}
                    </NavLink>
                    <NavLink to="/Contact" className="nav-item">
                        {({isActive}) => (
                            <>
                                <img src={isActive ? "/images/contact-selected.png" : "/images/contact.png"}
                                     alt="contact icon"/>
                                <h1>Contact</h1>
                            </>
                        )}
                    </NavLink>
                </nav>
            </section>

            <CookieBanner/>

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
                        <p>[SA SPJ] © 4CORES {currentYear} - Tous droits réservés</p>
                        <p>Conditions générales</p>
                        <NavLink to={"/cookie"}>Politique de cookies</NavLink>
                        <p>TVA XXXXXX</p>
                    </article>
                    <article className="right">
                        <img src="/images/courrier-b.png" alt="mail logo"/>
                        <img src="/images/linkedin.png" alt="linkedin logo"/>
                    </article>
                </section>
            </section>
            <section className="footer-mobile">
                <section className="top">
                    <img src="/images/courrier-b.png" alt="mail logo"/>
                    <img src="/images/linkedin.png" alt="linkedin logo"/>
                    <NavLink to="/Contact">Contactez-nous</NavLink>
                </section>
                <section className="bottom">
                    <p>Conditions générales</p>
                    <NavLink to="/cookie">Politique de cookies</NavLink>
                    <p>TVA XXXXXX</p>
                    <img src="/images/FULL_v1_white.png" alt="Avetech Logo"/>
                    <p>© {currentYear} 4CORES SSPJ - Tous droits réservés</p>
                </section>
            </section>
        </div>
    );
}