import React from 'react'
import classes from './ProfileInfo.module.css'
import Loader from "../../Common/Loader/Loader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
	if(!props.profile){
		return <Loader />
	}
	return(
		<React.Fragment>
			<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
			<div className={classes.photo}>
				<img src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpgd" alt=""/>
			</div>
			<div className="profile_info">
				<p>{props.profile.fullName}</p>
				<h4>{props.profile.aboutMe}</h4>
				<ul>
					{Object.keys(props.profile.contacts).map(li =>{
						return <li>{li} : {props.profile.contacts[li]} </li>
					})}
				</ul>
				<img src={props.profile.photos.large} alt="user"/>
			</div>
		</React.Fragment>
		)
}

export default ProfileInfo