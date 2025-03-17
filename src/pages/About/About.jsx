import {NavLink} from "react-router-dom";
import Home_team from "../Home/Home-team.jsx";
import Home_team_mobile from "../Home/Home-team-mobile.jsx";
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

    const lvca = {
        title: "Abs Luca",
        subtitle: "Etudiant Indépendant & Co-Fondateur",
        description: `Passionné d’informatique depuis toujours, je suis animé par l’envie de contribuer
        activement au monde digital qui nous entoure. Actuellement en Master en Architecture Informatique,
        après un bachelier en Technologie Informatique, je développe une expertise solide dans la conception
        et l’optimisation des systèmes informatiques. Curieux et motivé, je suis constamment en quête de
        nouveaux défis pour innover et apporter des solutions efficaces.`,
        mail: "https://www.google.com",
        linkedin: "https://www.linkedin.com",
        image: "/images/lvca_team.png",
        image_mobile: "/images/lvca.png"
    };

    const ervinou = {
        title: "Gjoni Ervin",
        subtitle: "Etudiant Indépendant & Co-Fondateur",
        description:"Passionné de technologie et d’innovation, j’évolue dans le domaine de l’informatique depuis " +
            "plusieurs années. Actuellement en Master en Architecture des Systèmes à l’Hénallux, j’aiacquis une " +
            "solide expertise en réseaux, programmation, cybersécurité, IoT et développement web.En parallèle de mes " +
            "études, j'ai également pu travailler en milieux professionnel dansl'informatique ce qui m’a permis de " +
            "développer une approche rigoureuse et efficace pour résoudreles problèmes techniques et optimiser " +
            "les performances des équipements.",
        mail: "https://www.google.com",
        linkedin: "https://www.linkedin.com",
        image:"/images/ervinou_team.png",
        image_mobile:"/images/ervinou.png"
    }

    const nini = {
        title: "Jaunart Noé",
        subtitle: "Etudiant Indépendant & Co-Fondateur",
        description: "Passionné d’informatique depuis toujours, je suis animé par l’envie de contribueractivement " +
            "au monde digital qui nous entoure. Actuellement en Master en Architecture Informatique,après " +
            "un bachelier en Technologie Informatique, je développe une expertise solide dans la conceptionet " +
            "l’optimisation des systèmes informatiques. Curieux et motivé, je suis constamment en quête denouveaux " +
            "défis pour innover et apporter des solutions efficaces.",
        mail: "https://www.google.com",
        linkedin: "https://www.linkedin.com",
        image:"/images/nini_team.png",
        image_mobile:"/images/nini.png",
    }

    const arnaud = {
        title: "Van Eenoo Arnaud",
        subtitle: "Etudiant Indépendant & Co-Fondateur",
        description: "Passionné d’informatique depuis toujours, je suis animé par l’envie de contribueractivement " +
            "au monde digital qui nous entoure. Actuellement en Master en Architecture Informatique,après " +
            "un bachelier en Technologie Informatique, je développe une expertise solide dans la conceptionet " +
            "l’optimisation des systèmes informatiques. Curieux et motivé, je suis constamment en quête denouveaux " +
            "défis pour innover et apporter des solutions efficaces.",
        mail: "https://www.google.com",
        linkedin: "https://www.linkedin.com",
        image:"/images/me_team.png",
        image_mobile:"/images/me.png"
    }

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