import React from 'react'
import './DeleteModal.css'
import { deletePost } from '../../api/postRequests'
import { useDispatch, useSelector } from 'react-redux'
import { deletePostAction } from '../../actions/postsActions'

const DeleteModal = ({deleteModal, setDeleteModal, id}) => {
    const dispatch = useDispatch()
    const {_id} = useSelector(state => state.authReducer.authData)
    
    const handleDelete = async () => {
        try {
            const {data} = await deletePost(id, _id)
            dispatch(deletePostAction(id))
        } catch (error) {
            console.log(error.message, 'undeleted')
        }
    }

    return (
    <div className="overlay" style={{display: deleteModal ? 'block' : 'none'}} onClick={() => setDeleteModal(false)}>
        <div className="resultsContainer">
            <div className="deletePopup" onClick={e => e.stopPropagation()}>
                <h4>Are You sure?</h4>
                <div>
                    <button onClick={() => setDeleteModal(false)}>Cancel</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal