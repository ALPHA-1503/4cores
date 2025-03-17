export default function Home_team_mobile({image, title, subtitle, description, mail, linkedin}){
    return(
        <>
            <section className="team-mobile">
                <article className="top">
                    <img id="face" src={image} alt="Logo"/>
                </article>
                <article className="bottom">
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
        </>
    );
}