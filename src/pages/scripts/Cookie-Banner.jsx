import { useContext, useEffect, useState } from 'react';
import { CookieContext } from './CookieContext.jsx';
import Cookies from 'js-cookie';
import {NavLink} from "react-router-dom";

export default function CookieBanner() {
    const { handleCookieChoice, cookieConsent } = useContext(CookieContext);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const storedConsent = Cookies.get('cookieConsent');

        if (storedConsent === undefined) {
            setShowBanner(true);
        }
    }, []);

    const handleChoice = (choice) => {
        handleCookieChoice(choice);
        setShowBanner(false);
        Cookies.set('cookieConsent', choice.toString(), { expires: 365 });
    };

    const cookieClassName = showBanner ? "cookie active" : "cookie";

    return (
        <div className={cookieClassName}>
            <div className="cookie_banner">
                <div className="cookie_banner_top">
                    <h1>Nous respectons votre vie privée</h1>
                </div>
                <div className="cookie_banner_mid">
                    <div className="cookie_banner_mid_top">
                        <p>Ce site web utilise uniquement des cookies essentiels pour mémoriser votre langue par défaut et analyser son trafic.</p>
                    </div>
                    <div className="cookie_banner_mid_btm">
                        <NavLink to="/cookie">En savoir plus.</NavLink>
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