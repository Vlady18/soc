import {API} from "../API/API";
import {stopSubmit} from 'redux-form'
const SET_AUTH_INFO = 'SET_AUTH_INFO'
const SET_CAPTCHA = 'SET_CAPTCHA'

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isCaptcha: false,
    captchaUrl: null
}

const AuthReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_AUTH_INFO :
            return{
                ...state,
                ...action.payload,
                isCaptcha: false
            }
        case SET_CAPTCHA:
            return{
                ...state,
                isCaptcha: true,
                captchaUrl: action.url
            }
        default:
            return state
    }
}


export const setUserInfoAC = (id, email, login, isAuth) =>{
    return{
        type: SET_AUTH_INFO,
        payload: {id, email, login, isAuth},
    }
}

export const setCaptchaAC = (url) =>{
    return{
        type: SET_CAPTCHA,
        url
    }
}
export const setAuthInfoThunkCreator = () => (dispatch)=>{
    return API.setAuth().then(data =>{
        if(data.resultCode === 0){
            let {id, email, login}  = data.data
            dispatch(setUserInfoAC(id, email, login, true))
            let userId = data.data.id;
        }
    })
}

export const authLoginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch)=>{
   let data = await API.authLogin(email, password, rememberMe, captcha);
        let errorMessage = data.data.messages.length > 0 ? data.data.messages : false;
        if(data.data.resultCode === 0){
            dispatch(setAuthInfoThunkCreator())
        }
        else if(data.data.resultCode === 10){
            dispatch(stopSubmit('login', {_error: errorMessage || 'Email or Password is wrong!'}))
            let data = await API.captcha();
                dispatch(setCaptchaAC(data.url));
        } else{
            dispatch(stopSubmit('login', {_error: errorMessage || 'Email or Password is wrong!'}))
        }
}

export const authLogoutThunkCreator = () => async (dispatch)=>{
    let data = await API.authLogout();
        if(data.data.resultCode === 0){
            dispatch(setUserInfoAC(null, null, null, false))
        }
}

export default AuthReducer;