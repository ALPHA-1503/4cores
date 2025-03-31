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

export default function Home_relation({title, description, cards}) {

    return (
        <section className="home-relation">
            <article className="top">
                <h1>{title}</h1>
                <p>{description}</p>
            </article>
            <section className="bottom">
                <article className="left">
                    {cards.map(card => (
                        <Relation_card
                            key={card.title}
                            title={card.title}
                            text={card.text}
                        />
                    ))}
                </article>
                <article className="right">
                    <img src="/images/relation.png" alt="relation"/>
                </article>
            </section>

        </section>
    )
}