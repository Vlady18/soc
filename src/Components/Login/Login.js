import React from 'react'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormControls/FormContols";
import {email, maxLength, required} from "../../utils/validation/validation";
import {connect} from "react-redux";
import {authLoginThunkCreator} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";
import classes from '../Common/FormControls/FormControls.module.css'

const maxLength15 = maxLength(25)

export const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>

                {createField('login', [required, maxLength15, email], Input, {type: 'text'})}

                {createField('password', [required, maxLength15], Input, {type: 'password'})}

                {createField('remember', [], Input, {type: 'checkbox'})}Remember Me
            {props.error && <div className={classes.summaryError}>
                <span>
                    {props.error}
                </span>
            </div>
            }

            <div>
                {props.isCaptcha
                    ?
                    <div>
                        <img src={props.captchaUrl} alt=""/>
                        {createField('captcha', [], Input, {type: 'text'})}
                        {/*<Field name="captcha" component={Input} type="text" />*/}
                    </div>
                    : null}
            </div>
            <button>Login</button>
        </form>

    )
}
const CreateReduxForm = reduxForm({ form: 'login' })(LoginForm)



const Login = (props)=>{
    const onSubmit = (data) =>{
        props.authLogin(data.login, data.password, data.remember, data.captcha)
    }
    if(props.isAuth){
        return(
            <Redirect to={'/profile'} />
        )
    }
    return(
        <div>
            <h1>LoginPage</h1>
            <CreateReduxForm onSubmit={onSubmit}  {...props}/>

        </div>
    )
}

const mapStateToProps =(state)=>{
    return{
        isAuth: state.Auth.isAuth,
        isCaptcha: state.Auth.isCaptcha,
        captchaUrl: state.Auth.captchaUrl
    }
}

export default connect(mapStateToProps, {
    authLogin: authLoginThunkCreator
})(Login)