export default function Contact(){







    return(
        <section className="Contact">
            <section className="contact-left">
                <img src="/images/contact_white.png" alt="Contact"/>
                <h1>Contactez-nous</h1>
                <p>Vous avez une question ou une suggestion ? N'hésitez pas à nous contacter via notre formulaire.</p>
            </section>
            <section className="contact-right">
                <form>
                    <section className="name">
                        <article className="left">
                            <h1>Nom</h1>
                            <input type="text" id="name" name="name" placeholder="Dupont" required/>
                        </article>
                        <article className="right">
                            <h1>Prénom</h1>
                            <input type="text" name="surname" placeholder="Jean" required/>
                        </article>
                    </section>
                    <section className="email">
                        <h1>Email</h1>
                        <input type="email" name="email" placeholder="jeandupont@example.com" required/>
                    </section>
                    <section className="services">
                        <h1>Services</h1>
                        <article className="checkbox">
                            <article className="row">
                                <input type="checkbox" name="Transition digitale" value="service1"/>
                                <label htmlFor="Transition digitale">Transition digitale</label>
                            </article>
                            <article className="row">
                                <input type="checkbox" name="Gestion" value="Gestion"/>
                                <label htmlFor="Gestion">Gestion des applications</label>
                                <span></span>
                            </article>
                            <article className="row">
                                <input type="checkbox" name="Infrastructure"
                                       value="Infrastructure"/>
                                <label htmlFor="Infrastructure">Infrastructure sur site</label>
                            </article>
                            <article className="row">
                                <input type="checkbox" name="Développement" value="Développement"/>
                                <label htmlFor="Développement">Développement mobile</label>
                            </article>
                            <article className="row">
                                <input type="checkbox" name="cloud" value="cloud"/>
                                <label htmlFor="cloud">Infrastructure cloud</label>
                            </article>
                        </article>
                    </section>
                    <section className="message">
                        <h1>Commentaire</h1>
                        <textarea name="Commentaire" placeholder="commentaire..." required></textarea>
                    </section>
                    <section className="validation">
                        <input type="checkbox" id="" name="" value=""/>
                        <label htmlFor="">J'ai lu et j'accepte les conditions générales</label>
                    </section>
                    <button type="submit">Envoyer</button>
                </form>
            </section>
        </section>
    );
}