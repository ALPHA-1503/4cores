import {useTranslation} from "react-i18next";

export default function Skills(){
    const { t } = useTranslation();
    const images = ["cisco.png","ubiquiti.png","PaloAlto.png","proxmox.png",
        "k8s.svg","ansible.png","docker.png","vmware.png",
        "apple.png","android.svg",
        "php.png","js.png","typescript.png","react.png","sass.png",
        "python.png","java.png","sql.png",
        "linux.png","windows-server.png",
        "rpi.png","arduino.png",
        "figma.png"]

    return(
        <section className="home-skills">
            <section className="top">
                <h1>{t('homepage.skills')}</h1>
            </section>
            <section className="skills-content">
                {images.map((image, index) => {
                    return (
                        <img className="images" key={index} src={`/images/${image}`} alt={`logo ${image}`}/>
                    )
                })}
            </section>
        </section>
    )
}