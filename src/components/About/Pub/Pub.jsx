import styles from './Pub.module.scss'
import image from '/public/About/pub.png'
import Image from "next/image";

export function Pub() {
    return (
        <section className={styles.section}>
            <Image className={styles.section_img} src={image} alt={''}/>
        </section>
    )
}