import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function Not_found(){
    const { t } = useTranslation();
    return (
        <div className="Not-found">
            <img src="/images/404.png" alt="404"/>
            <h1 id="blue">404</h1>
            <h1 dangerouslySetInnerHTML={{__html: (t('notfoundpage.title'))}} />
            <NavLink to="/Home"><h2>{t('notfoundpage.redirect')} ➜</h2></NavLink>
        </div>
);
}