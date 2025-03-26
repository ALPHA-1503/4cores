function Relation_card({title, text}){
    return(
        <section className="relation-card">
            <article className="card-top">
                <img src="/images/check.png" alt="check logo"/>
                <h1>{title}</h1>
            </article>
            <p>{text}</p>
        </section>
    )
}

export default function Home_relation() {

    return (
        <section className="home-relation">
            <article className="top">
                <h1>Relation client</h1>
                <p>Notre engagement est de vous accompagner avec des services sur mesure, conçus pour répondre
                    précisément
                    à vos besoins et aux défis spécifiques de votre activité. Grâce à une approche personnalisée,
                    nous vous offrons des solutions évolutives, un support réactif et un suivi rigoureux. </p>
            </article>
            <section className="bottom">
                <article className="left">
                    <Relation_card
                        title={"Suivi personnalisé"}
                        text={"Nous adaptons nos solutions à vos besoins en vous offrant un service personnalisé et évolutif." +
                            " Profitez d’un suivi dédié pour optimiser votre environnement informatique et intégrez rapidement" +
                            " de nouvelles fonctionnalités selon l’évolution de votre activité."}
                    />
                    <Relation_card
                        title={"Garantie"}
                        text={"Bénéficiez d’une garantie de 6 mois sur nos services et solutions, " +
                            "vous assurant une tranquillité d’esprit. Notre engagement est de vous fournir " +
                            "un environnement informatique fiable et durable, en toute sérénité."}
                    />
                    <Relation_card
                        title={"Sécurité"}
                        text={"La protection de vos données est notre priorité. Nos solutions garantissent un " +
                            "haut niveau de sécurité pour préserver l’intégrité et la confidentialité " +
                            "de vos informations sensibles."}
                    />
                    <Relation_card
                        title={"Expérience"}
                        text={"Au cours de notre formation, nous avons accordé une importance primordiale " +
                            "à la relation client. Grâce à des mises en situation concrètes, nous avons développé " +
                            "nos compétences en collaboration et renforcé nos soft skills, essentielles pour " +
                            "une communication efficace et professionnelle."}
                    />
                </article>
                <article className="right">
                    <img src="/images/relation.png" alt="relation"/>
                </article>
            </section>

        </section>
    )
}