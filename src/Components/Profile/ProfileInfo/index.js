import React from 'react'
import classes from './ProfileInfo.module.css'
import Loader from "../../Common/Loader/Loader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
	if(!props.profile){
		return <Loader />
	}
	const avatarChange = (e) =>{
		console.log(e)
	}
	return(
		<React.Fragment>
			<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
			<div className="profile_info">
				<p>{props.profile.fullName}</p>
				<h4>{props.profile.aboutMe}</h4>
				<ul>
					{Object.keys(props.profile.contacts).map(li =>{
						return <li>{li} : {props.profile.contacts[li]} </li>
					})}
				</ul>
				<div className="user_avatar">
					<img src={props.profile.photos.large ? props.profile.photos.large : "https://img.icons8.com/plasticine/2x/user.png"} alt="user"/>
					{
						props.isOwner ? <input onChange={avatarChange} type="file"/> : null
					}
				</div>
			</div>
		</React.Fragment>
		)
}

export default ProfileInfo