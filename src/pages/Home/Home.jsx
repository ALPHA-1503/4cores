import { NavLink } from 'react-router-dom';
import Service_card from "./Home-service-card.jsx";
import Skills from "../scripts/Skills.jsx";
import Home_relation from "./Home-relation.jsx";
import {useEffect} from 'react';
import {useTranslation} from "react-i18next";

export default function Home(){
    const { t } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const homeServices = document.querySelector('.home-services');
        const teams = document.querySelectorAll('.team');
        const teamRights = document.querySelectorAll('.team-right');

        if (homeServices) {
            observer.observe(homeServices);
        }
        teams.forEach((team) => {
            observer.observe(team);
        });
        teamRights.forEach((teamRight) => {
            observer.observe(teamRight);
        });

        return () => {
            if (homeServices) {
                observer.unobserve(homeServices);
            }
            teams.forEach((team) => {
                observer.unobserve(team);
            });
            teamRights.forEach((teamRight) => {
                observer.unobserve(teamRight);
            });
        };
    }, []);

    // Todo: change css display and css files

    return(
        <section className="home">
            <section className="top-bg" />
            <section className="home-top">
                <h1 dangerouslySetInnerHTML={{__html: (t('homepage.title'))}} />
                <h2 dangerouslySetInnerHTML={{__html: (t('homepage.subtitle'))}} />
                <article className="buttons">
                    <article className="left">
                        <NavLink to="/About" id="propos" dangerouslySetInnerHTML={{__html: (t('about'))}}/>
                    </article>
                    <article className="right">
                        <NavLink to="/Projects" id="realisations" dangerouslySetInnerHTML={{__html: (t('projects'))}}/>
                    </article>

                </article>
            </section>
                <section className="home-services">
                    <article className="top">
                        <h1 dangerouslySetInnerHTML={{__html: (t('homepage.services'))}} />
                    </article>
                    <article className="menu">
                        <Service_card
                          title={t('homepage.services-menu.transition')}
                          services={[
                              t('homepage.services-menu.transition-elem.audit'),
                              t('homepage.services-menu.transition-elem.automatisation'),
                              t('homepage.services-menu.transition-elem.integration'),
                          ]}
                        />
                        <Service_card
                          title={t('homepage.services-menu.development')}
                          services={[
                              t('homepage.services-menu.development-elem.web'),
                              t('homepage.services-menu.development-elem.mobile'),
                              t('homepage.services-menu.development-elem.pwa'),
                              t('homepage.services-menu.development-elem.hybrid'),
                              t('homepage.services-menu.development-elem.design'),
                          ]}
                        />
                        <Service_card
                          title={t('homepage.services-menu.app-monitoring')}
                          services={[
                              t('homepage.services-menu.app-monitoring-elem.monitoring'),
                              t('homepage.services-menu.app-monitoring-elem.support'),
                              t('homepage.services-menu.app-monitoring-elem.maintenance'),
                          ]}
                        />

                    </article>
                    <article className="menu-bottom">
                        <Service_card
                          title={t('homepage.services-menu.infras')}
                          services={[
                              t('homepage.services-menu.infras-elem.network'),
                              t('homepage.services-menu.infras-elem.configuration'),
                              t('homepage.services-menu.infras-elem.cloud'),
                              t('homepage.services-menu.infras-elem.servers'),
                          ]}
                        />
                    </article>
                </section>
                <Home_relation
                    title={t('homepage.relation.title')}
                    description={t('homepage.relation.description')}
                    cards={[
                        { title: t('homepage.relation.relation-menu.tracking'), text: t('homepage.relation.relation-menu.tracking-desc') },
                        { title: t('homepage.relation.relation-menu.warranty'), text: t('homepage.relation.relation-menu.warranty-desc') },
                        { title: t('homepage.relation.relation-menu.security'), text: t('homepage.relation.relation-menu.security-desc') },
                        { title: t('homepage.relation.relation-menu.experience'), text: t('homepage.relation.relation-menu.experience-desc') },
                    ]}
                />
                <Skills />
        </section>
    );
}