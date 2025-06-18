import {useTranslation} from "react-i18next";

export default function Skills(){
    const { t } = useTranslation();
    const images = ["Cisco.png","Ubiquiti.png","PaloAlto.png","Proxmox.png","Pfsense.png",
        "Kubernetes.svg","Ansible.png","Docker.png","VMware.png",
        "Apple.png","Android.svg",
        "PHP.png","JavaScript.png","TypeScript.png","React.png","Sass.png",
        "Python.png","Java.png","SQL.png",
        "Linux.png","Windows Server.png",
        "Raspberry PI.png","Arduino.png",
        "Figma.png"]

    return(
        <section className="home-skills">
            <section className="top">
                <h1>{t('homepage.skills')}</h1>
            </section>
            <section className="skills-content">
                {images.map((image, index) => {
                    return (
                        <img className="images" key={index} src={`/images/skills/${image}`} alt={`logo ${image}`} title={image.split('.')[0]}/>
                    )
                })}
            </section>
        </section>
    )
}