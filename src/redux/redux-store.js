import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import ProfilePageReducer from './ProfilePageReducer'
import DialogPageReducer from './DialogPageReducer'
import UserPageReducer from './UserPageReducer'
import AuthReducer from "./AuthReducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import AppReducer from "./AppReducer";
const rootReducers = combineReducers({
	ProfilePage: ProfilePageReducer,
	DialogPage: DialogPageReducer,
	UserPage: UserPageReducer,
	Auth: AuthReducer,
	form: formReducer,
	app: AppReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))


window.__store__ = store
console.log(store.getState())
export default store