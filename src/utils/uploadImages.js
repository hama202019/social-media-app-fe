import { ref } from 'firebase/storage'
import storage from '../../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import * as postsAPI from '../../api/postRequests'
import * as postsActions from '../../actions/postsActions'

const uploadPhoto = image => {
    const user = useSelector(state => state.authReducer.authData)
    const imageRef = ref(storage, `images/${user._id}${image.name}`)
    const dispatch = useDispatch()
    dispatch(postsActions.startUploading())
      const uploadTask = uploadBytesResumable(newImgRef, img).then( snapShot => {
        getDownloadURL(newImgRef).then( async url => {
          const newPost = {userId : _id, desc: desc.current.value, image: url, ref: JSON.stringify(newImgRef), userName: `${user.firstName} ${user.lastName}`}
          try {
            const post = await postsAPI.post(newPost)
            dispatch(postsActions.uploadingSuccess(post.data))
          } catch (e) {
            if(e.response)
              dispatch(postsActions.uploadingFail(e.response.data.error))
          }
        })
    })
}

export default uploadPhoto