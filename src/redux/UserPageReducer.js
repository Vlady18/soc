import {API} from "../API/API";

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOW_IN_PROGRESS = 'TOGGLE_IS_FOLLOW_IN_PROGRESS'

const initialState = {
	users: [ ],
	pageSize: 10,
	totalUserCount: 10,
	currentPage: 1,
	isFetching: false,
	isFollowInProgress: [ ]
	}

const UserPageReducer = (state = initialState, action) =>{
	switch (action.type) {
		case FOLLOW :
			return{
				...state,
				users: state.users.map(u => {
					if(action.userId === u.id){
						return {...u, followed: true}
					}
					return u
				})
			}
		case UN_FOLLOW :
		return{
			...state,
			users: state.users.map(u=>{
				if(action.userId === u.id){
					return {...u, followed: false}
				}
				return u
			})
		}
		case SET_USERS :
			return{
				...state,
				users: action.users
			}
		case SET_CURRENT_PAGE :
			return{
				...state,
				currentPage: action.currentPage
			}
		case SET_TOTAL_COUNT :
			return{
				...state,
                totalUserCount: action.total
			}
		case TOGGLE_IS_FETCHING :
			return{
				...state,
				isFetching: action.fetch
			}
		case TOGGLE_IS_FOLLOW_IN_PROGRESS :
			return{
				...state,
				isFollowInProgress: action.fetch
					? [...state.isFollowInProgress, action.userId]
					: state.isFollowInProgress.filter(id => id !== action.userId)
			}
		default:
			return state
	}
}

export const followAC = (userId) =>{
	return{
		type: FOLLOW,
		userId: userId
	}	
}

export const unfollowAC = (userId) =>{
	return{
		type: UN_FOLLOW,
		userId: userId
	}	
}

export const setUsersAC = (users) =>{
	return{
		type: SET_USERS,
		users: users
	}
}
export const setCurrentPageAC = (currentPage) =>{
	return{
		type: SET_CURRENT_PAGE,
		currentPage
	}
}
export const totalUserCountAC = (total) =>{
    return{
        type: SET_TOTAL_COUNT,
        total
    }
}
export const toggleIsFetchingAC = (fetch) =>{
	return{
		type: TOGGLE_IS_FETCHING,
		fetch
	}
}
export const toggleIsFollowInProgresAC = (fetch, userId) =>{
	return{
		type: TOGGLE_IS_FOLLOW_IN_PROGRESS,
		fetch,
		userId
	}
}

export const getUsersThunkCreator = (pageSize, currentPage) => (dispatch)=>{
	dispatch(toggleIsFetchingAC(true))
	API.getUsers(pageSize, currentPage).then(data=>{
		dispatch(setUsersAC(data.items))
		dispatch(toggleIsFetchingAC(false))
		dispatch(totalUserCountAC(data.totalCount))
	})
}
export const changePageThunkCreator = (pageSize, page) => (dispatch)=>{
	dispatch(setCurrentPageAC(page))
	dispatch(toggleIsFetchingAC(true))
	API.changePage(pageSize, page).then(data=>{
		dispatch(setUsersAC(data.items))
		dispatch(toggleIsFetchingAC(false))
	})
}

export const followThunkCreator = (userId) => (dispatch)=>{
	dispatch(toggleIsFollowInProgresAC(true, userId))
	API.inFollow(userId).then(data=>{
		dispatch(toggleIsFollowInProgresAC(false, userId))
		if(data.resultCode === 0){
			dispatch(followAC(userId))
		}
	})
}
export const unfollowThunkCreator = (userId) => (dispatch)=>{
	dispatch(toggleIsFollowInProgresAC(true, userId))
	API.unFollow(userId).then(data=>{
		dispatch(toggleIsFollowInProgresAC(false, userId))
		if(data.resultCode === 0){
			dispatch(unfollowAC(userId))
		}
	})
}
export default UserPageReducer;