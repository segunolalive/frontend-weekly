import React, { useState, useMemo } from 'react'
import FBPlayer from 'react-facebook-player'

import styles from './session.module.css'

export default function Session({
  sessionDate,
  slides,
  title,
  videoUrl,
  headingLevel = 1,
}) {
  const videoId = videoUrl.split('/')[5]
  const Heading = `h${headingLevel}`

  const VIDEO_STATUSES = useMemo(() =>({
    LOADING: 'loading',
    LOADED: 'loaded',
    ERROR: 'error',
  }), [])

  const [status, setStatus] = useState(VIDEO_STATUSES.LOADING)

  return (
      <article className={styles.wrapper}>
        {status === VIDEO_STATUSES.LOADING && (
          <div className={styles.loading}>...Loading Video</div>
        )}
        {status === VIDEO_STATUSES.LOADED && (
          <div className={styles.loaded}>Video Loaded</div>
        )}
        {status === VIDEO_STATUSES.ERROR && (
          <div className={styles.loadingError}>Error! Failed To Video</div>
        )}
        <div className={styles.videoContainer}>
          <FBPlayer
            appId="583596218936079"
            videoId={videoId}
            allowfullscreen={true}
            className={styles.video}
            showText={false}
            onReady={() => setStatus(VIDEO_STATUSES.LOADED)}
            onError={() => setStatus(VIDEO_STATUSES.ERROR)}
          />
        </div>

        <div className={styles.metadata}>
          <time>{new Date(sessionDate).toDateString()}</time>
          <Heading className={styles.title}>{title}</Heading>
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
  )
}
