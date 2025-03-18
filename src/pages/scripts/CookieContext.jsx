import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const CookieContext = createContext();

export function CookieProvider({ children }) {
    const [cookieConsent, setCookieConsent] = useState(null);
    const [userLanguage, setUserLanguage] = useState('fr');

    useEffect(() => {
        const storedConsent = Cookies.get('cookieConsent');
        if (storedConsent !== undefined) {
            handleCookieChoice(storedConsent === 'true');
        }
    }, []);

    const handleCookieChoice = (choice) => {
        if (choice) {
            // Accepter les cookies
            Cookies.set('cookieConsent', 'true', { expires: 365 }); // expire dans 1 an
            Cookies.set('analytics', 'true', { expires: 365 });
            //ReactGA.initialize('YOUR-GA4-ID');

            const detectedLanguage = navigator.language || navigator.userLanguage;
            const language = detectedLanguage.startsWith('fr') ? 'fr' : 'en';
            setUserLanguage(language);

        } else {
            // Refuser les cookies - supprimer tous les cookies existants
            const cookies = Cookies.get(); // Obtient tous les cookies
            for (const cookie in cookies) {
                if (cookie !== 'cookieConsent' || cookie !== 'directus_session_token' ) { // garde le choix de l'utilisateur et token directus
                    Cookies.remove(cookie);
                }
            }

            // Exemple de configuration de cookie
            //Cookie.set('nomDuCookie', 'valeur', {
            //    expires: 7, // expire dans 7 jours
            //    path: '/',
            //    secure: true,  // cookie sécurisé (HTTPS uniquement)
            //    sameSite: 'strict'
            //});

            // Désactive GA
            //if (window.ga) {
            //    window['ga-disable-' + 'YOUR-GA4-ID'] = true;
            //}
            Cookies.set('cookieConsent', 'false', { expires: 365 });
            setUserLanguage('fr');
        }

        setCookieConsent(choice);
    };

    const value = {
        cookieConsent,
        userLanguage,
        handleCookieChoice
    };

    return (
        <CookieContext.Provider value={value}>
            {children}
        </CookieContext.Provider>
    );
}