import React, { useReducer } from 'react'
import './ProfileModal.css'
import { UilTimes } from "@iconscout/react-unicons";

const reducer = (state, action) => {
    switch(action.type){
        case "FIRSTNAME":
            return {...state, firstName: action.payload.firstName}
        case "LASTNAME":
            return {...state, lastName: action.payload.lastName}
        case "ABOUT":
            return {...state, about: action.payload.about}
        case "RELATIONSHIP":
            return {...state, relationship: action.payload.relationship}
        case "WORKSAT":
            return {...state, worksAt: action.payload.worksAt}
        case "LIVESIN":
            return {...state, livesin: action.payload.livesin}
        case "PROFILEPICTURE":
            return {...state, profilePicture: action.payload.profilePicture}
        case "COVERPICTURE":
            return {...state, coverPicture: action.payload.coverPicture}
        default:
            return state
    }
}

const ProfileModal = ({open, closeModal}) => {
    const [data, dispatch] = useReducer(reducer, {firstName: '', lastName: '', worksAt: '', livesin: '', profilePicture: null, coverPicture: null, relationship: ''})
    if(!open) return null;
  return (
    <div className='overlay' onClick={closeModal}>
        <div className="formContainer">
            <div className="ProfileModal" onClick={(e) => e.stopPropagation()}>
                <UilTimes onClick={closeModal} className='timesIcon'/>
                <form>
                    <h2>Your Info</h2>
                    <div className="fullName">
                        <input type='text' placeholder='first name' required/>
                        <input type='text' placeholder='last name' required/>
                    </div>
                    <div className="workAt">
                        <input type="text" placeholder='works at' />
                    </div>
                    <div className="living">
                        <input type='text' placeholder='lives in' />
                        <input type='text' placeholder='relationship status' />
                    </div>
                    <div className="about">
                        <input type="text" placeholder='about' />
                    </div>
                    <div className="filesInput">
                        Profile Image 
                        <input type="file" accept='image/*' name='profileImg'/>
                        Cover Image
                        <input type="file" accept='image/*' name="coverImg" />
                    </div>
                </form>
                <button className='button saveInfoButton'>Save</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileModal