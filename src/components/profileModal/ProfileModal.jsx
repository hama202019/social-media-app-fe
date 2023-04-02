import React, { useReducer, useState } from 'react'
import './ProfileModal.css'
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from 'react-redux';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import storage from '../../../firebase'
import {updateUser} from '../../api/userRequests'
import * as userActions from '../../actions/userActions'

const reducer = (state, action) => {
    switch(action.type){
        case "FIRSTNAME":
            return {...state, firstName: action.payload}
        case "LASTNAME":
            return {...state, lastName: action.payload}
        case "ABOUT":
            return {...state, about: action.payload}
        case "RELATIONSHIP":
            return {...state, relationship: action.payload}
        case "WORKSAT":
            return {...state, worksAt: action.payload}
        case "LIVESIN":
            return {...state, livesin: action.payload}
        case "PROFILE_PICTURE":
            return {...state, profilePicture: action.payload}
        case "COVER_PICTURE":
            return {...state, coverPicture: action.payload}
        case "CLEAR":0
            return null
        default:
            return state
    }
}

const ProfileModal = ({open, closeModal}) => {
    const [data, dispatch] = useReducer(reducer, {firstName: '', lastName: '', worksAt: '', livesin: '', profilePicture: null, coverPicture: null, relationship: ''})
    const [profilePhoto, setProfilePhoto] = useState(null)
    const [coverPhoto, setCoverPhoto] = useState(null)
    const user = useSelector(state => state.authReducer.authData)
    const updateDispatch = useDispatch()
    const handleSubmit = async e => {
        e.preventDefault()
        updateDispatch(userActions.updatingStart())
        const filteredData = data
        Object.keys(filteredData).forEach( key => filteredData[key] == null && delete filteredData[key]);
        filteredData.currentUserId = user._id
        if(profilePhoto){
            const newImgRef = ref(storage, `images/${user._id}${profilePhoto.name}`)
            await uploadBytesResumable(newImgRef, profilePhoto)
            filteredData.profilePicture = await getDownloadURL(newImgRef)
        }
        if(coverPhoto){
            const newImgRef = ref(storage, `images/${user._id}${coverPhoto.name}`)
            await uploadBytesResumable(newImgRef, coverPhoto)
            filteredData.coverPicture = await getDownloadURL(newImgRef)
        }
        try {
            const response = await updateUser(user._id, filteredData)
            updateDispatch(userActions.updatingSuccess(response.data))
        } catch (e) {
            if(e.response)
                updateDispatch(userActions.updatingFail(e.response.data.error))
        }
        closeModal()
        }

  return (
    <div className='overlay' style={{display: open ? 'block' : 'none'}} onClick={closeModal}>
        <div className="formContainer">
            <div className="ProfileModal" onClick={(e) => e.stopPropagation()}>
                <UilTimes onClick={closeModal} className='timesIcon'/>
                <form>
                    <h2>Your Info</h2>
                    <div className="fullName">
                        <input type='text' placeholder='first name' onChange={e => dispatch({type: "FIRSTNAME", payload: e.target.value})} required/>
                        <input type='text' placeholder='last name' onChange={e => dispatch({type: "LASTNAME", payload: e.target.value})} required/>
                    </div>
                    <div className="workAt">
                        <input type="text" placeholder='works at' onChange={e => dispatch({type: "WORKSAT", payload: e.target.value})}/>
                    </div>
                    <div className="living">
                        <input type='text' placeholder='lives in' onChange={e => dispatch({type: "LIVESIN", payload: e.target.value})}/>
                        <input type='text' placeholder='relationship status' onChange={e => dispatch({type: "RELATIONSHIP", payload: e.target.value})}/>
                    </div>
                    <div className="about">
                        <input type="text" placeholder='about' onChange={e => dispatch({type: "ABOUT", payload: e.target.value})}/>
                    </div>
                    <div className="filesInput">
                        Profile Image 
                        <input type="file" accept='image/*' name='profileImg' onChange={e => setProfilePhoto(e.target.files[0])}/>
                        Cover Image
                        <input type="file" accept='image/*' name="coverImg" onChange={e => setCoverPhoto(e.target.files[0])}/>
                    </div>
                </form>
                <button className='button saveInfoButton' onClick={handleSubmit}>Save</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileModal