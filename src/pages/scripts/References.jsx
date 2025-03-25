export default function References(){

    const images = ["/images/cisco.png","/images/apple.png","/images/php.png","/images/ubiquiti.png",
        "/images/sql.png","/images/PaloAlto.png","/images/linux.png","/images/windows-server.png","/images/ansible.png",
    "/images/docker.png","/images/k8s.svg","/images/vmware.png","/images/proxmox.png","/images/react.png",
        "/images/rpi.png","/images/arduino.png"]

    return(
        <section className="references-baneer">
            <section className="top">
                <h1>Références</h1>
            </section>
            <section className="references-content">
                {images.map((image, index) => {
                    return (
                        <img className="images" key={index} src={image} alt="references images"/>
                    )
                })}
            </section>
        </section>
    )
}