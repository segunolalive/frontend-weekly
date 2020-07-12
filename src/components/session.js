import React from 'react'
import Play from '../../static/Play.svg'

import styles from './session.module.css'

export default function Session({ slug, title, date, image }) {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${image})` }}
    >
      <article className={styles.session}>
        <time className={styles.time}>{new Date(date).toDateString()}</time>
        <h3 className={styles.title}>
          <a href={`/sessions/${slug}`} className={styles.strechedLink}>
            {title}
          </a>
        </h3>
        <button className={styles.btn}>
          <img src={Play} alt="" />
        </button>
      </article>
    </div>
  )
}
