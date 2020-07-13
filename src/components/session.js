import React from 'react'

import Container from '../components/common/container'

import styles from './session.module.css'

export default function Session({ sessionDate, slides, title, videoUrl }) {
  return (
    <Container>
      <article className={styles.wrapper}>
        <div className={styles.videoContainer}>
          <div
            className={`${styles.video} fb-video`}
            data-href={videoUrl}
            data-width=""
            data-show-text="false"
            data-allowfullscreen="true"
          />
        </div>

        <div className={styles.metadata}>
          <p>{new Date(sessionDate).toDateString()}</p>
          <h1 className={styles.title}>{title}</h1>
          {slides && (
            <a
              className={styles.slides}
              href={slides}
              target="_blank"
              rel="nofollow noopener"
            >
              SLIDES
            </a>
          )}
        </div>
      </article>
    </Container>
  )
}
