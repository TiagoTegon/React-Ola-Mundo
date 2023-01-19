import './Post.css'
import styles from './Post.module.css'

import React from 'react'
import { useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import ModelPost from 'components/ModelPost'
import ReactMarkdown from 'react-markdown'
import NotFound from 'pages/NotFound'
import HomePage from 'components/HomePage'
import PostCard from 'components/PostCard'

export default function Post() {
  const params = useParams()
  const post = posts.find((post) => {
    return post.id === Number(params.id)
  })

  if (!post) {
    return <NotFound />
  }

  const recomendedPosts = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a ,b) => b.id - a.id)
    .slice(0, 4)

  return (
    <HomePage>
      <ModelPost
        coverPhoto={`/assets/posts/${post.id}/capa.png`}
        title={post.titulo}
      >
        <div className='post-markdown-container'>
          <ReactMarkdown>
            {post.texto}
          </ReactMarkdown>
        </div>
        <h2 className={styles.tituloOutrosPosts}>
          Other posts you might like:
        </h2>
        <ul className={styles.postsRecomendados}>
          {recomendedPosts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </ModelPost>
    </HomePage>
  )
}
