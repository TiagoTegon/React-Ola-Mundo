import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Post.module.css'

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img 
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt='Post cover'
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <button className={styles.botaoLer}>Ler</button>
      </div>
    </Link>
  )
}
