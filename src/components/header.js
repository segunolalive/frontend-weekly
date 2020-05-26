import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.css'

export default function() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link to="/" className={styles.link}>
          <img src="fw_logo.svg" alt="logo" className={styles.logo} /> Frontend
          Weekly
        </Link>
      </div>
    </header>
  )
}
