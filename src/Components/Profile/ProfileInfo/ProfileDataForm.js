import React from "react";
import {createField, Input, Textarea} from "../../Common/FormControls/FormContols";
import {reduxForm} from "redux-form";
import {LoginForm} from "../../Login/Login";
import classes from "../../Common/FormControls/FormControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) =>{
    return  <form className="profile_info" onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={classes.summaryError}>
                <span>
                    {error}
                </span>
        </div>
        }
        <p><b>Full Name:</b>{createField('fullName', [], Input, {type: 'text'}, {placeholder: 'Введите имя'})}</p>
        <p><b>lookingForAJob:</b> {createField('lookingForAJob', [], Input, {type: 'checkbox'})}</p>
        <p><b>lookingForAJobDescription:</b> {createField('lookingForAJobDescription', [], Textarea)}</p>
        <p><b>AboutMe:</b> {createField('aboutMe', [], Textarea)}</p>
        <ul>
            {Object.keys(profile.contacts).map(li => {
                return <li key={li}><b>{li}:</b> {createField(`contacts.${li}`, [], Input)}</li>
            })}
        </ul>
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