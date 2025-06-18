import About_team from "./About-team.jsx";
import Home_team_mobile from "./About-team-mobile.jsx";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

export default function About(){
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

    const lvca = {
        title: t('aboutpage.team.lvca.name'),
        subtitle: t('aboutpage.team.lvca.role'),
        description: t('aboutpage.team.lvca.description'),
        mail: "absluca419@gmail.com",
        linkedin: "https://www.linkedin.com/in/abs-luca/",
        image: "/images/lvca_team.png",
        image_mobile: "/images/lvca.png"
    };

    const ervinou = {
        title: t('aboutpage.team.ervinou.name'),
        subtitle: t('aboutpage.team.ervinou.role'),
        description:t('aboutpage.team.ervinou.description'),
        mail: "ervingjoni3@gmail.com",
        linkedin: "https://www.linkedin.com/in/ervin-gjoni-04995927a/",
        image:"/images/ervinou_team.png",
        image_mobile:"/images/ervinou.png"
    }

    const nini = {
        title: t('aboutpage.team.nini.name'),
        subtitle: t('aboutpage.team.nini.role'),
        description: t('aboutpage.team.nini.description'),
        mail: "noe.jaunart24@gmail.com",
        image:"/images/nini_team.png",
        image_mobile:"/images/ninilesot.jpg",
    }

    const arnaud = {
        title: t('aboutpage.team.sac.name'),
        subtitle: t('aboutpage.team.sac.role'),
        description: t('aboutpage.team.sac.description'),
        mail: "arnaud.vaneenoo10@gmail.com",
        linkedin: "https://www.linkedin.com/in/arnaud-van-eenoo-986bb2275/",
        image:"/images/arnaud_team.png",
        image_mobile:"/images/arnaud.jpg"
    }

    return(
        <>
            <section className="about">
                <section className="about-top">
                    <h2>4CORES</h2>
                    <h1>{t('aboutpage.title')}</h1>
                    <p dangerouslySetInnerHTML={{__html: (t('aboutpage.top-description1'))}}></p>
                    <p>{t('aboutpage.top-description2')}</p>
                </section>
                <section className="about-bottom">
                    <img className="about-img" src="/images/about.png" alt="about image"/>
                </section>
            </section>
            <section className="about-team">
                <article className="top">
                    <h1>{t('aboutpage.team.title')}</h1>
                </article>
                <About_team
                    title={nini.title}
                    subtitle={nini.subtitle}
                    description={nini.description}
                    mail={nini.mail}
                    linkedin={nini.linkedin}
                    side="left"
                    image={nini.image}
                />

                <About_team
                    title={ervinou.title}
                    subtitle={ervinou.subtitle}
                    description={ervinou.description}
                    mail={ervinou.mail}
                    linkedin={ervinou.linkedin}
                    side="right"
                    image={ervinou.image}
                />

                <About_team
                    title={lvca.title}
                    subtitle={lvca.subtitle}
                    description={lvca.description}
                    mail={lvca.mail}
                    linkedin={lvca.linkedin}
                    side="left"
                    image={lvca.image}
                />

                <About_team
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