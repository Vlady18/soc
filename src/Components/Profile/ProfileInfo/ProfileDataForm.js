import React from "react";
import {createField, Input, Textarea} from "../../Common/FormControls/FormContols";
import {reduxForm} from "redux-form";
import {LoginForm} from "../../Login/Login";

const ProfileDataForm = ({profile, isOwner, avatarChange, handleSubmit}) =>{
    return  <form className="profile_info" onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        <p><b>Full Name:</b>{createField('FullName', [], Input, {type: 'text'}, {placeholder: 'Введите имя'})}</p>
        <p><b>lookingForAJob:</b> {createField('lookingForAJob', [], Input, {type: 'checkbox'})}</p>
        <p><b>lookingForAJobDescription:</b> {createField('lookingForAJobDescription', [], Textarea)}</p>
        <p><b>AboutMe:</b> {createField('AboutMe', [], Textarea)}</p>
        {/*<ul>*/}
        {/*    {Object.keys(profile.contacts).map(li => {*/}
        {/*        return <ProfileContacts key={li} contactKey={li} contactValue={profile.contacts[li]}/>*/}
        {/*    })}*/}
        {/*</ul>*/}
        {/*<div className="user_avatar">*/}
        {/*    <img src={profile.photos.large ? profile.photos.large : "https://img.icons8.com/plasticine/2x/user.png"}*/}
        {/*         alt="user"/>*/}
        {/*    {*/}
        {/*        isOwner ? <input onChange={avatarChange} type="file"/> : null*/}
        {/*    }*/}
        {/*</div>*/}
    </form>
}
const ProfileDataFormRedux = reduxForm({ form: 'edit_profile'})(ProfileDataForm)
export default ProfileDataFormRedux