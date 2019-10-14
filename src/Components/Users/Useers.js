import classes from "./User.module.css";
import userPhoto from "../../assets/17241-200.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {API} from "../../API/API";

const Users = (props) =>{
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (var i = 1; i <= pageCount; i++){
        pages.push(i);
    }
    return <div>
        <div className={classes.pagination}>
            {
                pages.map(p => {
                    return <span onClick={()=>{props.changeCurrentPage(p)}} className={props.currentPage === p ? classes.current_page : null}>{p}</span>
                })
            }
        </div>
        this will be users
        {
            props.users.map( u =>  <div key={u.id}>
                    <div className="left-list_user">
                     <NavLink to={'/profile/' + u.id}><img src={u.photos.small == null ? userPhoto : u.photos.small} className={classes.user_img}/></NavLink>
                        {
                            u.followed
                                ? <button disabled={props.isFollowInProgress.some(id => id === u.id)} onClick={(e) => {
                                        props.unfollow(u.id)

                                    // props.toggleFollowInProgress(true, u.id)
                                    // API.unFollow(u.id).then(data=>{
                                    //     props.toggleFollowInProgress(false, u.id)
                                    //     if(data.resultCode === 0){
                                    //         props.unfollow(u.id)
                                    //     }
                                    //     debugger
                                    // })
                                   }}>Unfollow</button>
                                : <button disabled={props.isFollowInProgress.some(id => id === u.id)} onClick={(e) => {
                                //     props.toggleFollowInProgress(true, u.id)
                                //     API.inFollow(u.id).then(data=>{
                                //         props.toggleFollowInProgress(false, u.id)
                                //         if(data.resultCode === 0){
                                //                 props.follow(u.id)
                                //             }
                                // })
                                    props.follow(u.id)
                                }}>Follow</button>
                        }

                    </div>
                    <div className="right-list_user">
                        <div className="l-info">
                            <h5>{u.name}</h5>
                            <p>{u.status}</p>
                        </div>
                        <div className="r-info">
                            <h5>{'u.location.country'}</h5>
                            <p>{'u.location.city'}</p>
                        </div>
                    </div>
                </div>

            )
        }
    </div>
}
export default Users