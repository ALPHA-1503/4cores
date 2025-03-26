import { NavLink } from 'react-router-dom';
import Service_card from "./Home-service-card.jsx";
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


    return(
        <>
        <section className="home-top">
            <h1 dangerouslySetInnerHTML={{__html: (t('homepage.title'))}} />
            <h2 dangerouslySetInnerHTML={{__html: (t('homepage.subtitle'))}} />
            <article className="buttons">
                <NavLink to="/About" id="propos" dangerouslySetInnerHTML={{__html: (t('about'))}} />
                <NavLink to="/Soon" id="realisations" dangerouslySetInnerHTML={{__html: (t('projects'))}} />
            </article>
        </section>
            <section className="home-services">
                <article className="top">
                    <h1 dangerouslySetInnerHTML={{__html: (t('homepage.services'))}} />
                </article>
                <article className="menu">
                    <Service_card
                      title={t('homepage.transition')}
                      services={[
                          "Audit et conseil en transformation numérique",
                          "Automatisation des processus métiers",
                          "Intégration de solutions digitales adaptées"
                      ]}
                    />
                    <Service_card
                      title={t('homepage.development')}
                      services={[
                          "Développement front-end & backend (Php, Python, Javascript, Typescript, Nodejs,..)",
                          "Création d’applications web et mobiles sur mesure",
                          "Design UI/UX"
                      ]}
                    />
                    <Service_card
                      title={t('homepage.app-monitoring')}
                      services={[
                          "Déploiement et maintenance d’applications",
                          "Sécurisation et gestion des mises à jour",
                          "Monitoring "
                      ]}
                    />

                </article>
                <article className="menu-bottom">
                    <Service_card
                      title={t('homepage.infras')}
                      services={[
                          "Architecture réseau - Conception et déploiement d’un réseau interne",
                          "Configuration et sécurisation - Switches, routeurs, access point, VLAN, VPN, Firewall",
                          "Cloud computing - Déploiement et gestion d’infrastructure en cloud ",
                          "Installation et configuration de serveurs - Gestion VMware, Proxmox, Docker, Kubernetes, " +
                          "VMware Tanzu "
                      ]}
                    />
                </article>
            </section>
        </>
    );
}