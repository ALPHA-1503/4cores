import PropTypes from 'prop-types';

export default function About_team({ title, subtitle, description, mail, linkedin, side, image }) {
    return (
        <>
            {side === "left" ? (
                <section className="team">
                    <article className="left">
                        <img id="face" src={image} alt="Logo" />
                    </article>
                    <article className="right">
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                        <p dangerouslySetInnerHTML={{__html: description}} />
                        <article className="social">
                            {linkedin ? (
                                <a href={linkedin} target="_blank" rel="noreferrer">
                                    <img src="/images/linkedin.png" alt="linkedin" title="LinkedIn"/>
                                </a>
                            ) : null}
                            {mail ? (
                                <a href={`mailto:${mail}`} target="_blank" rel="noreferrer">
                                    <img src="/images/courrier-b.png" alt="mail" title="Email"/>
                                </a>
                            ) : null}
                        </article>
                    </article>
                </section>
            ) : (
                <section className="team-right">
                    <article className="left">
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                        <p dangerouslySetInnerHTML={{__html: description}} />
                        <article className="social">
                            {linkedin ? (
                                <a href={linkedin} target="_blank" rel="noreferrer">
                                    <img src="/images/linkedin.png" alt="linkedin" title="LinkedIn"/>
                                </a>
                            ) : null}
                            {mail ? (
                                <a href={`mailto:${mail}`} target="_blank" rel="noreferrer">
                                    <img id="mail" src="/images/courrier-b.png" alt="mail" title="Email"/>
                                </a>
                            ) : null}
                        </article>
                    </article>
                    <article className="right">
                        <img id="face" src={image} alt="Logo" />
                    </article>
                </section>
            )}
        </>
    );
}

About_team.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mail: PropTypes.string,
    linkedin: PropTypes.string,
    side: PropTypes.oneOf(['left', 'right']).isRequired,
};