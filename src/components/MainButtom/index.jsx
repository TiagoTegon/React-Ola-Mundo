import styles from './MainButtom.module.css'

import React from 'react'

export default function MainButtom({ children, length }) {
  return (
    <button className={`
      ${styles.mainButtom}
      ${styles[length]}
    `}>
      {children}
    </button>
  )
}
