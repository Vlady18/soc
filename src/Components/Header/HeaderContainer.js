import React from 'react'
import classes from './Header.module.css'
import {NavLink, withRouter} from "react-router-dom";
import axios from "axios";
import {authLogoutThunkCreator, setAuthInfoThunkCreator, setUserInfoAC} from "../../redux/AuthReducer";
import {connect} from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {


	render() {
		return (
			<Header {...this.props} login={this.props.login} isFetch={this.props.isFetch} />
		)
	}
}
const mapDispatchToProps = (state)=>{
	return{
		isAuth: state.Auth.isAuth,
		login: state.Auth.login
	}
}
let HeaderContainerWithRouter = withRouter(HeaderContainer)
export default connect(mapDispatchToProps,
	{
		setAuthInfo: setAuthInfoThunkCreator,
		authLogout: authLogoutThunkCreator
	})
(HeaderContainerWithRouter)