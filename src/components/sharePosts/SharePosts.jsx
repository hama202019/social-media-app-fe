import React, {useState, useRef} from 'react'
import ProfileImage from '../../assets/img/profileImg.jpg'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import './SharePosts.css'
import storage from '../../../firebase'
import { useDispatch, useSelector } from 'react-redux';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import * as postsAPI from '../../api/postRequests'
import * as postsActions from '../../actions/postsActions'

const SharePosts = () => {
  const [img, setImg] = useState(null)
  const imgInputRef = useRef()
  const dispatch = useDispatch()
  const desc = useRef()
  const [upload, setUpload] = useState(null)
  const {_id, firstName, lastName} = useSelector(state => state.authReducer.authData)

  const imgHandler = (e) => {
    if(e.target.files && e.target.files[0]){
      const image = e.target.files[0]
      setImg(image)
    }
  }
  const handleUpload = async e => {
    e.preventDefault();
    if(!desc.current.value) return {error: ""}
    if(img){
      const newImgRef = ref(storage, `images/${_id}${img.name}`)
      dispatch(postsActions.startUploading())
      const uploadTask = uploadBytesResumable(newImgRef, img).then( snapShot => {
        getDownloadURL(newImgRef).then( async url => {
          const newPost = {userId : _id, desc: desc.current.value, image: url, ref: JSON.stringify(newImgRef), userName: `${firstName} ${lastName}`}
          console.log(newPost)
          try {
            const post = await postsAPI.post(newPost)
            dispatch(postsActions.uploadingSuccess(post.data))
          } catch (e) {
            if(e.response)
              dispatch(postsActions.uploadingFail(e.response.data.error))
          }
        })
      })
      setUpload(uploadTask)
    } else {
      dispatch(postsActions.startUploading())
      try {
        const post = await postsAPI.post({userId: _id, desc: desc.current.value, userName: `${firstName} ${lastName}`})
        dispatch(postsActions.uploadingSuccess(post))
      } catch (e) {
        if(e.response)
          dispatch(postsActions.uploadingFail(e.response.data.error))
      }
    }  
  }

  return (
    <div className='SharePost'>
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" ref={desc} placeholder="What's happening" required/>
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={() => imgInputRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button" onClick={handleUpload}>Share</button>
          <div style={{display: 'none'}}>
            <input 
              type="file" 
              name='myImage'
              ref={imgInputRef}
              onChange={imgHandler}
              accept='image/*'
              />
          </div>
        </div>
          {img && (
            <div className="previewImg">
              <UilTimes onClick={()=>setImg(null)}/>
              <img src={URL.createObjectURL(img)} />
            </div>
          )}
      </div>
    </div>
  )
}

export default SharePosts