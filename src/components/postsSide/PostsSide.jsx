import React from 'react'
import './PostsSide.css'
import SharePosts from '../sharePosts/SharePosts';
import Posts from '../posts/Posts';

const PostsSide = () => {
  return (
    <div className='PostsSide'>
        <SharePosts />
        <Posts />
    </div>
  )
}

export default PostsSide