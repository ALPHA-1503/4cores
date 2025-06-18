import { useRef, useState, useEffect } from "react";
import {useTranslation} from "react-i18next";

export default function ProjectCard({ image, title, description, link }) {
    const [expanded, setExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);
    const descRef = useRef(null);
    const { t } = useTranslation();


    useEffect(() => {
        if (descRef.current) {
            setShowReadMore(descRef.current.scrollHeight > descRef.current.clientHeight);
        }
    }, [description]);

    return (
        <section className={`project-card${expanded ? " expanded" : ""}`}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <div className="description-container">
                <p ref={descRef}>{description}</p>

            </div>
            <section className="buttons-container">
                {showReadMore && !expanded && (
                    <button className="fancy-button" onClick={() => setExpanded(true)}>
                        {t('more')}
                    </button>
                )}
                {expanded && (
                    <button className="fancy-button" onClick={() => setExpanded(false)}>
                        {t('close')}
                    </button>
                )}
                <a href={link} target="_blank" className="fancy-button" rel="noopener noreferrer">
                    {t('consult')}
                </a>
            </section>
        </section>
    );
}