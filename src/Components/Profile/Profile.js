import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts'
import ProfileInfo from './ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
const ProfileContainer = (props) =>{
	return(
		<div>
				<ProfileInfo />
				<MyPostsContainer />
		</div>
	)
}

export default ProfileContainer