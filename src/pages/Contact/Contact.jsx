import { useState } from "react";

// Component for the left section of the contact page
const ContactLeftSection = () => (
    <section className="contact-left">
        <img src="/images/contact_white.png" alt="Contact"/>
        <h1>Contactez-nous</h1>
        <p>Vous avez une question ou une suggestion ? N'hésitez pas à nous contacter via notre formulaire.</p>
    </section>
);

const LoadingSpinner = () => (
    <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Envoi en cours...</p>
    </div>
);

const SuccessMessage = ({ formData }) => (
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
);

const ContactForm = ({ formData, handleChange, handleSubmit, isLoading }) => {
    const services = ["Transition digitale", "Gestion applications", "Infrastructure", "Développement", "Cloud"];

    return (
        <form onSubmit={handleSubmit}>
            <section className="name">
                <article className="left">
                    <h1>Nom</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Dupont"
                        required
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                </article>
                <article className="right">
                    <h1>Prénom</h1>
                    <input
                        type="text"
                        name="surname"
                        placeholder="Jean"
                        required
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                </article>
            </section>

            <section className="email">
                <h1>Email</h1>
                <input
                    type="email"
                    name="email"
                    placeholder="jeandupont@example.com"
                    required
                    onChange={handleChange}
                    disabled={isLoading}
                />
            </section>

            <section className="services">
                <h1>Services</h1>
                <article className="checkbox">
                    {services.map((service) => {
                        const id = `service-${service}`;
                        return (
                            <article key={service} className="row">
                                <input
                                    type="checkbox"
                                    id={id}
                                    name={service}
                                    value={service}
                                    onChange={handleChange}
                                    disabled={isLoading}
                                />
                                <label htmlFor={id}>{service}</label>
                            </article>
                        );
                    })}
                </article>
            </section>

            <section className="message">
                <h1>Commentaire</h1>
                <textarea
                    name="message"
                    placeholder="commentaire..."
                    required
                    onChange={handleChange}
                    disabled={isLoading}
                ></textarea>
            </section>

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Envoi en cours...' : 'Envoyer'}
            </button>
        </form>
    );
};

const createNotificationEmail = (formData) => {
    return `
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
};

const createCustomerEmail = (formData) => {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #004E96; text-align: center; margin-bottom: 20px;">Merci pour votre message !</h2>
      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
        Bonjour ${formData.name} ${formData.surname},
      </p>
      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
        Nous vous confirmons la bonne réception de votre message. Un membre de notre équipe vous contactera dans les plus brefs délais.
      </p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #003566; margin-bottom: 10px;">Récapitulatif de votre demande :</h3>
        ${formData.services.length > 0 ?
        `<p><strong>Services demandés :</strong> ${formData.services.join(", ")}</p>` :
        ''}
        <p><strong>Votre message :</strong></p>
        <p style="background-color: #fff; padding: 10px; border-left: 3px solid #FFC300; white-space: pre-line; font-style: italic;">${formData.message}</p>
      </div>
      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
        Si vous avez d'autres questions ou informations à nous communiquer, n'hésitez pas à répondre directement à cet email.
      </p>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
        <p style="color: #004E96; font-weight: bold;">L'équipe 4CORES</p>
        <p style="font-size: 14px; color: #666;">
          <a href="https://www.4cores.be" style="color: #004E96; text-decoration: none;">www.4cores.be</a>
        </p>
        <div style="margin-top: 10px;">
          <a href="https://linkedin.com/company/4cores" style="margin: 0 10px; color: #004E96; text-decoration: none;">LinkedIn</a>
          <a href="mailto:contact@4cores.com" style="margin: 0 10px; color: #004E96; text-decoration: none;">contact@4cores.be</a>
        </div>
      </div>
    </div>
  `;
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        services: [],
        message: "",
    });

    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let processedValue = value;

        if (name === "email") {
            processedValue = value.toLowerCase();
        }

        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                services: checked
                    ? [...prev.services, value]
                    : prev.services.filter((s) => s !== value),
            }));
        } else {
            setFormData({ ...formData, [name]: processedValue });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isLoading || isSubmitted) {
            return;
        }

        setIsLoading(true);

        try {
            const notificationResponse = await fetch("http://127.0.0.1:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    recipientEmail: "arnaud.vaneenoo10@gmail.com", // Your business email
                    recipientName: "4CORES",
                    subject: `Nouveau message de contact de ${formData.name} ${formData.surname}`,
                    text: createNotificationEmail(formData),
                    isHtml: true
                }),
            });

            const notificationResult = await notificationResponse.json();

            if (!notificationResponse.ok) {
                throw new Error(`Erreur lors de l'envoi de la notification: ${notificationResult.error}`);
            }

            const confirmationResponse = await fetch("http://127.0.0.1:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    recipientEmail: formData.email, // Customer's email
                    recipientName: `${formData.name} ${formData.surname}`,
                    subject: "Confirmation de réception de votre message - 4CORES",
                    text: createCustomerEmail(formData),
                    isHtml: true
                }),
            });

            const confirmationResult = await confirmationResponse.json();

            if (!confirmationResponse.ok) {
                throw new Error(`Erreur lors de l'envoi de la confirmation: ${confirmationResult.error}`);
            }

            setIsSubmitted(true);
            setSubmitSuccess(true);

        } catch (err) {
            alert(`Erreur: ${err.message || "Erreur lors de l'envoi!"}`);
            console.error("Email sending error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="Contact">
            <ContactLeftSection />
            <section className="contact-right">
                {isLoading && <LoadingSpinner />}
                {submitSuccess ? (
                    <SuccessMessage formData={formData} />
                ) : (
                    <ContactForm
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        isLoading={isLoading}
                    />
                )}
            </section>
        </section>
    );
}