import React from 'react'
import classes from './ProfileInfo.module.css'
import Loader from "../../Common/Loader/Loader";

class ProfileStatus extends React.Component{
    state={
        activeStatus: false,
        status: this.props.status
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.status !== prevProps.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    setPassiveStatus = () =>{
        this.setState({
            activeStatus: false
        })
        this.props.updateStatus(this.state.status)
    }
    setActiveStatus = ()=>{
        this.setState({
            activeStatus: true
        })
    }
    changeStatusLocal = (e)=>{
        this.setState({
            status: e.target.value
        })
    }
    render(){
        return(
                <div className="status_block">
                    {
                        !this.state.activeStatus
                            ?
                            <div className="status_span">
                                <span onDoubleClick={this.setActiveStatus}>{this.props.status ? this.props.status : 'Введите свой статус'}</span>
                            </div>
                            :
                            <form className={classes.status_form}>
                                <input onChange={this.changeStatusLocal} autoFocus={true} onBlur={this.setPassiveStatus} type="text" value={this.state.status}/>
                            </form>
                    }
                </div>
        )
    }
}
export default ProfileStatus