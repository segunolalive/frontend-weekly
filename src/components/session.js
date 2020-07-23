import React, { useState, useMemo } from 'react'
import FBPlayer from 'react-facebook-player'

import styles from './session.module.css'

const VARIANTS = {
  MODAL: 'modal',
}

const VIDEO_STATUSES = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error',
}

export default function Session({
  sessionDate,
  slides,
  title,
  videoUrl,
  headingLevel = 1,
  variant = 'default',
}) {
  const videoId = videoUrl.split('/')[5]
  const Heading = `h${headingLevel}`

  const [status, setStatus] = useState(VIDEO_STATUSES.LOADING)

  return (
    <article
      className={`${styles.wrapper} ${
        variant === VARIANTS.MODAL ? styles.noBoder : ''
      }`}
    >
      <VideoStatus status={status} />
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

function VideoStatus({ status }) {
  return (
    <div aria-live="assertive">
      {status === VIDEO_STATUSES.LOADING && (
        <span className={styles.loading}>...Loading Video</span>
      )}
      {status === VIDEO_STATUSES.LOADED && (
        <span className={styles.loaded}>Video Loaded</span>
      )}
      {status === VIDEO_STATUSES.ERROR && (
        <span className={styles.loadingError}>Error! Failed To Video</span>
      )}
    </div>
  )
}
