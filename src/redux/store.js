

import ProfilePageReducer from './ProfilePageReducer'
import DialogPageReducer from './DialogPageReducer'
// let rerender = () =>{
// 	console.log('changed')	
// }

// const state = {
// 	ProfilePage: {
// 		posts: [
// 			{id:1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ducimus?', likes: 11},
// 			{id:2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, enim.', likes: 23}		
// 		],
// 		newPostText: ''
// 	},
// 	DialogPage: {
// 		dialogs: [
// 			{id: 1, name: 'Maks'},
// 			{id: 2, name: 'Olya'},
// 			{id: 3, name: 'Vova'},
// 			{id: 4, name: 'Maria'}
// 		],
// 		messages: [
// 			{id: 1, message: 'hi'},
// 			{id: 2, message: 'buy'},
// 			{id: 3, message: 'ok'},
// 			{id: 4, message: 'yes'}
// 		]
// 			}
// }
// export const addpost = () =>{
// 	state.ProfilePage.posts.push({id: 3, message: state.ProfilePage.newPostText, likes: 0})
// 	state.ProfilePage.newPostText = ''
// 	rerender(state)
// }

// export const updateText = (newText) =>{
// 	state.ProfilePage.newPostText = newText
// 	rerender(state)

// }


// export const subscribe = (observed) =>{
// 	rerender = observed
// }
// export default state


export let store = {
	_state: {
		ProfilePage: {
			posts: [
				{id:1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ducimus?', likes: 11},
				{id:2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, enim.', likes: 23}		
			],
			newPostText: ''
		},
		DialogPage: {
			dialogs: [
				{id: 1, name: 'Maks'},
				{id: 2, name: 'Olya'},
				{id: 3, name: 'Vova'},
				{id: 4, name: 'Maria'}
			],
			messages: [
				{id: 1, message: 'hi'},
				{id: 2, message: 'buy'},
				{id: 3, message: 'ok'},
				{id: 4, message: 'yes'}
			],
			newMessageText: ''
		}
	},
	getState(){
		return (this._state)
	},
	_callSubscr(){
		console.log('State changed')
	},
	subscribe(observed){
		this._callSubscr = observed
	},
	// addpost(){
	// 	this._state.ProfilePage.posts.push({id: 3, message: this._state.ProfilePage.newPostText, likes: 0})
	// 	this._state.ProfilePage.newPostText = ''
	// 	this._callSubscr(this._state)
	// },
	// updateText(newText){
	// 	this._state.ProfilePage.newPostText = newText
	// 	this._callSubscr(this._state)
	// }
	dispatch(action){
		// if(action.type === ADD_POST){
		// 	this._state.ProfilePage.posts.push({id: 3, message: this._state.ProfilePage.newPostText, likes: 0})
		// 	this._state.ProfilePage.newPostText = ''
		// 	this._callSubscr(this._state)
		// } 
		// else if(action.type === UPDATE_TEXT){
		// 	this._state.ProfilePage.newPostText = action.newText
		// 	this._callSubscr(this._state)
		// }
		// else if(action.type === UPDATE_MESSAGE_TEXT){
		// 	this._state.DialogPage.newMessageText = action.newMessageText
		// 	this._callSubscr(this._state)
		// } else if(action.type === SEND_MESSAGE){
		// 	this._state.DialogPage.messages.push({id: 5, message: this._state.DialogPage.newMessageText})
		// 	this._state.DialogPage.newMessageText = ''
		// 	this._callSubscr(this._state)
		// }

		ProfilePageReducer(this._state.ProfilePage, action)
		DialogPageReducer(this._state.DialogPage, action)
		this._callSubscr(this._state)
	}
}
window.store = store
	
	// export const sendMessageCreator = () =>{
	// 	return ({
	// 		type: SEND_MESSAGE
	// 	})
	// }

	// export const updateMessageTextCreator = (newText) =>{
	// 	return ({
	// 		type: UPDATE_MESSAGE_TEXT,
	// 		newMessageText: newText
	// 	})
	// }

	// export const addPostActionCreator = () =>{
	// 	return ({type: ADD_POST})
	// }

	// export const updateTextActionCreator = (text) =>{
	// 	return({type: UPDATE_TEXT, newText: text})
	// }