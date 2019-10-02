import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () =>{
	return(
		<header className={classes.Header}>
			<div className={classes.logo}>
				<img src="https://pbs.twimg.com/profile_images/3572978953/8c522d3ea384cd42e46a4a2498300c35_400x400.jpeg" alt=""/>
			</div>
			<div className={classes.login_block}>
				<NavLink to="/login">Login</NavLink>
			</div>
		</header>
	)
}

export default Header