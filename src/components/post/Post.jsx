import React, {useState} from 'react'
import Heart from '../../assets/img/like.png'
import NotLike from '../../assets/img/notlike.png'
import './Post.css'
import { likePost } from '../../api/postRequests'
import { useDispatch, useSelector } from 'react-redux'
import { likePostAction } from '../../actions/postsActions'
import { UilTrashAlt } from '@iconscout/react-unicons'
import DeleteModal from './DeleteModal'

const Post = ({data, profilePage}) => {
  const {_id} = useSelector(state => state.authReducer.authData)
  const dispatch = useDispatch()
  const [deleteModal, setDeleteModal] = useState(false)
  const handleLike = async () => {
    try {
      const res = await likePost(data._id, _id)
      dispatch(likePostAction(res.data, data._id))
    } catch (error) {
      console.log()
    }
  }

  const handleDelete = () => {
    setDeleteModal(true)
  }

  return (
    <div className='Post'>
        {data.image && <img src={data.image} />}
        <div className="postReact">
          <div>
            <img style={{cursor: 'pointer'}} src={data.likes.includes(_id) ? Heart : NotLike} onClick={handleLike} />
            <span style={{color: 'var(--gray)', fontSize: '12px'}}>{data.likes.length} likes</span>
          </div>
          {profilePage && <UilTrashAlt onClick={handleDelete} className='trash' />}
        </div>
        <div className="details">
          <span><b>{data.userName + '\t'}</b></span>
          <span>{data.desc}</span>
        </div>
        {deleteModal && <DeleteModal setDeleteModal={setDeleteModal} deleteModal={deleteModal} id={data._id}/>}
    </div>
  )
}

export default Post