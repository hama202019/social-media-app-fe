import React from 'react'
import './Posts.css'
import * as postsAPI from '../../api/postRequests'
import * as postsActions from '../../actions/postsActions'
import Post from '../post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const Posts = ({profilePage}) => {
  const {_id} = useSelector(state => state.authReducer.authData)
  const postsData = []
  const dispatch = useDispatch()
  useEffect( async () => {
    dispatch(postsActions.startRetrievine())
    try {
      postsData = await postsAPI.getTimelinePosts(_id)
      dispatch(postsActions.retreivingSuccess(postsData))
    } catch (e) {
      if(e.response)
        dispatch(postsActions.retreivingFail(e.response.data.error))
    }
  })
  const myOwnPosts = []
  if(profilePage) myOwnPosts =  postsData.filter(post => post._id === _id)
  return (
    <div className="Posts">
        {myOwnPosts.map((post) => {
            return <Post key={post._id} data={post} />
        })}
    </div>
  )
}

export default Posts