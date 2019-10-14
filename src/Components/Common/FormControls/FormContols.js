import React from "react";
import classes from './FormControls.module.css'

export const FormControls = ({input, meta, ...props}) =>{
    const hasError = meta.error && meta.touched;
    return(
        <div className={classes.formControls + ' ' + (hasError ? classes.error : '' )}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props) =>{
    const {input, meta, ...restProps} = props
    return(
        <FormControls {...props}>
            <textarea {...input} {...restProps}  />
        </FormControls>
    )
}

export const Input = (props) =>{
    const {input, meta, ...restProps} = props
    return(
        <FormControls {...props}>
            <input {...input} {...restProps}  />
        </FormControls>
    )
}