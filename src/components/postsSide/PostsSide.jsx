import React from 'react'
import './PostsSide.css'
import SharePosts from '../sharePosts/SharePosts';
import Posts from '../posts/Posts';
import { useSelector } from 'react-redux';

const PostsSide = () => {
  const {_id} = useSelector(state => state.authReducer.authData)

  return (
    <div className='PostsSide'>
        <SharePosts />
        <Posts profilePage={false} id={_id}/>
    </div>
  )
}

export default PostsSide