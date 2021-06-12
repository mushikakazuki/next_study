import Image from 'next/image'
import styles from './Header.module.css'
import Link from 'next/link'

export function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.anchor}>index</a>
            </Link>
            <Link href="/about">
                <a className={styles.anchor}>about</a>
            </Link>
        </header >
    )
}
