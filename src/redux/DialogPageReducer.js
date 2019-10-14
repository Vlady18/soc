import axios from "axios";

const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
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
			]
		}

const DialogPageReducer = (state = initialState, action) =>{
	switch (action.type) {
		case UPDATE_MESSAGE_TEXT:
			return{
				...state,
				newMessageText: action.newMessageText
			}
		case SEND_MESSAGE: 
			return{
				...state,
				messages: [...state.messages, {id: 5, message: action.newMessage}]
			}
		default:
			return state
	}
}

	
export const sendMessageCreator = (newMessage) =>{
	debugger
	return ({
		type: SEND_MESSAGE,
		newMessage
	})
}

export const updateMessageTextCreator = (newText) =>{
	return ({
		type: UPDATE_MESSAGE_TEXT,
		newMessageText: newText
	})
}



export default DialogPageReducer