import {useTranslation} from "react-i18next";

export default function Cookie(){
    const { t } = useTranslation();

    const cookiesData = [
        {
            name: t('cookiepage.cookie-consent.name'),
            domain: t('cookiepage.cookie-consent.domain'),
            expiration: t('cookiepage.cookie-consent.expiration'),
            description: t('cookiepage.cookie-consent.description')
        },
        {
            name: t('cookiepage.cookie-ga.name'),
            domain: t('cookiepage.cookie-ga.domain'),
            expiration: t('cookiepage.cookie-ga.expiration'),
            description: t('cookiepage.cookie-ga.description')
        },
    ];

    return(
        <section className="cookies">
            <section className="cookies-top">
                <h2>4CORES</h2>
                <h1>{t('cookiepage.title')}</h1>
                <p>{t('cookiepage.description')}</p>
                <section className="cookies-table">
                    <table>
                        <thead>
                        <tr>
                            <th>{t('cookiepage.name')}</th>
                            <th>{t('cookiepage.domain')}</th>
                            <th>{t('cookiepage.expiration')}</th>
                            <th>{t('cookiepage.cookie-description')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cookiesData.map((cookie, index) => (
                            <tr key={index}>
                                <td>{cookie.name}</td>
                                <td>{cookie.domain}</td>
                                <td>{cookie.expiration}</td>
                                <td>{cookie.description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </section>

        </section>
    );
}