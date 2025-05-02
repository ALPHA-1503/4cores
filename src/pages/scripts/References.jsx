import {useTranslation} from "react-i18next";

export default function References(){
    const { t } = useTranslation();
    const images = ["cisco.png","apple.png","php.png","ubiquiti.png",
        "sql.png","PaloAlto.png","linux.png","windows-server.png","ansible.png",
        "docker.png","k8s.svg","vmware.png","proxmox.png","react.png",
        "rpi.png","arduino.png","python.png","java.png","sass.png", "js.png", "figma.png"]

    return(
        <section className="references-baneer">
            <section className="top">
                <h1>{t('homepage.references')}</h1>
            </section>
            <section className="references-content">
                {images.map((image, index) => {
                    return (
                        <img className="images" key={index} src={`/images/${image}`} alt={`logo ${image}`}/>
                    )
                })}
            </section>
        </section>
    )
}