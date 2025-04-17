import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeStatusThunk } from '../../store/reducers/profileReducer'

const Status = ({ userStatus,  setEdite}) => {
    const dispatch = useDispatch()

    
    const [myStatus, setMyStatus] = useState(userStatus)


    const verj = () => {
        setEdite(false)
        dispatch(changeStatusThunk(myStatus, localStorage.getItem('userId')))
    }
    return (
        <div>

            < input
                onBlur={verj}
                value={myStatus} onChange={(e) => setMyStatus(e.target.value)} />
        </div>
    )
}

export default Status