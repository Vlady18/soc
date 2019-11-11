import classes from "./User.module.css";
import userPhoto from "../../assets/17241-200.png";
import React from "react";
import {NavLink} from "react-router-dom";

const User = ({user, isFollowInProgress, unfollow, follow, ...props}) => {
    return <div>
        <div className="left-list_user">
            <NavLink to={'/profile/' + user.id}><img src={user.photos.small == null ? userPhoto : user.photos.small}
                                                  className={classes.user_img}/></NavLink>
            {
                user.followed
                    ? <button disabled={isFollowInProgress.some(id => id === user.id)} onClick={(e) => {
                        unfollow(user.id)
                        // props.toggleFollowInProgress(true, user.id)
                        // API.unFollow(user.id).then(data=>{
                        //     props.toggleFollowInProgress(false, user.id)
                        //     if(data.resultCode === 0){
                        //         props.unfollow(user.id)
                        //     }
                        //     debugger
                        // })
                    }}>Unfollow</button>
                    : <button disabled={isFollowInProgress.some(id => id === user.id)} onClick={(e) => {
                        //     props.toggleFollowInProgress(true, user.id)
                        //     API.inFollow(user.id).then(data=>{
                        //         props.toggleFollowInProgress(false, user.id)
                        //         if(data.resultCode === 0){
                        //                 props.follow(user.id)
                        //             }
                        // })
                       follow(user.id)
                    }}>Follow</button>
            }

        </div>
        <div className="right-list_user">
            <div className="l-info">
                <h5>{user.name}</h5>
                <p>{user.status}</p>
            </div>
            <div className="r-info">
                <h5>{'user.location.country'}</h5>
                <p>{'user.location.city'}</p>
            </div>
        </div>
    </div>
}
export default User