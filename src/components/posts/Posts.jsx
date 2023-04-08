import React from 'react'
import './Posts.css'
import * as postsAPI from '../../api/postRequests'
import * as postsActions from '../../actions/postsActions'
import Post from '../post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const Posts = ({profilePage, id}) => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    const getData = async () => {
      dispatch(postsActions.startRetrievine())
      try {
        const posts = await postsAPI.getTimelinePosts(id)
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
    postsData = postsData.filter(post => post.userId === id)
  }

  return (
    <div className="Posts">
        {postsData.length ? 
        postsData.map( post => {
            return <Post key={post._id} data={post} profilePage={profilePage} />
        }) : <h1 style={{color: 'var(--gray)', display: 'flex', justifyContent: "center", alignItems: "center", marginTop: '100px'}}>{profilePage? "Your": "The"} posts will be shown here</h1>
      }
    </div>
  )
}

export default Posts