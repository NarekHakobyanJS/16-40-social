import React from 'react'
import './UserCard.css'
import userImg from '../../assets/user.png'
const UserCard = ({user}) => {

  return (
    <div className='user'>
        <h2>{user?.name}</h2>
        <img src={user?.photos?.large === null ? userImg : user?.photos?.large} />
        <button>follow</button>
    </div>
  )
}

export default UserCard