import React from 'react'
import './Posts.css'
import * as postsAPI from '../../api/postRequests'
import * as postsActions from '../../actions/postsActions'
import Post from '../post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const Posts = ({profilePage}) => {
  
  const {_id} = useSelector(state => state.authReducer.authData)
  const dispatch = useDispatch()
  useEffect(() => {
    const getData = async () => {
      dispatch(postsActions.startRetrievine())
      try {
        const posts = await postsAPI.getTimelinePosts(_id)
        dispatch(postsActions.retreivingSuccess(posts.data))
      } catch (e) {
        if(e.response)
          dispatch(postsActions.retreivingFail(e.response.data.error))
      }
    }
    getData()
  }, [])
  let {postsData} = useSelector(state => state.postsReducer)
  if(profilePage) {
    postsData = postsData.filter(post => post.userId === _id)
    console.log(1000)
  }

  return (
    <div className="Posts">
        {postsData ? 
        postsData.map((post) => {
            return <Post key={post._id} data={post} />
        }) : <h1 style={{color: 'var(--gray)', display: 'flex', justifyContent: "center", alignItems: "center"}}>Your posts will be shown here</h1>
      }
    </div>
  )
}

export default Posts