import React, {useState} from 'react'
import Loader from "../../Common/Loader/Loader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {createField} from "../../Common/FormControls/FormContols";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, savePhoto, isOwner, updateUserProfile}) => {
    if (!profile) {
        return <Loader/>
    }
    const [editMode, setEditMode] = useState(false)
    const avatarChange = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (data) =>{
        updateUserProfile(data)
    }
    return (
        <React.Fragment>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div className="user_avatar">
                <img src={profile.photos.large || "https://img.icons8.com/plasticine/2x/user.png"}
                     alt="user"/>
                {
                    isOwner ? <input onChange={avatarChange} type="file"/> : null
                }
            </div>
            {
                editMode
                    ? <ProfileDataForm
                        profile={profile}
                        isOwner={isOwner}
                        onSubmit={onSubmit}
                    />
                    :
                    <ProfileData
                        profile={profile}
                        isOwner={isOwner}
                        goToEditMode={() => {
                            setEditMode(true)
                        }}/>
            }

        </React.Fragment>
    )
}

const ProfileContacts = ({contactKey, contactValue}) => {
    return <li><b>{contactKey}: </b>{contactValue}</li>
}

const ProfileData = ({profile, isOwner, avatarChange, goToEditMode}) => {
    return (
        <div className="profile_info">

            <div>
                {
                    isOwner && <button onClick={goToEditMode}>Upgrade Profile</button>
                }
            </div>
            <p><b>FullName: </b>{profile.fullName}</p>
            <p><b>lookingForAJob:</b> {profile.lookingForAJob ? "Yes" : 'No'}</p>
            {
                profile.lookingForAJob &&
                <p><b>lookingForAJobDescription:</b> {profile.lookingForAJobDescription ? "Yes" : 'No'}</p>
            }
            <h4>{profile.aboutMe}</h4>
            <ul>
                {Object.keys(profile.contacts).map(li => {
                    return <ProfileContacts key={li} contactKey={li} contactValue={profile.contacts[li]}/>
                })}
            </ul>

        </div>
    )
}


export default ProfileInfo