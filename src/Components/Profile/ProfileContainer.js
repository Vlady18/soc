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
	userStatusThunkCreator,
	updatePhotoThunkCreator,
    updateProfileInfoThunkCreator
} from "../../redux/ProfilePageReducer";
import {Redirect, withRouter} from "react-router-dom";
import {API} from "../../API/API";
import {withAuthRedirect} from "../hoc/authRedirect";
import Dialogs from "../Dialogs";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    reloadProfle() {
        // debugger
        let userId = this.props.match.params.userId;
        this.props.userProfile(userId)
        this.props.userStatus(userId)
    }

    componentDidMount() {
        // let userId = this.props.match.params.userId;
        // this.props.userProfile(userId)
        // this.props.userStatus(userId)
        this.reloadProfle()
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
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.reloadProfle();
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                isAuth={this.props.isAuth}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}
				updateUserProfile={this.props.updateUserProfile}
            />
        )
    }

}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => {
    return {
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
        updateStatus: updateUserStatusThunkCreator,
        savePhoto: updatePhotoThunkCreator,
		updateUserProfile: updateProfileInfoThunkCreator
    }),
    withRouter)(ProfileContainer)