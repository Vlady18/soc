import React from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import classes from './Dialogs.module.css'
import Userdialog from './userDialog'
import MessageDialog from './messageDialog'
import {sendMessageCreator, updateMessageTextCreator} from '../../redux/DialogPageReducer'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormControls/FormContols";
import {maxLength, required} from "../../utils/validation/validation";

const maxLength15 = maxLength(15)

const AddMessageForm = (props) =>{
	return(
		<form onSubmit={props.handleSubmit}>
			<Field component={Textarea} validate={[required, maxLength15]} name={'newMessage'} placeholder={"Введите сообщение"}/>
			<br/><button>Send</button>
		</form>
	)
}
const ContactForm = reduxForm({
	form: 'addMessage'
})(AddMessageForm)

const Dialogs = (props) =>{

	if(!props.isAuth){
		return <Redirect to={'/login'} />
	}
	const addMessageSubmit = (values)=>{
		props.buttonHandler(values.newMessage)
	}
	return(
		<React.Fragment>
			<ContactForm
				onSubmit={addMessageSubmit}
			/>
			<div className={classes.dialogs_wrap}>
				<ul className={classes.user_dialogs}>
					{
						props.dialogs.map((d) => <Userdialog id={d.id} name={d.name} />)
					}
					
				</ul>
				<ul className={classes.message_dialogs}>
					{
						props.messages.map((m)=> <MessageDialog message={m.message}/>)
					}
				</ul>
			</div>
		</React.Fragment>
	)
}

export default Dialogs