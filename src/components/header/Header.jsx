import React from 'react'
import styles from './header.module.scss'
import Navbar from '../navbar/Navbar'

export default function Header() {
  return (
  <header className={styles.header}>
        <Navbar />
    </header>
  )
}
