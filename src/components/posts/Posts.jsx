import React from 'react'
import './Posts.css'
// import {postsData} from '../../data/postsData'
import Post from '../post/Post'
import { useSelector } from 'react-redux'

const Posts = () => {
  const {postsData} = useSelector(state => state.postsReducer)

  return (
    <div className="Posts">
        {postsData.map((post) => {
            return <Post key={post._id} data={post} />
        })}
    </div>
  )
}

export default Posts