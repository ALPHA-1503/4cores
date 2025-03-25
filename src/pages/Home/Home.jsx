import { NavLink, Outlet } from 'react-router-dom';
import Service_card from "./Home-service-card.jsx";
import Home_team from "./Home-team.jsx";
import { useEffect } from 'react';
import Home_team_mobile from "./Home-team-mobile.jsx";

export default function Home(){
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
            <h1>Des <span className="blue">solutions</span> technologiques intégrées pour une performance optimale de <span className="blue">votre entreprise.</span></h1>
            <h2>Ne laissez pas la technologie vous freiner ! Modernisez vos outils pour plus d’efficacité,
                de compétitivité et de rentabilité.</h2>
            <article className="buttons">
                <NavLink to="/About" id="propos">A propos</NavLink>
                <NavLink to="/Soon" id="realisations">Réalisations</NavLink>
            </article>
        </section>
            <section className="home-services">
                <article className="top">
                    <h1>Services</h1>
                </article>
                <article className="menu">
                    <Service_card
                      title="Transition digitale"
                      services={[
                          "Audit et conseil en transformation numérique",
                          "Automatisation des processus métiers",
                          "Intégration de solutions digitales adaptées"
                      ]}
                    />
                    <Service_card
                      title="Développement web/mobile"
                      services={[
                          "Développement front-end & backend (Php, Python, Javascript, Typescript, Nodejs,..)",
                          "Création d’applications web et mobiles sur mesure",
                          "Design UI/UX"
                      ]}
                    />
                    <Service_card
                      title="Gestion des applications"
                      services={[
                          "Déploiement et maintenance d’applications",
                          "Sécurisation et gestion des mises à jour",
                          "Monitoring "
                      ]}
                    />

                </article>
                <article className="menu-bottom">
                    <Service_card
                      title="Infrastructure & Cloud"
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