import { useState } from "react";
import {useTranslation} from "react-i18next";
import {t} from "i18next";

const ContactLeftSection = () => (
    <section className="contact-left">
        <img src="/images/contact_white.png" alt="Contact"/>
        <h1>{t('contactpage.title')}</h1>
        <p>{t('contactpage.description')}</p>
    </section>
);

const LoadingSpinner = () => (
    <div className="loading-spinner">
        <div className="spinner"></div>
        <p>{t('contactpage.sending')}</p>
    </div>
);

const SuccessMessage = ({ formData }) => (
    <div className="success-message">
        <h2>{t('contactpage.success-message.title')}</h2>
        <p>{t('contactpage.success-message.description')}</p>
        <div className="contact-details">
            <p><strong>{t('contactpage.success-message.name')}</strong> {formData.name} {formData.surname}</p>
            {formData.company && <p><strong>{t('contactpage.success-message.company')}</strong> {formData.company}</p>}
            <p><strong>{t('contactpage.success-message.email')}</strong> {formData.email}</p>
            {formData.services.length > 0 && (
                <p><strong>{t('contactpage.success-message.services')}</strong> {formData.services.join(", ")}</p>
            )}
            <div className="message-box">
                <h3>{t('contactpage.success-message.message')}</h3>
                <p>{formData.message}</p>
            </div>
        </div>
    </div>
);

const ContactForm = ({ formData, handleChange, handleSubmit, isLoading }) => {
    const {t} = useTranslation();
    const services = [t('contactpage.transition'), t('contactpage.web-dev'), t('contactpage.mobile-dev'), t('contactpage.dev'), "Cloud", "Infrastructure", t('contactpage.security'), t('contactpage.other')];


    return (
        <form onSubmit={handleSubmit}>
            <section className="name">
                <article className="left">
                    <h1>{t('contactpage.name')}</h1>
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
                    <h1>{t('contactpage.surname')}</h1>
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
            <section className="email">
                <h1>{t('contactpage.company')}</h1>
                <input
                    type="text"
                    name="company"
                    placeholder={t('contactpage.company-placeholder')}
                    onChange={handleChange}
                    disabled={isLoading}
                />
            </section>

            <section className="services">
                <h1>{t('contactpage.services')}</h1>
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
                <h1>{t('contactpage.comments')}</h1>
                <textarea
                    name="message"
                    placeholder={t('contactpage.comments-placeholder')}
                    required
                    onChange={handleChange}
                    disabled={isLoading}
                ></textarea>
            </section>

            <button type="submit" disabled={isLoading}>
                {isLoading ? t('contactpage.sending') : t('contactpage.send')}
            </button>
        </form>
    );
};

const createNotificationEmail = (formData) => {
    const lang = localStorage.getItem("i18nextLng") || "en";
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #004E96; border-bottom: 2px solid #FFC300; padding-bottom: 10px;">Nouveau message de contact</h2>
      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
        Un nouveau message a été envoyé via le formulaire de contact du site 4CORES.
      </p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <p><strong>Nom :</strong> ${formData.name} ${formData.surname}</p>
        ${formData.company ? `<p><strong>Entreprise :</strong> ${formData.company}</p>` : ''}
        <p><strong>Email :</strong> ${formData.email}</p>
        <p><strong>Langue : </strong>${lang}</p>
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
      <h2 style="color: #004E96; text-align: center; margin-bottom: 20px;">${t('contactpage.customer-email.greetings')}</h2>
      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
        ${t('contactpage.customer-email.title')} ${formData.name} ${formData.surname},
      </p>
      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
        ${t('contactpage.customer-email.description')}
      </p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #003566; margin-bottom: 10px;">${t('contactpage.customer-email.recap')}</h3>
        ${formData.services.length > 0 ?
        `<p><strong>${t('contactpage.customer-email.services')}</strong> ${formData.services.join(", ")}</p>` :
        ''}
        <p><strong>${t('contactpage.customer-email.message')}</strong></p>
        <p style="background-color: #fff; padding: 10px; border-left: 3px solid #FFC300; white-space: pre-line; font-style: italic;">${formData.message}</p>
      </div>
      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
        ${t('contactpage.customer-email.info')}
      </p>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
        <p style="color: #004E96; font-weight: bold;">${t('contactpage.customer-email.team')}</p>
        <p style="font-size: 14px; color: #666;">
          <a href="https://www.4cores.be" style="color: #004E96; text-decoration: none;">www.4cores.be</a>
        </p>
        <div style="margin-top: 10px;">
          <a href="https://linkedin.com/company/4cores" style="margin: 0 10px; color: #004E96; text-decoration: none;">LinkedIn</a>
          <a href="mailto:contact@4cores.be" style="margin: 0 10px; color: #004E96; text-decoration: none;">contact@4cores.be</a>
        </div>
      </div>
    </div>
  `;
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        company:"",
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
            const notificationResponse = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    recipientEmail: "contact@4cores.be",
                    recipientName: "4CORES",
                    subject: `Nouveau message de contact de ${formData.name} ${formData.surname}`,
                    text: createNotificationEmail(formData),
                    isHtml: true
                }),
            });

            if (!notificationResponse.ok) {
                const errorText = await notificationResponse.text();
                throw new Error(`${t('contactpage.email-content.sending-error')} ${errorText}`);
            }

            const contentType = notificationResponse.headers.get("content-type");
            const notificationResult = contentType && contentType.includes("application/json")
                ? await notificationResponse.json()
                : await notificationResponse.text();

            if (!notificationResponse.ok) {
                throw new Error(`${t('contactpage.email-content.sending-error')} ${notificationResult.error}`);
            }

            const confirmationResponse = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    recipientEmail: formData.email,
                    recipientName: `${formData.name} ${formData.surname}`,
                    subject: t('contactpage.email-content.confirmation'),
                    text: createCustomerEmail(formData),
                    isHtml: true
                }),
            });

            if (!confirmationResponse.ok) {
                const errorText = await confirmationResponse.text();
                throw new Error(`${t('contactpage.email-content.sending-error')} ${errorText}`);
            }

            setIsSubmitted(true);
            setSubmitSuccess(true);

        } catch (err) {
            alert(`${t('contactpage.email-content.error')} ${err.message || t('contactpage.email-content.sending-error')}`);
            console.error(t('contactpage.email-content.sending-error'), err);
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