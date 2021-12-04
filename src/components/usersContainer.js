import React, { Component } from 'react'

export default class UsersContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            users:JSON.parse(localStorage.getItem("users")),
        }
    }

    handleChangeRole=  (e,i)=>{
        let array1=this.state.users
        array1[i].role=e.target.value;
        localStorage.setItem("users",JSON.stringify(array1));
        this.setState({users:array1})

    }

    handleDeleteUser=(e,i)=>{
        let array1=this.state.users
        array1.splice(i,1);
        localStorage.setItem("users",JSON.stringify(array1));
        this.setState({users:array1})

        
    }


    render() {
        return (
            <div className='usersContainer'>
                    <ul className='userCard'>
                        <h4> Emails</h4>
                        {this.state.users.map((user,indx)=><li key={indx}>{user.email}</li>)}
                    </ul>
                    <ul className='userCard'>
                        <h4> First Names</h4>
                        {this.state.users.map((user,indx)=><li key={indx}>{user.fname}</li>)}
                    </ul>
                    <ul className='userCard'>
                        <h4> Last Names</h4>
                        {this.state.users.map((user,indx)=><li key={indx}>{user.lname}</li>)}
                    </ul>
                    <ul className="userCard">
                        <h4>Role</h4>
                        {this.state.users.map((user,i)=>{
                        return(
                        <li key={i}>
                            <select value={user.role}  name="role" onChange={(e)=>this.handleChangeRole(e,i)}>
                                <option value={user.role}>{user.role}</option>
                                <option value={user.role==="admin"? "user":"admin"}>{user.role==="admin"? "user":"admin"}</option>
                            </select>
                        </li>

                        )
                    })}
                    </ul>
                    <ul className="userCard">
                        <h4>Delete User</h4>
                        {this.state.users.map((user,i)=>{
                        return(
                        <li key={i}>
                            <button onClick={(e)=>this.handleDeleteUser(e,i)}>Delete User</button>
                        </li>

                        )
                    })}
                    </ul>
            </div>
        )
    }
}
