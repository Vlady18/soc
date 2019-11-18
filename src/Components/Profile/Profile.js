import React from 'react'
import ProfileInfo from './ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) =>{
	return(
		<div>
				<ProfileInfo updateUserProfile={props.updateUserProfile} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
				<MyPostsContainer />
		</div>
	)
}

export default Profile