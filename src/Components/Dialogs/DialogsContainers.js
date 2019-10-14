import React from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import classes from './Dialogs.module.css'
import Userdialog from './userDialog'
import MessageDialog from './messageDialog'
import {sendMessageCreator, updateMessageTextCreator} from '../../redux/DialogPageReducer'
import Dialogs from './index'
import {connect} from 'react-redux'
import {withAuthRedirect} from "../hoc/authRedirect";
import {compose} from "redux";

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

const mapStateToProps = (state) =>{
	return{
		dialogs: state.DialogPage.dialogs,
		messages: state.DialogPage.messages,
		newMessageText: state.DialogPage.newMessageText
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		changeMessageText: (messageText) => {
			dispatch(updateMessageTextCreator(messageText))
		},
		buttonHandler: (newMessage) =>{
			dispatch(sendMessageCreator(newMessage))
		}
	}
}

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps)
	)(Dialogs)
// connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

