import React from 'react'
import classes from './userDialog.module.css'
import {NavLink} from 'react-router-dom'


const Userdialog = (props) =>{
	return(
		<li>
			<NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
		</li>
	)
}

export default Userdialog
