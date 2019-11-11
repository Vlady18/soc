import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar'
import {Route, Switch, withRouter} from 'react-router-dom'
// import ProfileContainer from './Components/Profile/ProfileContainer'

import UsersAPI from './Components/Users/UsersContainer'
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {setInitializedThunkCreator} from "./redux/AppReducer";
import Loader from "./Components/Common/Loader/Loader";

const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const DialogsContainers = React.lazy(() => import('./Components/Dialogs/DialogsContainers'));
class App extends Component {
    componentDidMount() {
        this.props.setInitialized()
    }

    render() {
        if(!this.props.initialized){
            return <Loader />
        }
    return (
      <div className="App">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper_content">
	        <Switch>
                <Route exact render={() => <React.Suspense fallback={<div>Загрузка...</div>}>
                        <ProfileContainer/>
                    </React.Suspense> } path={'/profile/:userId?'}/>
				<Route render={() => (<DialogsContainers/>)} path={'/dialogs'}/>
				<Route render={() => (<UsersAPI/>)} path={'/users'}/>
				<Route render={() => (<Login/>)} path={'/login'}/>
				<Route render={()=>(<h1>Not found</h1>)}/>
			</Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
    return{
        initialized: state.app.initialized
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, {
        setInitialized: setInitializedThunkCreator
    }))(App)

