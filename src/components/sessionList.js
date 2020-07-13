import React from 'react'

import Session from './session'
import Container from './common/container'

import styles from './sessionList.module.css'

export default function SessionList({ sessions }) {
  return (
    <Container>
      <ul className={styles.sessionList}>
        {sessions.map(({ node }) => {
          const { title, slug, sessionDate, image = '/fw-video-bg.png' } = node
          return (
            <li key={slug}>
              <Session
                slug={slug}
                title={title}
                image={image}
                date={sessionDate}
              />
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
