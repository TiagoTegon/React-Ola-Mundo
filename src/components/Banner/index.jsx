import React from 'react'
import styles from './Banner.module.css'
import colorfulCircle from 'assets/circulo_colorido.png'
import myPhoto from 'assets/tiago_foto.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.title}>
          Hello World!
        </h1>
        <p className={styles.paragraph}>
          Welcome to my personal space! I'm Tiago Tegon, Júnior Developer at HighJump Proccess Consulting.
          Here I'm share many knowledges, hope you like :D
        </p>
      </div>
      <div className={styles.images}>
        <img 
          className={styles.colorfulCircle} 
          src={colorfulCircle} 
          aria-hidden={true}
          alt="colorful circle"
        />
        <img
          className={styles.myPhoto}
          src={myPhoto}
          alt="Tiago's rest img"
        />
      </div>
    </div>
  )
}
