import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
        <main className={styles.main}>
        <div className={styles.nav}>
          <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            <Link href="/blog"><li>Blog</li></Link>
          </ul>
        </div>
        <div className={styles.h11} id="as">
          Crafty Coders
        </div>
      </main>
    </div>
  )
}

export default Navbar