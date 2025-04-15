import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoginPage from '../LoginPage/LoginPage';
import {Navigate} from 'react-router-dom'

const HomePage = () => {
  const {userId} = useSelector((state) => state.auth)

  console.log(userId);
  
  useEffect(() => {
    if(userId){
      localStorage.setItem('userId', userId)
    }
  }, [userId])

  
  if(localStorage.getItem('userId')){
    return <Navigate to={`/profile/${localStorage.getItem('userId')}`}/>
  }

  return (
    <div>
      <LoginPage /> 
    </div>
  )
}

export default HomePage