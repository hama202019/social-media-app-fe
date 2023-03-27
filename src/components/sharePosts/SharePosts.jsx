import React, {useState, useRef} from 'react'
import ProfileImage from '../../assets/img/profileImg.jpg'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import './SharePosts.css'


const SharePosts = () => {
  const [img, setImg] = useState(null)
  const imgRef = useRef()
  
  const imgHandler = (e) => {
    if(e.target.files && e.target.files[0]){
      const image = e.target.files[0]
      setImg({
        image: URL.createObjectURL(image)
      })
    }
  }

  return (
    <div className='SharePost'>
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={() => imgRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{display: 'none'}}>
            <input 
              type="file" 
              name='myImage'
              ref={imgRef}
              onChange={imgHandler}
              accept='image/*'
              />
          </div>
        </div>
          {img && (
            <div className="previewImg">
              <UilTimes onClick={()=>setImg(null)}/>
              <img src={img.image} />
            </div>
          )}
      </div>
    </div>
  )
}

export default SharePosts