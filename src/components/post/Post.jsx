import React from 'react'
import Comment from '../../assets/img/comment.png'
import Share from '../../assets/img/share.png'
import Heart from '../../assets/img/like.png'
import NotLike from '../../assets/img/notlike.png'
import './Post.css'

const Post = ({data}) => {
  return (
    <div className='Post'>
        <img src={data.img} />
        <div className="postReact">
          <img src={data.liked ? Heart : NotLike} />
          <img src={Comment} />
          <img src={Share} />
        </div>
        <span style={{color: 'var(--gray)', fontSize: '12px'}}>{data.likes} likes</span>
        <div className="details">
          <span><b>{data.name}</b></span>
          <span>{data.desc}</span>
        </div>
    </div>
  )
}

export default Post