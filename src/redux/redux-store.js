import {createStore, combineReducers, applyMiddleware} from 'redux'
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

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))


window.store = store
console.log(store.getState())
export default store