import classes from "./User.module.css";
import userPhoto from "../../assets/17241-200.png";
import React from "react";
import {NavLink} from "react-router-dom";
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";

const Users = (props) =>{
    return <div>
        <Pagination
            totalUserCount={props.totalUserCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            changeCurrentPage={props.changeCurrentPage}
            portionSize={10}
        />
        this will be users
        {
            props.users.map( u => <User
                    key={u.id}
                    user={u}
                    isFollowInProgress={props.isFollowInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
            )
        }
    </div>
}
export default Users