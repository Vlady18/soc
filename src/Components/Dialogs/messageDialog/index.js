import React from 'react'
import {NavLink} from 'react-router-dom'
const MessageDialog = (props) =>{
	return(
		<li>
			<NavLink to="">{props.message}</NavLink>
		</li>
		)
}


export default MessageDialog