import {NavLink} from "react-router-dom";

export default function Not_found(){
    return (
        <div className="Not-found">
            <img src="/images/404.png" alt="404"/>
            <h1 id="blue">404</h1>
            <h1><span id="blue">Oups! </span>Cette page n’existe pas...</h1>
            <NavLink to="/Home"><h2>Accueil ➜</h2></NavLink>
        </div>
);
}