import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormContols";
import {email, maxLength, required} from "../../utils/validation/validation";
import {connect} from "react-redux";
import {authLoginThunkCreator} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";
import classes from '../Common/FormControls/FormControls.module.css'

const maxLength15 = maxLength(20)

export const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" validate={[required, maxLength15, email]} component={Input} type="text" />
            </div>
            <div>
                <Field name="password" validate={[required, maxLength15]} component={Input} type="password" />
            </div>
            <div>
                <Field name="remember" component={Input} type="checkbox" /> Remember Me
            </div>
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
                        <Field name="captcha" component={Input} type="text" />
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