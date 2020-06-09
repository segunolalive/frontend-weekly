import React from 'react'

import Session from './session'
import Container from './common/container'

import styles from './sessionList.module.css'

export default function SessionList({ sessions }) {
  return (
    <Container>
      <ul className="article-list">
        {sessions.map(({ node }) => {
          const { id, title, videoUrl, sessionDate, slides } = node
          return (
            <li key={id}>
              <Session
                url={videoUrl}
                title={title}
                slides={slides}
                date={sessionDate}
              />
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
