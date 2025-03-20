import { useContext, useEffect, useState } from 'react';
import { CookieContext } from './CookieContext.jsx';
import Cookies from 'js-cookie';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {NavLink} from "react-router-dom";

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