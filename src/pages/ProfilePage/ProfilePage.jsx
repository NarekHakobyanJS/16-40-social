import React, { useEffect } from 'react'
import './ProfilePage.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileThunk } from '../../store/reducers/profileReducer'
import { SocialAPI } from '../../api/api'

const ProfilePage = () => {
  const { id } = useParams()
  const { profile } = useSelector((state) => state.profilePage)
  const dispatch = useDispatch()


  const changeProfilePhoto = (e) => {
    const file = e.target.files[0]
    console.log(file);
    SocialAPI.changePhoto(file)
      .then((res) => console.log(res))
    
  }
  useEffect(() => {
    dispatch(getProfileThunk(id))
  }, [id])
  return (
    <div>
      <img src={profile?.photos?.large} />
      <h2>{profile?.fullName}</h2>
      <input type='file' onChange={changeProfilePhoto}/>
    </div>
  )
}

export default ProfilePage