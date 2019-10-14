import React from 'react'
import classes from './PostItem.module.css'
const PostItem = (props) =>{
	return(
		<div className={classes.item}>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZnirHGoM6CpcA9J6xmbWfcPsh4oYdJUKf5QNADgygUnnfDRs" alt="" />
			{props.message}
			<br /><span><i>likes {props.likes}</i></span>
		</div>
	)
}

export default PostItem