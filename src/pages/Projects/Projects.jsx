import React, { useState } from "react";
import ProjectCard from "./Project-card.jsx";
import { Pagination } from "antd";
import "antd/dist/reset.css";

export default function Projects() {

    const projects = [
        {
            image : "/images/projects/top-airsoft.jpg",
            title : "BELGIUM AIRSOFT",
            description : "Le projet Belgium Airsoft est un projet initié par un des fondateurs de 4cores. La plateforme offre des conseils, des comparaisons d'équipements et un " +
                "guide pratique pour aider les débutants et les joueurs expérimentés à découvrir tous les aspects " +
                "de l'airsoft en toute sécurité.",
            link : "https://www.belgiumairsoft.be",
        },
        {
            image : "/images/projects/eurogreen.jpeg",
            title : "EUROGREEN",
            description : "Eurogreen est une entreprise spécialisée dans les travaux publics, plus particulièrement " +
                "dans la création et l'aménagement d'espaces verts. Fondée en 1990 et basée à Sombreffe, l'entreprise " +
                "dispose d'une équipe de jardiniers professionnels, d'un bureau d'études, d'un service technique " +
                "avec un architecte-paysagiste, et d'un atelier mécanique.",
            link : "https://eurogreen.4cores.be",
        },
        {
            image : "/images/projects/eyup.png",
            title : "PLAFONNAGE EYUP OZDIL",
            description : "Ce projet concerne les services offerts par Plafonnage Eyup Ozdil SRL. " +
                "L'entreprise est spécialisée dans les services de plafonnage intérieur pour les nouvelles " +
                "constructions et les rénovations, l'installation de cloisons en plaques de plâtre ou en matériaux " +
                "isolants, et l'application de revêtements.",
            link : "https://ecplafonnage.be",
        }
    ]

    const [current, setCurrent] = useState(1);
    const pageSize = 3;

    const paginatedProjects = projects.slice((current - 1) * pageSize, current * pageSize);

    return(
        <section className="projects">
            <section className="projects-top">
                <h2>4CORES</h2>
                <h1>Réalisations</h1>
                <p>Au fil de nos projets, nous avons eu l’opportunité de collaborer avec des entreprises et
                    organisations aux besoins variés. Chaque réalisation est le fruit d’une écoute attentive,
                    d’une approche sur mesure et de la mise en œuvre de nos compétences techniques.</p>
                <p>Découvrez ci-dessous quelques-unes de nos collaborations, qui illustrent notre capacité à
                    transformer des idées en solutions concrètes.</p>
            </section>
            <section className="projects-bottom">
                {paginatedProjects.map((p, idx) => (
                    <ProjectCard
                        key={p.title + idx}
                        image={p.image}
                        title={p.title}
                        description={p.description}
                        link={p.link}
                    />
                ))}
            </section>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
                <Pagination
                    current={current}
                    pageSize={pageSize}
                    total={projects.length}
                    onChange={setCurrent}
                    showSizeChanger={false}
                />
            </div>
        </section>
    );
}