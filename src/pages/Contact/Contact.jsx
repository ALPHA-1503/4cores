import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        services: [],
        message: "",
    });

    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                services: checked
                    ? [...prev.services, value]
                    : prev.services.filter((s) => s !== value),
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Format the message with HTML
        const formattedMessage = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #004E96; border-bottom: 2px solid #FFC300; padding-bottom: 10px;">Nouveau message de contact</h2>
            <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
                Un nouveau message a été envoyé via le formulaire de contact du site 4CORES.
            </p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong>Nom :</strong> ${formData.name} ${formData.surname}</p>
                <p><strong>Email :</strong> ${formData.email}</p>
                ${formData.services.length > 0 ?
            `<p><strong>Services demandés :</strong> ${formData.services.join(", ")}</p>` :
            ''}
                <div style="margin-top: 15px; border-top: 1px solid #ddd; padding-top: 15px;">
                    <h3 style="color: #003566; margin-bottom: 10px;">Message :</h3>
                    <p style="background-color: #fff; padding: 10px; border-left: 3px solid #FFC300; white-space: pre-line;">${formData.message}</p>
                </div>
            </div>
            <p style="font-size: 14px; color: #666; text-align: center;">
                Ce message a été envoyé automatiquement depuis le site web de 4CORES.
            </p>
        </div>
    `;

        try {
            const response = await fetch("http://127.0.0.1:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    recipientEmail: formData.email,
                    recipientName: `${formData.name} ${formData.surname}`,
                    subject: "Nouveau message de contact de " + formData.name + " " + formData.surname,
                    text: formattedMessage,
                    isHtml: true  // Add this flag to indicate HTML content
                }),
            });

            const result = await response.json();
            if (response.ok) {
                setSubmitSuccess(true);
            } else {
                alert("Erreur : " + result.error);
            }
        } catch (error) {
            alert("Erreur lors de l'envoi!");
        }
    };

    return (
        <section className="Contact">
            <section className="contact-left">
                <img src="/images/contact_white.png" alt="Contact"/>
                <h1>Contactez-nous</h1>
                <p>Vous avez une question ou une suggestion ? N'hésitez pas à nous contacter via notre formulaire.</p>
            </section>
            <section className="contact-right">
                {submitSuccess ? (
                    <div className="success-message">
                        <h2>Merci pour votre message !</h2>
                        <p>Nous avons bien reçu votre demande de contact. Un membre de l'équipe 4CORES vous répondra dans les plus brefs délais.</p>
                        <div className="contact-details">
                            <p><strong>Nom :</strong> {formData.name} {formData.surname}</p>
                            <p><strong>Email :</strong> {formData.email}</p>
                            {formData.services.length > 0 && (
                                <p><strong>Services demandés :</strong> {formData.services.join(", ")}</p>
                            )}
                            <div className="message-box">
                                <h3>Votre message :</h3>
                                <p>{formData.message}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <section className="name">
                            <article className="left">
                                <h1>Nom</h1>
                                <input type="text" name="name" placeholder="Dupont" required onChange={handleChange}/>
                            </article>
                            <article className="right">
                                <h1>Prénom</h1>
                                <input type="text" name="surname" placeholder="Jean" required onChange={handleChange}/>
                            </article>
                        </section>
                        <section className="email">
                            <h1>Email</h1>
                            <input type="email" name="email" placeholder="jeandupont@example.com" required onChange={handleChange}/>
                        </section>
                        <section className="services">
                            <h1>Services</h1>
                            <article className="checkbox">
                                {["Transition digitale", "Gestion", "Infrastructure", "Développement", "cloud"].map((service) => (
                                    <article key={service} className="row">
                                        <input type="checkbox" name={service} value={service} onChange={handleChange}/>
                                        <label>{service}</label>
                                    </article>
                                ))}
                            </article>
                        </section>
                        <section className="message">
                            <h1>Commentaire</h1>
                            <textarea name="message" placeholder="commentaire..." required onChange={handleChange}></textarea>
                        </section>
                        <button type="submit">Envoyer</button>
                    </form>
                )}
            </section>
        </section>
    );
}