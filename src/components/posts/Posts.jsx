import React from 'react'
import './Posts.css'
import {postsData} from '../../data/postsData'
import Post from '../post/Post'

const Posts = () => {
  return (
    <div className="Posts">
        {postsData.map((post, index) => {
            return <Post key={index} data={post} />
        })}
    </div>
  )
}

export default Posts