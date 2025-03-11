import {NavLink} from "react-router-dom";
import Home_team from "../Home/Home-team.jsx";
import {useEffect} from "react";

export default function About(){
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
            <section className="about">
                <section className="about-top">
                    <h2>4CORES</h2>
                    <h1>A propos de nous</h1>
                    <p>Nous sommes une association de quatre étudiants indépendants, actuellement en première année de
                        Master en architecture des systèmes informatiques. Diplômés en 2024 d’un Bachelier en
                        technologie de l’informatique à l’Hénallux, nous unissons nos compétences et notre passion
                        pour offrir des solutions adaptées <span id="blue">à vos besoins.</span></p>
                    <p>Grâce à nos expertises complémentaires, nous couvrons divers domaines : réseau, développement
                        web, IoT et administration système (Linux et Windows). Cette synergie nous permet d’accompagner
                        votre entreprise dans ses défis technologiques et d’optimiser ses performances avec des
                        solutions innovantes.</p>
                </section>
                <section className="about-bottom">
                    <img className="about-img" src="/images/about.png" alt="about image"/>
                </section>
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
                    description="Passionné de technologie et d’innovation, j’évolue dans le domaine de l’informatique
                    depuis plusieurs années. Actuellement en Master en Architecture des Systèmes à l’Hénallux, j’ai
                    acquis une solide expertise en réseaux, programmation, cybersécurité, IoT et développement web.

                    En parallèle de mes études, j'ai également pu travailler en milieux professionnel dans
                    l'informatique ce qui m’a permis de développer une approche rigoureuse et efficace pour résoudre
                    les problèmes techniques et optimiser les performances des équipements."
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