import { NavLink, Outlet } from 'react-router-dom';

export default function Home(){

    return(
        <section className="home-top">
            <h1>Des <span className="blue">solutions</span> technologiques intégrées pour une performance optimale de <span className="blue">votre entreprise.</span></h1>
            <h2>Toutes les entreprises méritent un environnement informatique de qualité et abordable.</h2>
            <article className="buttons">
                <NavLink to="/" id="propos">A propos</NavLink>
                <NavLink to="/" id="realisations">Réalisations</NavLink>
            </article>
        </section>
    );
}