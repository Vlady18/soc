import React from 'react'
import PostItem from './PostItem'
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validation/validation";
import {Textarea} from "../../Common/FormControls/FormContols";

const maxLength15 = maxLength(15)
const AddPostForm = (props) =>{
	return(
		<form onSubmit={props.handleSubmit}>
			<Field component={Textarea} name='addPost'  validate={[required, maxLength15]}/>
			<button>Send</button>
		</form>
	)
}
const AddPostFormRedux = reduxForm({ form: 'addPost' })(AddPostForm)
const MyPosts = (props) =>{

	const addPostHandler = (values) =>{
		props.newsHandler(values.addPost)
	}
	return(
		<div>
			<AddPostFormRedux onSubmit={addPostHandler} />
			{
				props.posts.map((p)=> <PostItem message={p.message} likes={p.likes}/>)
			}
		</div>
	)
}

export default MyPosts