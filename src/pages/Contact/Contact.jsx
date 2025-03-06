export default function Contact(){

    return(
        <section className="Contact">
            <section className="left">
                <img src="/images/contact_white.png" alt="Contact"/>
                <h1>Contactez-nous</h1>
                <p>Vous avez une question ou une suggestion ? N'hésitez pas à nous contacter via notre formulaire.</p>
            </section>
            <section className="right">
                <form>
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" placeholder="Votre nom" required/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Votre email" required/>

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Votre message" required></textarea>

                    <button type="submit">Envoyer</button>
                </form>
            </section>
        </section>
    );
}