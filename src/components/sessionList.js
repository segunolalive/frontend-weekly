import React, { useState, useCallback } from 'react'
import '@reach/dialog/styles.css'

import SessionPreview from './sessionPreview'
import SessionModal from './sessionModal'
import Container from './common/container'

import styles from './sessionList.module.css'

export default function SessionList({ sessions }) {
  const [selected, setSelected] = useState(null)
  const closeModal = useCallback(() => setSelected(null), [selected])

  return (
    <Container>
      <h2 className="sr-only">All Sessions</h2>
      <ul className={styles.sessionList}>
        {sessions.map(({ node }) => {
          const {
            videoUrl,
            slides,
            title,
            slug,
            sessionDate,
            image = '/fw-video-bg.png',
          } = node
          return (
            <li key={slug}>
              <SessionPreview
                slug={slug}
                videoUrl={videoUrl}
                slides={slides}
                title={title}
                image={image}
                sessionDate={sessionDate}
                selectSession={setSelected}
              />
            </li>
          )
        })}
      </ul>
      {selected && <SessionModal sessionProps={selected} close={closeModal} /> }
    </Container>
  )
}
