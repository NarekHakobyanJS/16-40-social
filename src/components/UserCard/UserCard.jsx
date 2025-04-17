import React, { useEffect } from 'react'
import './UserCard.css'
import userImg from '../../assets/user.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { instance } from '../../api/api'
const UserCard = ({user}) => {



  const ser = (id) => {
    instance.post(`/follow/${id}`)
      .then((res) => {
        console.log(res.data)
        instance.get(`/follow/${id}`)
          .then((res) => console.log(res.data))
      })
  }
  return (
    <div className='user'>
        <NavLink to={`/profile/${user?.id}`}>
          <h2>{user?.name}</h2>
        </NavLink>
  
        <img src={user?.photos?.large === null ? userImg : user?.photos?.large} />
        <button onClick={() => ser(user?.id)}>follow</button>
    </div>
  )
}

export default UserCard