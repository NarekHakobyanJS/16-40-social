import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './UsersPage.css'
import { changePageAC, getUsersThunk } from '../../store/reducers/usersReducer'
import UserCard from '../../components/UserCard/UserCard'

const UsersPage = () => {
    const [portionNumber, setPortionNumber] = useState(1)

    const { users, page, totalUsersPageCount, totalUsersCount } = useSelector((state) => state.usersPage)
    const dispatch = useDispatch()

    let leftPortionSize = (portionNumber - 1) * 10 + 1
    let rightPortionSize = portionNumber * 10

    useEffect(() => {
        dispatch(getUsersThunk(page))

    }, [page])

    const buttonsCount = Math.ceil(totalUsersCount / totalUsersPageCount)
    const endButton = Math.ceil(buttonsCount / 10)
    // console.log(endButton, 'next kochak');
    // console.log(portionNumber , "ese State");

    const buttons = []
    for (let i = 1; i <= buttonsCount; i++) {
        buttons.push(i)
    }


    const changePage = (page) => {
        dispatch(changePageAC(page))
    }
    return (
        <div>
            <div className="pagination">
                {
                    portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>
                }
                {
                    buttons
                        .filter((p) => p >= leftPortionSize && p <= rightPortionSize)
                        .map((p) => {
                            return <button
                                className={p === page ? 'active-page' : ''}
                                onClick={() => changePage(p)}
                                key={p}>{p}</button>
                        })
                }
                {
                    endButton > portionNumber &&
                    <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>
                }
            </div>
            <div className='users'>
                {

                    users?.map((user) => {
                        return <UserCard key={user.id} user={user} />
                    })
                }
            </div>
        </div >
    )
}

export default UsersPage