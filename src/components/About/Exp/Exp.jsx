import styles from './Exp.module.scss';
import img from '/public/About/exp.png'
import miror from '/public/About/miror.png'
import Image from "next/image";

export function Exp() {
    return (
        <section className={styles.section}>
            <Image className={styles.imgMiror} src={miror} alt={''}/>
            <div className={styles.container1}>
                <div className={styles.titleLine}>
                    <h1 className={styles.titleLine_title}>Une expérience utilisateur inouie</h1>
                </div>
                <div className={styles.container1_wrapper}>
                    <div className={styles.container1_wrapper_textContainer}>
                        <p className={styles.container1_wrapper_textContainer_text}>
                            Révolutionner l&apos;expérience utilisateur, tel est notre objectif principal. Le miroir,
                            cet
                            objet communément utilisé pour se regarder et s&apos;admirer, est également un outil
                            puissant
                            pour réfléchir à notre identité, notre image et notre estime de soi. Les miroirs connectés,
                            grâce à leur technologie avancée, offrent une expérience utilisateur encore plus immersive
                            et personnalisée, renforçant ainsi leur impact sur l&apos;image que nous avons de
                            nous-mêmes.
                        </p>
                        <p className={styles.container1_wrapper_textContainer_text}>
                            Nous sommes une équipe localisée à Paris, déterminée à révolutionner le monde de demain en
                            vous proposant des objets toujours plus sophistiqués et raffinés.
                        </p>
                    </div>
                    <h5 className={styles.container1_wrapper_slogan}>DE L&apos;INNOVATION À LA FRANÇAISE</h5>
                </div>
            </div>
            <div className={styles.container2}>
                <h4 className={styles.container2_slogan}>5 membres <br/> 1 vision commune</h4>
                <Image className={styles.container2_img} src={img} alt={''}/>
            </div>
        </section>
    )
}