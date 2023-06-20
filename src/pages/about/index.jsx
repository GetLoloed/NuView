import {Navbar} from "@/Layouts/Navbar/Navbar";
import styles from './About.module.scss'
import {Exp} from "@/components/About/Exp/Exp";
import {Design} from "@/components/About/Design/Design";
import {Pub} from "@/components/About/Pub/Pub";

export default function AboutPage() {
    return (
        <>
            <Navbar/>
            <main className={styles.main}>
                <Exp/>
                <Design/>
                <Pub/>
            </main>
        </>
    )
}