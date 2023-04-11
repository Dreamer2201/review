import React from 'react';
import { NavLink } from 'react-router-dom';
import items from './itemsNavbar';
import styles from './navbar.module.scss'

export default function Navbar() {
  const elements = items.map(({id, to, text}) => {
    return (
      <li key={id}>
        <NavLink to={to}>{text}</NavLink>
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
