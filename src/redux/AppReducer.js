import {API} from "../API/API";
import {stopSubmit} from 'redux-form'
import {setAuthInfoThunkCreator} from "./AuthReducer";
const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
    initialized: false
}

const AppReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_INITIALIZED :
            return{
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const setInitializedAC = () =>{
    return{
        type: SET_INITIALIZED,
    }
}

export const setInitializedThunkCreator = () => (dispatch)=>{
    dispatch(setAuthInfoThunkCreator()).then(
        () => (dispatch(setInitializedAC()))
    )
}

export default AppReducer;