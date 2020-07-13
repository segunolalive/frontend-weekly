import React from 'react'

import { DialogContent, DialogOverlay } from '@reach/dialog'
import '@reach/dialog/styles.css'

import Session from './session'

export default function SessionModal({ sessionProps, close }) {
  console.log({ sessionProps })
  return (
    <DialogOverlay
      style={{ background: 'hsla(0, 100%, 100%, 0.9)' }}
      isOpen={Boolean(sessionProps)}
      onDismiss={close}
    >
      <DialogContent
        aria-label="session modal"
        style={{ boxShadow: '0px 10px 50px hsla(0, 0%, 0%, 0.33)' }}
      >
        <Session {...sessionProps} />
        <button onClick={close}>Very nice.</button>
      </DialogContent>
    </DialogOverlay>
  )
}
