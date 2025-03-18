import { NavLink, Outlet } from 'react-router-dom';
import Service_card from "./Home-service-card.jsx";
import BannerCard from './Home-banner-card.jsx';
import Home_team from "./Home-team.jsx";
import { useEffect } from 'react';
import Home_team_mobile from "./Home-team-mobile.jsx";
import BannerKiosk from './Home-swiper-banner.jsx';

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

    const lvca = {
        title: "Abs Luca",
        subtitle: "Etudiant Indépendant & Co-Fondateur",
        description: "Passionné d’informatique depuis toujours, je suis animé par l’envie de contribuer activement " +
            "au monde digital qui nous entoure. Actuellement en Master en Architecture Informatique, après " +
            "un bachelier en Technologie Informatique, je développe une expertise solide dans la conceptionet " +
            "l’optimisation des systèmes informatiques. Curieux et motivé, je suis constamment en quête de nouveaux " +
            "défis pour innover et apporter des solutions efficaces.",
        mail: "https://www.google.com",
        linkedin: "https://www.linkedin.com",
        image: "/images/lvca_team.png",
        image_mobile: "/images/lvca.png"
    };

    const ervinou = {
        title: "Gjoni Ervin",
        subtitle: "Etudiant Indépendant & Co-Fondateur",
        description:"Passionné de technologie et d’innovation, j’évolue dans le domaine de l’informatique depuis " +
            "plusieurs années. Actuellement en Master en Architecture des Systèmes à l’Hénallux, j’ai acquis une " +
            "solide expertise en réseaux, programmation, cybersécurité, IoT et développement web. En parallèle de mes " +
            "études, j'ai également pu travailler en milieux professionnel dans l'informatique ce qui m’a permis de " +
            "développer une approche rigoureuse et efficace pour résoudre les problèmes techniques et optimiser " +
            "les performances des équipements.",
        mail: "https://www.google.com",
        linkedin: "https://www.linkedin.com",
        image:"/images/ervinou_team.png",
        image_mobile:"/images/ervinou.png"
    }

    const nini = {
        title: "Jaunart Noé",
        subtitle: "Etudiant Indépendant & Co-Fondateur",
        description: "Passionné d’informatique depuis toujours, je suis animé par l’envie de contribuer activement " +
            "au monde digital qui nous entoure. Actuellement en Master en Architecture Informatique, après " +
            "un bachelier en Technologie Informatique, je développe une expertise solide dans la conceptionet " +
            "l’optimisation des systèmes informatiques. Curieux et motivé, je suis constamment en quête de nouveaux " +
            "défis pour innover et apporter des solutions efficaces.",
        mail: "https://www.google.com",
        linkedin: "https://www.linkedin.com",
        image:"/images/nini_team.png",
        image_mobile:"/images/nini.png",
    }

    const arnaud = {
        title: "Van Eenoo Arnaud",
        subtitle: "Etudiant Indépendant & Co-Fondateur",
        description: "Passionné d’informatique depuis toujours, je suis animé par l’envie de contribuer activement " +
            "au monde digital qui nous entoure. Actuellement en Master en Architecture Informatique, après " +
            "un bachelier en Technologie Informatique, je développe une expertise solide dans la conceptionet " +
            "l’optimisation des systèmes informatiques. Curieux et motivé, je suis constamment en quête de nouveaux " +
            "défis pour innover et apporter des solutions efficaces.",
        mail: "https://www.google.com",
        linkedin: "https://www.linkedin.com",
        image:"/images/me_team.png",
        image_mobile:"/images/me.png"
    }


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

                <article className="banner">
                    <article className="banner-top">
                        <h2>Solutions informatiques sur mesure pour votre entreprise</h2>
                    </article>
                        <article className="banner-bottom">
                            <BannerCard
                            title="Personnalisation totale"
                            description="Chaque entreprise a des besoins uniques : nous adaptons nos solutions pour répondre précisément à vos exigences."
                            />
                            <BannerCard
                            title="Optimisation de la productivité"
                            description="Nos services informatiques permettent d’automatiser des tâches, d’améliorer les flux de travail et d’optimiser les performances."
                            />
                            <BannerCard
                            title="Intégration cloud et solutions hybrides"
                            description="Mise en place d’infrastructures évolutives et flexibles via le cloud pour faciliter la collaboration et la gestion des ressources."
                            />
                            <BannerCard
                            title="Support technique et maintenance proactive"
                            description="Assistance continue et surveillance des systèmes pour minimiser les interruptions et garantir un fonctionnement fluide."
                            />
                        </article>
                    </article>
                    <article className="banner-kiosk">
                        <BannerKiosk>
                            slides
                        </BannerKiosk>
                    </article>
            </section>
            <section className="home-team">
                <article className="top">
                    <h1>Notre équipe</h1>
                </article>
                <Home_team
                    title={nini.title}
                    subtitle={nini.subtitle}
                    description={nini.description}
                    mail={nini.mail}
                    linkedin={nini.linkedin}
                    side="left"
                    image={nini.image}
                />

                <Home_team
                    title={ervinou.title}
                    subtitle={ervinou.subtitle}
                    description={ervinou.description}
                    mail={ervinou.mail}
                    linkedin={ervinou.linkedin}
                    side="right"
                    image={ervinou.image}
                />

                <Home_team
                    title={lvca.title}
                    subtitle={lvca.subtitle}
                    description={lvca.description}
                    mail={lvca.mail}
                    linkedin={lvca.linkedin}
                    side="left"
                    image={lvca.image}
                />

                <Home_team
                    title={arnaud.title}
                    subtitle={arnaud.subtitle}
                    description={arnaud.description}
                    mail={arnaud.mail}
                    linkedin={arnaud.linkedin}
                    side="right"
                    image={arnaud.image}
                />

                <Home_team_mobile
                    title={nini.title}
                    subtitle={nini.subtitle}
                    description={nini.description}
                    mail={nini.mail}
                    linkedin={nini.linkedin}
                    image={nini.image_mobile}
                />

                <Home_team_mobile
                    title={ervinou.title}
                    subtitle={ervinou.subtitle}
                    description={ervinou.description}
                    mail={ervinou.mail}
                    linkedin={ervinou.linkedin}
                    image={ervinou.image_mobile}
                />

                <Home_team_mobile
                    title={lvca.title}
                    subtitle={lvca.subtitle}
                    description={lvca.description}
                    mail={lvca.mail}
                    linkedin={lvca.linkedin}
                    image={lvca.image_mobile}
                />

                <Home_team_mobile
                    title={arnaud.title}
                    subtitle={arnaud.subtitle}
                    description={arnaud.description}
                    mail={arnaud.mail}
                    linkedin={arnaud.linkedin}
                    image={arnaud.image_mobile}
                />


            </section>
        </>
    );
}
