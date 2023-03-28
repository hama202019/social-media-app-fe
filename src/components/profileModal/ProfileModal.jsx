import React from 'react'
import './ProfileModal.css'
import { UilTimes } from "@iconscout/react-unicons";

const ProfileModal = ({open, closeModal}) => {
    if(!open) return null;
  return (
    <div className='overlay' onClick={closeModal}>
        <div className="formContainer">
            <div className="ProfileModal" onClick={(e) => e.stopPropagation()}>
                <UilTimes onClick={closeModal} className='timesIcon'/>
                <form>
                    <h2>Your Info</h2>
                    <div className="fullName">
                        <input type='text' placeholder='first name' />
                        <input type='text' placeholder='last name' />
                    </div>
                    <div className="workAt">
                        <input type="text" placeholder='works at' />
                    </div>
                    <div className="living">
                        <input type='text' placeholder='lives in' />
                        <input type='text' placeholder='country' />
                    </div>
                    <div className="relationshipStatus">
                        <input type="text" placeholder='relationship status' />
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