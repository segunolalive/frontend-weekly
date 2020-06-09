import React from 'react'
import { Link } from 'gatsby'

import Container from './common/container';

import styles from './header.module.css'

export default function Header () {
  return (
    <header className={styles.header}>
      <Container>
        <Link to="/" className={styles.link}>
          <img src="fw_logo.svg" alt="logo" className={styles.logo} /> Frontend
          Weekly
        </Link>
      </Container>
    </header>
  )
}
