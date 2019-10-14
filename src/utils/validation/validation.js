export const required = (value)=>{
    if(!!value){
        return undefined
    }
    return 'Field is Required'
}

export const maxLength = (num) => (value)=>{
    if(value && value.length > num){
        return `Max Length is ${num} symbols`
    }
    return undefined
}

export const email = (value) => {
    return (
        value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ? 'Invalid email address'
            : undefined
    )
}

