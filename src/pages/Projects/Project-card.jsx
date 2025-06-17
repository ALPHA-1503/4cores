export default function ProjectCard({image, title, description, link}) {

    return(
        <section className="project-card">
            <img src={image}></img>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={link} target="_blank" className="fancy-button">Consulter</a>
        </section>
    );
}