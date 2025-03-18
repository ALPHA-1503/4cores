export default function Cookie(){

    const cookiesData = [
        {
            name: 'cookieConsent',
            domain: 'www.4cores.be',
            expiration: '1 an',
            description: 'Cookie utilisé pour vérifier le consentement de l\'utilisateur concernant l\'utilisation de cookies.'
        },
        {
            name: '_ga',
            domain: 'www.google.com',
            expiration: '2 ans',
            description: 'Cookies utilisés pour analyser le trafic au sein de notre site web. Ces cookies sont ' +
                'supprimés si l\'utilisateur ne donne pas son consentement.'
        },
    ];

    return(
        <section className="cookies">
            <section className="cookies-top">
                <h2>4CORES</h2>
                <h1>Politique de cookies</h1>
                <p>Nous avons fait le choix d’utiliser le moins de cookies possible afin de
                    préserver votre vie privée. Nous n’intégrons aucun cookie à des fins publicitaires, de revente
                    de données ou de suivi intrusif, car ces pratiques vont à l’encontre de nos valeurs. Notre priorité
                    est de vous offrir une expérience de navigation respectueuse et la plus anonyme possible. Seuls les
                    cookies strictement nécessaires au bon fonctionnement du site peuvent être utilisés, et vous
                    avez toujours le contrôle sur leur gestion.</p>
                <section className="cookies-table">
                    <table>
                        <thead>
                        <tr>
                            <th>Nom du cookie</th>
                            <th>Domaine</th>
                            <th>Expiration</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cookiesData.map((cookie, index) => (
                            <tr key={index}>
                                <td>{cookie.name}</td>
                                <td>{cookie.domain}</td>
                                <td>{cookie.expiration}</td>
                                <td>{cookie.description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </section>

        </section>
    );
}