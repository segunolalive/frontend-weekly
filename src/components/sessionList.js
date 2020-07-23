import React, { useState } from 'react'
import '@reach/dialog/styles.css'

import SessionPreview from './sessionPreview'
import SessionModal from './sessionModal'
import Container from './common/container'

import styles from './sessionList.module.css'

export default function SessionList({ sessions }) {
  const [selected, setSelected] = useState(null)
  const closeModal = () => setSelected(null)

  return (
    <Container>
      {selected && <SessionModal sessionProps={selected} close={closeModal} /> }
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
    </Container>
  )
}
