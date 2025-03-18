import { useContext, useEffect, useState } from 'react';
import { CookieContext } from './CookieContext.jsx';
import Cookies from 'js-cookie';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function CookieBanner() {
    const { handleCookieChoice, cookieConsent } = useContext(CookieContext);
    const [isVisible, setIsVisible] = useState(true);
    const [showCookieInfo, setShowCookieInfo] = useState(false);

    useEffect(() => {
        const storedConsent = Cookies.get('cookieConsent');
        if (storedConsent !== undefined) {
            setIsVisible(false);
        }
    }, []);

    const handleChoice = (choice) => {
        handleCookieChoice(choice);
        setIsVisible(false);
        Cookies.set('cookieConsent', choice.toString(), { expires: 365 });
    };

    const toggleCookieInfo = () => {
        setShowCookieInfo(!showCookieInfo);
    };

    const handleClose = () => {
        setShowCookieInfo(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie">
            <div className="cookie_banner">
                <div className="cookie_banner_top">
                    <h1>Nous respectons votre vie privée</h1>
                </div>
                <div className="cookie_banner_mid">
                    <div className="cookie_banner_mid_top">
                        <p>Ce site web utilise uniquement des cookies essentiels pour mémoriser votre langue par défaut et analyser son trafic.</p>
                    </div>
                    <div className="cookie_banner_mid_btm">
                        {!showCookieInfo && (
                            <a onClick={toggleCookieInfo} style={{ cursor: 'pointer' }}>Plus d'informations.</a>
                        )}
                        {showCookieInfo && (
                            <div className="cookies-info">
                                <a onClick={handleClose} style={{ cursor: 'pointer' }}>Fermer</a>
                                <SimpleBar style={{height: '250px'}}>
                                    <div className="cookie-table-container">
                                        <table className="cookie-table">
                                            <thead>
                                            <tr>
                                                <th>Cookie</th>
                                                <th>Type</th>
                                                <th>Description</th>
                                                <th>Durée</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>cookieConsent</td>
                                                <td><span className="type-tag">Nécessaire</span></td>
                                                <td>Enregistre vos préférences concernant l'utilisation des cookies sur
                                                    notre site
                                                </td>
                                                <td><span className="duration-tag">1 an</span></td>
                                            </tr>
                                            <tr>
                                                <td>lang</td>
                                                <td><span className="type-tag">Facultatif</span></td>
                                                <td>Stocke en mémoire le choix de votre langue</td>
                                                <td><span className="duration-tag">session</span></td>
                                            </tr>
                                            <tr>
                                                <td>_ga</td>
                                                <td><span className="type-tag">Analytique</span></td>
                                                <td>Utilisé par Google Analytics pour distinguer les utilisateurs
                                                    uniques
                                                </td>
                                                <td><span className="duration-tag">2 ans</span></td>
                                            </tr>
                                            <tr>
                                                <td>Maps</td>
                                                <td><span className="type-tag">Analytique</span></td>
                                                <td>Utilisé par Google pour générer la carte dans la page contact</td>
                                                <td><span className="duration-tag">1 à 2 ans</span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </SimpleBar>
                            </div>
                        )}
                    </div>
                </div>
                <div className="cookie_banner_btm">
                    <button id="decline" onClick={() => handleChoice(false)}>
                        REFUSER
                    </button>
                    <button id="accept" onClick={() => handleChoice(true)}>
                        ACCEPTER
                    </button>
                </div>
            </div>
        </div>
    );
}