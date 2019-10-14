import React from 'react'
import PostItem from './PostItem'
import MyPosts from './index'
import {addPostActionCreator, updateTextActionCreator} from '../../../redux/ProfilePageReducer'
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
	return{
		posts: state.ProfilePage.posts,
		newPostText: state.ProfilePage.newPostText
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		newsHandler: (newPost) =>{
			dispatch(addPostActionCreator(newPost))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)