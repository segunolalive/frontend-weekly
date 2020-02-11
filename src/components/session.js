import React from 'react'
import styles from './session.module.css'

export default function Session({ url, title, date, slides }) {
  return (
    <article className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      {slides && (
        <a href={slides} target="_blank" rel="nofollow noopener">
          Slides
        </a>
      )}
      <p>{new Date(date).toDateString()}</p>
      <div
        className={`${styles.video} fb-video`}
        data-href={url}
        data-width="500"
        data-show-text="false"
        data-allowfullscreen="true"
      />
    </article>
  )
}
