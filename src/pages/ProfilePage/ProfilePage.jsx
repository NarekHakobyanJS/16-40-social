import React, { useEffect, useState } from 'react'
import './ProfilePage.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileThunk, getStatusThunk } from '../../store/reducers/profileReducer'
import { SocialAPI } from '../../api/api'
import Status from '../../components/Status/Status'

const ProfilePage = () => {
  const { profile, userStatus } = useSelector((state) => state.profilePage)
 
  const [edite, setEdite] = useState(false)
  const { id } = useParams()
  

  const dispatch = useDispatch()


  const changeProfilePhoto = (e) => {
    const file = e.target.files[0]
    console.log(file);
    SocialAPI.changePhoto(file)
      .then((res) => console.log(res))
    
  }
  useEffect(() => {
    dispatch(getProfileThunk(id))
    dispatch(getStatusThunk(id))
  }, [id])
  return (
    <div>
      <img src={profile?.photos?.large} />
      <h2>{profile?.fullName}</h2>
      {
        edite ? <Status userStatus={userStatus}  setEdite={setEdite}/>
        :  <h3 onDoubleClick={() => setEdite(true)}>{userStatus}</h3>
      }
     
      <input type='file' onChange={changeProfilePhoto}/>
    </div>
  )
}

export default ProfilePage