import {API} from "../API/API";

const ADD_POST = 'ADD_POST'
const UPDATE_TEXT = 'UPDATE_TEXT'
const USER_PROFILE = 'USER_PROFILE'
const STATUS = 'STATUS'
const SUCCESS_UPDATE_AVATAR = 'SUCCESS_UPDATE_AVATAR'

const initialState = {
	posts: [
		{id:1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ducimus?', likes: 11},
		{id:2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, enim.', likes: 23}
	],
	newPostText: '',
	userProfile: null,
	status: ''
}

const ProfilePageReducer = (state = initialState, action) =>{
	switch (action.type) {
		case ADD_POST:
			// let stateCopy = {...state}
			// stateCopy.posts = [...state.posts]
			// stateCopy.posts.push({id: 3, message: state.newPostText, likes: 0})
			// stateCopy.newPostText = ''
			return {
				...state,
				posts: [...state.posts, {id: 3, message: action.newPost, likes: 0}]
			}
		case UPDATE_TEXT:
			// let stateCopy = {...state}
			// stateCopy.newPostText = action.newText
			// return stateCopy
			return{
				...state,
				newPostText: action.newText
			}
		case USER_PROFILE:
			return{
				...state,
				userProfile: action.profile
			}
		case STATUS:
			return{
				...state,
				status: action.status
			}
		case SUCCESS_UPDATE_AVATAR:
			return{
				...state,
				userProfile: {...state.userProfile, photos: action.file}
			}
		default:
			return state
	}
}

export const addPostActionCreator = (newPost) =>{
	return ({type: ADD_POST, newPost})
}

// export const updateTextActionCreator = (text) =>{
// 	return({type: UPDATE_TEXT, newText: text})
// }
export const userProfileAC = (profile) =>{
	return({type: USER_PROFILE, profile})
}
export const userStatusAC = (status) =>{
	return({type: STATUS, status})
}
export const successUpdatePhotoAC = (file)=>{
	return({type: SUCCESS_UPDATE_AVATAR, file})
}

export const userProfileThunkCreator = (userId) => async (dispatch)=>{
	if(!userId){
		let data = await API.loadMeProfile();
			userId = data.data.id
			API.loadUserProfile(userId).then(data =>{
				dispatch(userProfileAC(data))
			})
	}
	else {
		let data = await API.loadUserProfile(userId);
			dispatch(userProfileAC(data))
	}
}

export const userStatusThunkCreator = (userId) => async (dispatch)=>{
	if(!userId){
		let data = await API.loadMeProfile();
			userId = data.data.id
			await API.loadUserStatus(userId).then(status=>{
				dispatch(userStatusAC(status))
			})
	}
	await API.loadUserStatus(userId).then(status=>{
		dispatch(userStatusAC(status))
	})
}

export const updateUserStatusThunkCreator = (status) => async (dispatch)=>{
	let data = await API.updateUserStatus(status);
		if(data.resultCode === 0){
			dispatch(userStatusAC(status))
		}
}
export const updatePhotoThunkCreator = (file) => async (dispatch)=>{
	let data = await API.profileAvatar(file);
		if(data.resultCode === 0){
			dispatch(successUpdatePhotoAC(file))
		}
}
export default ProfilePageReducer;