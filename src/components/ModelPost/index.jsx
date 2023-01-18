import React from 'react'
import styles from './ModelPost.module.css'

export default function ModelPost({ coverPhoto, title, children }) {
  return (
    <article className={styles.postModeloContainer}>
      <div 
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${coverPhoto})` }}
      >
      </div>
      <h2 className={styles.titulo}>
        {title}
      </h2>
      <div className={styles.postConteudoContainer}>
        {children}
      </div>
    </article>
  )
}
