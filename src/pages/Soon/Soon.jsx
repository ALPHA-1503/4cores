import {NavLink} from "react-router-dom";

export default function Soon(){

    return(
        <section className="Soon">
            <img src="/images/soon.png" alt="404"/>
            <h1>Encore un peu de ✨ <span id="blue">magie</span> ✨ à ajouter... Restez connectés !</h1>
            <NavLink to="/Home"><h2>Accueil ➜</h2></NavLink>
        </section>
    );
}