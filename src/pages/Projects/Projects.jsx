import React, { useState } from "react";
import ProjectCard from "./Project-card.jsx";
import { Pagination } from "antd";
import "antd/dist/reset.css";
import {useTranslation} from "react-i18next";

export default function Projects() {
    const { t } = useTranslation();

    const projects = [
        {
            image : "/images/projects/top-airsoft.jpg",
            title : t('projectspage.belgium-airsoft.title'),
            description : t('projectspage.belgium-airsoft.description'),
            link : "https://www.belgiumairsoft.be",
        },
        {
            image : "/images/projects/eurogreen.jpeg",
            title : t('projectspage.eurogreen.title'),
            description : t('projectspage.eurogreen.description'),
            link : "https://eurogreen.4cores.be",
        },
        {
            image : "/images/projects/eyup.png",
            title : t('projectspage.eyup.title'),
            description : t('projectspage.eyup.description'),
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
                <h1>{t('projectspage.title')}</h1>
                <p>{t('projectspage.description-pt1')}</p>
                <p>{t('projectspage.description-pt2')}</p>
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