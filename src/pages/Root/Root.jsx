import { NavLink, Outlet } from 'react-router-dom';
import ScrollToTop from '../scripts/ScrollTop.jsx';
import CookieBanner from "../scripts/Cookie-Banner.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18n from "i18next";

export default function Root(){
    const currentYear = new Date().getFullYear();  // TODO: display the current year in the footer
    const { t } = useTranslation();

    return(
        <I18nextProvider i18n={i18n}>
            <div>
                <ScrollToTop/>
                <section className="header">
                    <section className="left">
                        <NavLink to="/Home">
                            <img src="/images/FULL_v1_white.png" alt="Avetech Logo"/>
                        </NavLink>
                    </section>
                    <section className="middle">
                        <NavLink to="/Home" dangerouslySetInnerHTML={{__html: (t('home'))}}/>
                        <NavLink to="/About" dangerouslySetInnerHTML={{__html: (t('about'))}}/>
                        <NavLink to="/Soon" dangerouslySetInnerHTML={{__html: (t('projects'))}}/>
                    </section>
                    <section className="right">
                        <NavLink to="/Contact" dangerouslySetInnerHTML={{__html: (t('contact'))}}/>
                        <LanguageSwitcher/>
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
                            <NavLink to="/Contact" dangerouslySetInnerHTML={{__html: (t('contact'))}} />
                        </article>
                    </section>
                    <section className="bottom">
                        <article className="left">
                            {currentYear}
                            <p dangerouslySetInnerHTML={{__html: (t('rootpage.4cores'))}} />
                            <p dangerouslySetInnerHTML={{__html: (t('rootpage.conditions'))}} />
                            <NavLink to={"/cookie"} dangerouslySetInnerHTML={{__html: (t('rootpage.cookies-policy'))}} />
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
                        <NavLink to="/Contact" dangerouslySetInnerHTML={{__html: (t('contact'))}} />
                    </section>
                    <section className="bottom">
                        <p dangerouslySetInnerHTML={{__html: (t('rootpage.general-conditions'))}} />
                        <NavLink to="/cookie" dangerouslySetInnerHTML={{__html: (t('rootpage.cookies-policy'))}} />
                        <p>TVA XXXXXX</p>
                        <img src="/images/FULL_v1_white.png" alt="Avetech Logo"/>
                        <p dangerouslySetInnerHTML={{__html: (t('rootpage.4cores'))}} />
                    </section>
                </section>
            </div>
        </I18nextProvider>
    );
}