import {NavLink} from "react-router-dom";

export default function Service_card({title, services}){

    return(
        <>
            <section className="service-card">
                <article className="service-top">
                    <h2>{title}</h2>
                    {services.map((service, index) => (
                        <article className="service-row" key={index}>
                            <img src="/images/coche.png" alt="Coche"/>
                            <p>{service}</p>
                        </article>
                    ))}
                </article>
                <article className="service-bottom">
                    <NavLink to="/Contact">Contact ➜</NavLink>
                </article>
            </section>
        </>
    );
}