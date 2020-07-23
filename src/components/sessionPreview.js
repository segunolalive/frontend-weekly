import React from 'react'
import { Link } from 'gatsby';
import Play from '../../static/Play.svg'

import styles from './sessionPreview.module.css'

export default function sessionPreview({
  videoUrl,
  slides,
  slug,
  title,
  sessionDate,
  image,
  selectSession,
}) {
  const onButtonClick = () =>
    selectSession({ videoUrl, slides, slug, title, sessionDate })

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${image})` }}
    >
      <article className={styles.session}>
        <h3 className={styles.title}>
          <Link to={`/sessions/${slug}`} className={styles.strechedLink}>
            {title}
          </Link>
        </h3>
        <time className={styles.time}>{new Date(sessionDate).toDateString()}</time>
        <button className={styles.btn} onClick={onButtonClick} aria-label="play">
          <img src={Play} alt="" />
        </button>
      </article>
    </div>
  )
}
