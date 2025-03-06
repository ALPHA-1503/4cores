export default function Home_team({title, subtitle, description, mail, linkedin, side}){
    return(
        <section className="team">
            <article className="left">
                <img id="face" src="/images/nini_team.png" alt="Logo"/>
            </article>
            <article className="right">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{description}</p>
                <article className="social">
                    {mail ? (
                        <a href={mail} target="_blank" rel="noreferrer">
                            <img src="/images/linkedin.png" alt="linkedin"/>
                        </a>
                    ) : null}
                    {linkedin ? (
                        <a href={linkedin} target="_blank" rel="noreferrer">
                            <img src="/images/courrier-b.png" alt="mail"/>
                        </a>
                    ) : null}
                </article>
            </article>
        </section>
    );
}