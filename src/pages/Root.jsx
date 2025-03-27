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
                    <NavLink to="/Home" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
                        <article className="top">
                            <img src="/images/home.svg" alt="home icon"/>
                        </article>
                        <article className="bottom">
                            <h1>Accueil</h1>
                        </article>
                    </NavLink>
                    <NavLink to="/About" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
                        <article className="top">
                            <img src="/images/info.svg" alt="home icon"/>
                        </article>
                        <article className="bottom">
                            <h1>A propos</h1>
                        </article>
                    </NavLink>
                    <NavLink to="/Soon" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
                        <article className="top">
                            <img src="/images/code.svg" alt="home icon"/>
                        </article>
                        <article className="bottom">
                            <h1>Réalisations</h1>
                        </article>
                    </NavLink>
                    <NavLink to="/Contact" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
                        <article className="top">
                            <img src="/images/contact.svg" alt="home icon"/>
                        </article>
                        <article className="bottom">
                            <h1>Contact</h1>
                        </article>
                    </NavLink>
                </nav>
            </section>

            <CookieBanner/>
