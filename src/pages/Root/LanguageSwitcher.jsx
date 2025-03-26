import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-buttons">
            <button className="flags-button" onClick={() => changeLanguage('en')}>
                <img className="flags" src="/flags/en.svg" alt="English" />
            </button>
            <button className="flags-button" onClick={() => changeLanguage('fr')}>
                <img className="flags" src="/flags/fr.svg" alt="French" />
            </button>
        </div>
    );
};

export default LanguageSwitcher;