import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts'
import ProfileInfo from './ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {
	updateUserStatusThunkCreator,
	userProfileAC,
	userProfileThunkCreator,
	userStatusThunkCreator
} from "../../redux/ProfilePageReducer";
import {Redirect, withRouter} from "react-router-dom";
import {API} from "../../API/API";
import {withAuthRedirect} from "../hoc/authRedirect";
import Dialogs from "../Dialogs";
import {compose} from "redux";
class ProfileContainer extends React.Component{
	componentDidMount() {
		let userId = this.props.match.params.userId;
		this.props.userProfile(userId)
		this.props.userStatus(userId)
		// if(!userId){
		// 	debugger
		// 	API.loadMeProfile().then(data=>{
		// 		userId = data.data.id
		// 		API.loadUserProfile(userId).then(data =>{
		// 			this.props.setUserProfile(data)
		// 		})
		// 	})
		// } else API.loadUserProfile(userId).then(data=>{
		// 	this.props.setUserProfile(data)
		// })
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if(this.props.match.params.userId != prevProps){
			let userId = this.props.match.params.userId;
			this.props.userProfile(userId)
			this.props.userStatus(userId)
		}
	}

	render(){
		return(
			<Profile
				{...this.props}
				profile={this.props.profile}
				isAuth={this.props.isAuth}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
				isOwner={!this.props.match.params.userId}
			/>
		)
	}

}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) =>{
	return{
		profile: state.ProfilePage.userProfile,
		status: state.ProfilePage.status
	}
}

// let ProfileContainerWithRouter = withRouter(AuthRedirectComponent)
export default compose(
withAuthRedirect,
	connect(mapStateToProps, {
		userProfile: userProfileThunkCreator,
		userStatus: userStatusThunkCreator,
		updateStatus: updateUserStatusThunkCreator
	}),
	withRouter)(ProfileContainer)