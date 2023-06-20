import styles from './Home.module.scss'
import {Navbar} from "@/Layouts/Navbar/Navbar";
import {Metatags} from "@/components/Metatags";

export default function HomePage() {
    return (
        <>
            <Metatags/>
            <Navbar/>
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Votre assistant à votre image</h1>
                    <button className={styles.btn}>
                        <span className={styles.btnText}>Découvrir</span>
                    </button>
                </div>
            </main>
        </>
    )
}
