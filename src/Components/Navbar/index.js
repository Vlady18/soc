import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () =>{
	return(
		<nav className={classes.Nav}>
			<ul>
				<li>
					<NavLink to="/" activeClassName={classes.active}>Главная</NavLink>
				</li>
				<li>
					<NavLink to="/profile" activeClassName={classes.active}>Профиль</NavLink>
				</li>
				<li>
					<NavLink to="/about" activeClassName={classes.active}>О нас</NavLink>
				</li>
				<li>
					<NavLink to="/dialogs" activeClassName={classes.active}>Сообщения</NavLink>
				</li>
				<li>
					<NavLink to="/news" activeClassName={classes.active}>Новости</NavLink>
				</li>
				<li>
					<NavLink to="/users" activeClassName={classes.active}>Пользователи</NavLink>
				</li>
				<li>
					<NavLink to="/login" activeClassName={classes.active}>Логин</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar