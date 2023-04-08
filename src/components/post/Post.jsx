import React from 'react'
import Heart from '../../assets/img/like.png'
import NotLike from '../../assets/img/notlike.png'
import './Post.css'
import { likePost } from '../../api/postRequests'
import { useDispatch, useSelector } from 'react-redux'
import { likePostAction } from '../../actions/postsActions'

const Post = ({data}) => {
  const {_id} = useSelector(state => state.authReducer.authData)
  const dispatch = useDispatch()

  const handleLike = async () => {
    try {
      const res = await likePost(data._id, _id)
      dispatch(likePostAction(res.data, data._id))
    } catch (error) {
      console.log()
    }
  }
  return (
    <div className='Post'>
        {data.image && <img src={data.image} />}
        <div className="postReact">
          <img src={data.likes.includes(_id) ? Heart : NotLike} onClick={handleLike} />
          <span style={{color: 'var(--gray)', fontSize: '12px'}}>{data.likes.length} likes</span>
        </div>
        <div className="details">
          <span><b>{data.userName + '\t'}</b></span>
          <span>{data.desc}</span>
        </div>
    </div>
  )
}

export default Post