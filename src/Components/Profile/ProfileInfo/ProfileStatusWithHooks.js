import React, {useState, useEffect} from 'react'
import classes from './ProfileInfo.module.css'
import Loader from "../../Common/Loader/Loader";

const ProfileStatusWithHooks = (props) =>{
    const [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    // state={
    //     activeStatus: false,
    //     status: this.props.status
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(this.props.status !== prevProps.status){
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }
    const setActiveStatus=()=>{
        setEditMode(true)
    }
    const setPassiveStatus = () =>{
        setEditMode(false)
        props.updateStatus(status)
    }
    const changeStatusLocal = (e)=>{
        setStatus(e.target.value)
    }
    //
    // setPassiveStatus = () =>{
    //     this.setState({
    //         activeStatus: false
    //     })
    //     this.props.updateStatus(this.state.status)
    // }
    // setActiveStatus = ()=>{
    //     this.setState({
    //         activeStatus: true
    //     })
    // }
    // changeStatusLocal = (e)=>{
    //     this.setState({
    //         status: e.target.value
    //     })
    // }
        return(
            <div className="status_block">
                {
                    !editMode
                    ?
                    <div className="status_span">
                        <span onDoubleClick={setActiveStatus}>{props.status || 'Введите логин'}</span>
                    </div>
                    :
                    <form className={classes.status_form}>
                        <input onBlur={setPassiveStatus} autoFocus={true} type="text" onChange={changeStatusLocal} value={status}/>
                    </form>
                }
            </div>
        )
}
export default ProfileStatusWithHooks