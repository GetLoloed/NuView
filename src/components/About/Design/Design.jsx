import styles from './Design.module.scss';
import img from '/public/About/design.png';
import Image from "next/image";

export function Design() {
    return (
        <section className={styles.section}>
            <div className={styles.section_container}>
                <Image src={img} alt={''}/>
                <div className={styles.section_wrapper}>
                    <h1 className={styles.section_wrapper_title}>Nous apportons une grande importance au design</h1>
                    <p className={styles.section_wrapper_text}>Elégance et pureté sont les maîtres mots de notre
                        entreprise. Nous voulons que nos utilisateurs
                        ait
                        accès à un design sophistiqué, qui puisse harmoniser leur décoration d’intérieur tout en
                        bénéficiant
                        d’une interface intuitive. Nous primons le minimalisme pour optimiser l’espace de vos pièces.
                    </p>
                </div>
            </div>
        </section>
    )
}