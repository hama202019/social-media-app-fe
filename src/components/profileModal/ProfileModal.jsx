import React, { useReducer } from 'react'
import './ProfileModal.css'
import { UilTimes } from "@iconscout/react-unicons";

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
        case "PROFILEPICTURE":
            return {...state, profilePicture: action.payload}
        case "COVERPICTURE":
            return {...state, coverPicture: action.payload}
        default:
            return state
    }
}

const ProfileModal = ({open, closeModal}) => {
    const [data, dispatch] = useReducer(reducer, {firstName: '', lastName: '', worksAt: '', livesin: '', profilePicture: null, coverPicture: null, relationship: ''})
    console.log(data)
    if(!open) return null;
  return (
    <div className='overlay' onClick={closeModal}>
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