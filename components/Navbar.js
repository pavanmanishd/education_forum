import Link from 'next/link'
import styles from '@/styles/Nav.module.css'
export default function Nav() {
    return (
        <div>
            <ul className={styles.nav}>
                <li className={styles.navElem}>
                    <Link href='/'>Home</Link>
                </li>
                {/* <li className={styles.navElem}>
                    <Link href='/about'>About</Link>
                </li> */}
                <li className={styles.navElem}>
                    <h1>Education Forum</h1>
                </li>
                <li className={styles.navElem}>
                    <Link href='/login'>Login</Link>
                </li>
            </ul>
        </div>
    )
}