import Link from 'next/link'
import styles from '@/styles/Nav.module.css'
import { RedirectToSignIn, UserButton, UserProfile } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/router';
import React from 'react';
export default function Nav() {
    const { isLoaded, isSignedIn, user } = useUser();
    const router = useRouter();
    const [isShowLogin, setIsShowLogin] = React.useState(false);
    const handleClick = () => {
        if (!isLoaded && !isSignedIn)
            setIsShowLogin(true);
    }
    return (
        <div>
            {!isShowLogin ? <ul className={styles.nav}>
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
                    {(isLoaded && isSignedIn) ? <UserButton /> : <div onClick={handleClick}>Login</div>}
                </li>
            </ul> : <RedirectToSignIn />}
        </div>
    )
}