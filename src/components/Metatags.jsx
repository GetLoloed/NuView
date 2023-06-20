import Head from 'next/head';

export function Metatags({
                             title = "Nuview | Miroir intelligent",
                             description = "Découvrez notre miroir intelligent, combinant élégance et technologie pour transformer votre routine quotidienne. Reconnaissance vocale, connectivité Wi-Fi, et bien plus encore.",
                             keywords = "miroir intelligent, miroir connecté, miroir technologique, domotique, miroir haut de gamme, miroir IoT, miroir avec reconnaissance vocale, miroir tactile, domotique intelligente, maison intelligente, technologie intelligente, maison connectée",
                             author = "Votre nom",
                             url = "https://www.nuview.tech/",
                             image = "https://www.votresite.com/images/miroir-intelligent.jpg"
                         }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keywords' content={keywords}/>
            <meta name='author' content={author}/>
            <meta property='og:url' content={url}/>
            <meta property='og:image' content={image}/>
            <meta property='og:description' content={description}/>
            <meta property='og:title' content={title}/>
            <meta property='twitter:title' content={title}/>
            <meta property='twitter:description' content={description}/>
            <meta property='twitter:image' content={image}/>
        </Head>
    )
}
