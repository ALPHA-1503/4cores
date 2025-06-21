import { NavLink, Outlet } from 'react-router-dom';
import ScrollToTop from '../scripts/ScrollTop.jsx';
import CookieBanner from "../scripts/Cookie-Banner.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from "i18next";

export default function Root(){
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return(
        <I18nextProvider i18n={i18n}>
            <div>
                <ScrollToTop/>
                <section className="header">
                    <section className="left">
                        <NavLink to="/Home">
                            <img src="/images/FULL_v1_white.png" alt="4Cores Logo"/>
                        </NavLink>
                    </section>
                    <section className="middle">
                        <NavLink to="/Home" dangerouslySetInnerHTML={{__html: (t('home'))}}/>
                        <NavLink to="/About" dangerouslySetInnerHTML={{__html: (t('about'))}}/>
                        <NavLink to="/Projects" dangerouslySetInnerHTML={{__html: (t('projects'))}}/>
                    </section>
                    <section className="right">
                        <NavLink className="fancy-button" to="/Contact" dangerouslySetInnerHTML={{__html: (t('contact'))}}/>
                        <LanguageSwitcher/>
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
                        <NavLink to="/Projects" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
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

                <div className="content">
                    <Outlet/>
                </div>

                <section className="footer">
                    <section className="top">
                        <article className="left">
                            <img src="/images/FULL_v1_white.png" alt="4Cores Logo"/>
                        </article>
                        <article className="right">
                            <NavLink to="/Contact" dangerouslySetInnerHTML={{__html: (t('contact'))}}/>
                        </article>
                    </section>
                    <section className="bottom">
                        <article className="left">
                            {currentYear}
                            <p dangerouslySetInnerHTML={{__html: (t('rootpage.4cores'))}}/>
                            <p dangerouslySetInnerHTML={{__html: (t('rootpage.conditions'))}}/>
                            <NavLink to={"/cookie"} dangerouslySetInnerHTML={{__html: (t('rootpage.cookies-policy'))}}/>
                            <p>TVA : BE1021.374.168</p>
                        </article>
                        <article className="right">
                            <a id="noblue" href="mailto:contact@4cores.be"><img src="/images/courrier-b.png" alt="mail logo" title="Email"/></a>
                            <a id="noblue" href="https://www.linkedin.com/company/4coresolutions"><img src="/images/linkedin.png" alt="linkedin logo" title="LinkedIn"/></a>
                        </article>
                    </section>
                </section>
                <section className="footer-mobile">
                    <section className="top">
                        <a id="noblue" href="mailto:contact@4cores.be"><img src="/images/courrier-b.png" alt="mail logo"/></a>
                        <a id="noblue" href="https://www.linkedin.com/company/4coresolutions"><img src="/images/linkedin.png" alt="linkedin logo"/></a>
                        <NavLink to="/Contact" dangerouslySetInnerHTML={{__html: (t('contact'))}}/>
                    </section>
                    <section className="bottom">
                        <p dangerouslySetInnerHTML={{__html: (t('rootpage.general-conditions'))}} />
                        <NavLink to="/cookie" dangerouslySetInnerHTML={{__html: (t('rootpage.cookies-policy'))}} />
                        <p>TVA : BE1021.374.168</p>
                        <img src="/images/FULL_v1_white.png" alt="4Cores Logo"/>
                        <p dangerouslySetInnerHTML={{__html: (t('rootpage.4cores'))}} />
                    </section>
                </section>
            </div>
        </I18nextProvider>
    );
}