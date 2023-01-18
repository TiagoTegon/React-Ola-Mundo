import styles from './NotFound.module.css'

import React from 'react'
import erro404 from 'assets/erro_404.png'
import MainButtom from 'components/MainButtom'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigation = useNavigate()

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Page not found.</h1>
        <p className={styles.paragrafo}>
          Are you sure this is what you were looking for?
        </p>
        <p className={styles.paragrafo}>
          Wait a few moments and reload the page, or go back to the main page.
        </p>
        <div 
          className={styles.botaoContainer}
          onClick={() => navigation(-1)}
        >
          <MainButtom length='lg'>
            Back
          </MainButtom>
        </div>
        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="Dog wearing glasses and dressed like a human"
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  )
}
