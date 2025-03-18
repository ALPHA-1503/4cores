import { useContext, useEffect, useState } from 'react';
import { CookieContext } from './CookieContext.jsx';
import Cookies from 'js-cookie';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {NavLink} from "react-router-dom";

export default function CookieBanner() {
    const cookiesData = [
        {
            name: 'cookieConsent',
            domain: 'www.4cores.be',
            expiration: '1 an',
            description: 'Cookie utilisé pour vérifier le consentement de l\'utilisateur concernant l\'utilisation de cookies.'
        },
        {
            name: '_ga',
            domain: 'www.google.com',
            expiration: '2 ans',
            description: 'Cookies utilisés pour analyser le trafic au sein de notre site web. Ces cookies sont ' +
                'supprimés si l\'utilisateur ne donne pas son consentement.'
        },
    ];

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
                                                <th>Domaine</th>
                                                <th>Description</th>
                                                <th>Durée</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {cookiesData.map((cookie, index) => (
                                                <tr key={index}>
                                                    <td>{cookie.name}</td>
                                                    <td>{cookie.domain}</td>
                                                    <td>{cookie.description}</td>
                                                    <td>{cookie.expiration}</td>
                                                </tr>
                                            ))}
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