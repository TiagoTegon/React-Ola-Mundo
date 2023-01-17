import React from 'react'
import MenuLink from '../MenuLink';
import styles from './Menu.module.css'

export default function Menu() {
  return (
    <header>
      <nav className={styles.navigation}>
        <MenuLink to='/'>
          Home
        </MenuLink>
        <MenuLink to='/aboutme'>
          About Me
        </MenuLink>
      </nav>
    </header>
  );
}
