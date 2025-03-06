import { NavLink, Outlet } from 'react-router-dom';
import Service_card from "./Home-service-card.jsx";
import Home_team from "./Home-team.jsx";

export default function Home(){

    return(
        <>
        <section className="home-top">
            <h1>Des <span className="blue">solutions</span> technologiques intégrées pour une performance optimale de <span className="blue">votre entreprise.</span></h1>
            <h2>Toutes les entreprises méritent un environnement informatique de qualité et abordable.</h2>
            <article className="buttons">
                <NavLink to="/" id="propos">A propos</NavLink>
                <NavLink to="/" id="realisations">Réalisations</NavLink>
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
            <section className="home-team">
                <article className="top">
                    <h1>Notre équipe</h1>
                </article>
                <Home_team
                    title="Jaunart Noé"
                    subtitle="Etudiant Indépendant & Co-Fondateur"
                    description="Passionné d’informatique depuis toujours, je suis animé par l’envie de contribuer
                    activement au monde digital qui nous entoure. Actuellement en Master en Architecture Informatique,
                    après un bachelier en Technologie Informatique, je développe une expertise solide dans la conception
                    et l’optimisation des systèmes informatiques. Curieux et motivé, je suis constamment en quête de
                    nouveaux défis pour innover et apporter des solutions efficaces."
                    mail="https://www.google.com"
                    linkedin="https://www.linkedin.com"
                    side="left"
                    image="/images/nini_team.png"
                />

                <Home_team
                    title="Gjoni Ervin"
                    subtitle="Etudiant Indépendant & Co-Fondateur"
                    description="Passionné d’informatique depuis toujours, je suis animé par l’envie de contribuer
                    activement au monde digital qui nous entoure. Actuellement en Master en Architecture Informatique,
                    après un bachelier en Technologie Informatique, je développe une expertise solide dans la conception
                    et l’optimisation des systèmes informatiques. Curieux et motivé, je suis constamment en quête de
                    nouveaux défis pour innover et apporter des solutions efficaces."
                    mail="https://www.google.com"
                    linkedin="https://www.linkedin.com"
                    side="right"
                    image="/images/ervinou_team.png"
                />

                <Home_team
                    title="Abs Luca"
                    subtitle="Etudiant Indépendant & Co-Fondateur"
                    description="Passionné d’informatique depuis toujours, je suis animé par l’envie de contribuer
                    activement au monde digital qui nous entoure. Actuellement en Master en Architecture Informatique,
                    après un bachelier en Technologie Informatique, je développe une expertise solide dans la conception
                    et l’optimisation des systèmes informatiques. Curieux et motivé, je suis constamment en quête de
                    nouveaux défis pour innover et apporter des solutions efficaces."
                    mail="https://www.google.com"
                    linkedin="https://www.linkedin.com"
                    side="left"
                    image="/images/lvca_team.png"
                />

                <Home_team
                    title="Van Eenoo Arnaud"
                    subtitle="Etudiant Indépendant & Co-Fondateur"
                    description="Passionné d’informatique depuis toujours, je suis animé par l’envie de contribuer
                    activement au monde digital qui nous entoure. Actuellement en Master en Architecture Informatique,
                    après un bachelier en Technologie Informatique, je développe une expertise solide dans la conception
                    et l’optimisation des systèmes informatiques. Curieux et motivé, je suis constamment en quête de
                    nouveaux défis pour innover et apporter des solutions efficaces."
                    mail="https://www.google.com"
                    linkedin="https://www.linkedin.com"
                    side="right"
                    image="/images/me_team.png"
                />
            </section>
        </>
    );
}