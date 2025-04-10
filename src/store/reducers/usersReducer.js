import { SocialAPI } from "../../api/api"
/// Action Types
const GET_USERS = 'getUsers'
const IS_FETCHING = 'is-fetching'

const initState = {
    users : [],
    isFetching : false
}



const usersReducer = (state = initState, action) => {
    switch(action.type){
        case GET_USERS :
            return {
                ...state,
                users : action.payload
            }
        case IS_FETCHING :
            return {
                ...state,
                isFetching : action.payload
            }
        default :
            return state
    }
}

// ActionCreator 
const getUsersAC = (users) => ({type : GET_USERS, payload : users})
const isFetchingAC = (bool) => ({type : IS_FETCHING, payload : bool})
// ThunkCreator

export const getUsersThunk = () => {
    return (dispatch) => {
        dispatch(isFetchingAC(true))
        SocialAPI.getUsers()
        .then((res) => {
            dispatch(getUsersAC(res.data.items))
            dispatch(isFetchingAC(false))
        } )
    }
}

export default usersReducer