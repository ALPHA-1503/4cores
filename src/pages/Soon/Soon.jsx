import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function Soon(){
    const { t } = useTranslation();

    return(
        <section className="Soon">
            <img src="/images/soon.png" alt="404"/>
            <h1 dangerouslySetInnerHTML={{__html: (t('soonpage.title'))}}/>
            <NavLink to="/Home"><h2>{t('soonpage.redirect')} ➜</h2></NavLink>
        </section>
    );
}