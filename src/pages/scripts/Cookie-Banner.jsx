import { useContext, useEffect, useState } from 'react';
import { CookieContext } from './CookieContext.jsx';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../Root/LanguageSwitcher.jsx";

export default function CookieBanner() {
    const { t } = useTranslation();
    const { handleCookieChoice } = useContext(CookieContext);
    const [showBanner, setShowBanner] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const storedConsent = Cookies.get('cookieConsent');
        if (storedConsent === undefined) {
            setShowBanner(true);
        }
    }, []);

    useEffect(() => {
        const isMobile = () => window.innerWidth < 768;
        const handleResize = () => {
            if (showBanner && isMobile()) {
                document.documentElement.style.overflow = 'hidden';
                document.documentElement.style.height = '100%';
            } else {
                document.documentElement.style.overflow = '';
                document.documentElement.style.height = '';
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            document.documentElement.style.overflow = '';
            document.documentElement.style.height = '';
        };
    }, [showBanner]);

    const handleChoice = (choice) => {
        handleCookieChoice(choice);
        setShowBanner(false);
        Cookies.set('cookieConsent', choice.toString(), { expires: 365 });
    };

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

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

    const cookieClassName = showBanner ? "cookie-container active" : "cookie-container";
    const pageClassName = showBanner ? "page blurred" : "page";

    return (
        <section className={pageClassName}>
            <section className={cookieClassName}>
                <section className="cookie_banner">
                    <div className="cookie-banner-top">
                        <img src="/images/FULL_v1_white.png" alt="4Cores Logo"/>
                        <LanguageSwitcher />
                    </div>
                    {showDetails ? (
                        <section className="cookie-banner-mid">
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
                    ) : (
                        <section className="cookie-banner-mid">
                            <h1>{t('cookiepage.banner.title')}</h1>
                            <p>{t('cookiepage.banner.description')}</p>
                        </section>
                    )}
                    <section className="cookie_banner_btm">
                        <button type="button" id="cookies-more" onClick={toggleDetails}>
                            {showDetails ? t('cookiepage.less') : t('cookiepage.more')}
                        </button>
                        <button type="button" onClick={() => handleChoice(false)}>
                            {t('cookiepage.deny')}
                        </button>
                        <button type="button" onClick={() => handleChoice(true)}>
                            {t('cookiepage.accept')}
                        </button>
                    </section>
                </section>
            </section>
        </section>
    );
}