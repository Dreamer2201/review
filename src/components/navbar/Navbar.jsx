import React from 'react';
import { NavLink } from 'react-router-dom';
import items from './itemsNavbar';
import styles from './navbar.module.scss'

const getClassName = ({isActive}) => isActive ?  `${styles.nav__link} ${styles.active}` : `${styles.nav__link}`


export default function Navbar() {
  const elements = items.map(({id, to, text}) => {
    return (
      <li key={id}>
        <NavLink className={getClassName} to={to}>{text}</NavLink>
      </li>
    )
  })
  return (
    <>
        <nav className={styles.nav_list}>
            {elements}
        </nav>
    </>
  )
}
