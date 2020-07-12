import React from 'react'

import Container from "./common/container";

import styles from './hero.module.css'

export default () => (
  <>
    <div className={styles.hero}>
      <Container>
        <h1 className={styles.title}>Weekly video casts on Frontend Engineering</h1>
        <p className={styles.subtitle}>
          Get insights and nuggets from experienced engineers and designers!
        </p>
      </Container>
    </div>
  </>
)
