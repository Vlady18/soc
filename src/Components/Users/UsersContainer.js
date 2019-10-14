import React from 'react'
import {connect} from 'react-redux'
import {
	followAC,
	unfollowAC,
	setUsersAC,
	setCurrentPageAC,
	totalUserCountAC,
	toggleIsFetchingAC,
	toggleIsFollowInProgresAC,
	getUsersThunkCreator,
	changePageThunkCreator,
	followThunkCreator,
	unfollowThunkCreator
} from '../../redux/UserPageReducer'
import axios from "axios";
import Users from "./Useers";
import Loader from "../Common/Loader/Loader";
import {API} from "../../API/API";

class UsersAPI extends React.Component{
	componentDidMount() {
		this.props.getUsers(this.props.pageSize, this.props.currentPage)
		// this.props.toggleIsFetching(true)
		// API.getUsers(this.props.pageSize, this.props.currentPage).then(data=>{
		// 	this.props.setUsers(data.items)
		// 	this.props.toggleIsFetching(false)
		// 	this.props.setTotalCount(data.totalCount)
		// })
	}

	// if(this.props.users.length === 0){
	// 	axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
	// 		this.props.setUsers(response.data.items)
	// 	})
	// }
	changeCurrentPage = (page) =>{
		// this.props.setCurrentPage(page)
		// this.props.toggleIsFetching(true)
		// API.changePage(this.props.pageSize, page).then(data=>{
		// 	this.props.setUsers(data.items)
		// 	this.props.toggleIsFetching(false)
		// })
		this.props.changePage(this.props.pageSize, page)
	}
	render(){

		return <>
			{this.props.isFetching ? <Loader /> : null}
				<Users
				totalUserCount={this.props.totalUserCount}
				pageSize={this.props.pageSize}
				changeCurrentPage={this.changeCurrentPage}
				currentPage={this.props.currentPage}
				users={this.props.users}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				toggleFollowInProgress={this.props.toggleFollowInProgress}
				isFollowInProgress={this.props.isFollowInProgress}
			/>

		</>
	}
}

const mapStateToProps = (state) =>{
	return{
		users: state.UserPage.users,
		pageSize: state.UserPage.pageSize,
		totalUserCount: state.UserPage.totalUserCount,
		currentPage: state.UserPage.currentPage,
		isFetching: state.UserPage.isFetching,
		isFollowInProgress: state.UserPage.isFollowInProgress,
	}
}
// const mapDispatchToProps = (dispatch) =>{
// 	return{
// 		follow: (userId) =>{
// 			dispatch(followAC(userId))
// 		},
// 		unfollow: (userId) =>{
// 			dispatch(unfollowAC(userId))
// 		},
// 		setUsers: (users) =>{
// 			dispatch(setUsersAC(users))
// 		},
// 		setCurrentPage: (page) =>{
// 			dispatch(setCurrentPageAC(page))
// 		},
// 		setTotalCount: (total) =>{
// 			dispatch(totalUserCountAC(total))
// 		},
// 		toggleIsFetching: (fetch) =>{
// 			dispatch(toggleIsFetchingAC(fetch))
// 		}
// 	}
// }

export default connect(mapStateToProps, {
	setUsers: setUsersAC,
	setCurrentPage: setCurrentPageAC,
	setTotalCount: totalUserCountAC,
	toggleIsFetching: toggleIsFetchingAC,
	toggleFollowInProgress: toggleIsFollowInProgresAC,
	getUsers: getUsersThunkCreator,
	changePage: changePageThunkCreator,
	follow: followThunkCreator,
	unfollow: unfollowThunkCreator
	}
)(UsersAPI)