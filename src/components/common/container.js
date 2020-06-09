import * as React from 'react'

import styles from './container.module.css'

export default function Container({ children, as = 'div', ...props }) {
  const Component = as
  return (
    <Component className={styles.container} {...props}>
      {children}
    </Component>
  )
}
