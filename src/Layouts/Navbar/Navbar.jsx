import styles from './Navbar.module.scss';
import logoNoir from '/public/Navbar/logo_noir.png';
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href={'/'}>
                <Image className={styles.nav_logo} src={logoNoir} alt={'Logo de la marque Nuview'}/>
            </Link>
            <ul className={styles.nav_list}>
                <li ><Link className={styles.nav_list_item} href={'/product'}>Produit</Link></li>
                <li ><Link className={styles.nav_list_item} href={'/about'}>A propos</Link></li>
            </ul>
        </nav>
    )
}