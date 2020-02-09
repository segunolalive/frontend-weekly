import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default () => (
  <header className={styles.hero}>
    <div className={styles.heroDetails}>
      <h1 className={styles.heroHeadline}>Front-End Weekly</h1>
      <p>all things front-end development</p>
    </div>
  </header>
)
