import React from 'react'
import { DialogContent, DialogOverlay } from '@reach/dialog'
import '@reach/dialog/styles.css'

import styles from './sessionModal.module.css'

import Session from './session'

export default function SessionModal({ sessionProps, close }) {
  return (
    <DialogOverlay
      className={styles.modalOverlay}
      isOpen={Boolean(sessionProps)}
      onDismiss={close}
    >
      <DialogContent
        aria-label="session modal"
        className={styles.modalContent}
      >
        <Session {...sessionProps} headingLevel={3} />
        <button aria-label="close" className={styles.close} onClick={close}>&times;</button>
      </DialogContent>
    </DialogOverlay>
  )
}
