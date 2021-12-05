import React from "react";
import { Link } from "react-router-dom";
import '../accounts.css';
import tempMan from './accounts-assets/temp_man.jpg';
import Hero from "./Hero";

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            remember:false,
            redirectTo:'/'
        }
    }

    handleSubmit = (e)=>{
        let found=false;
        let index;
        let registerd_users=JSON.parse(localStorage.getItem("users"));
        for(let i=0;i<registerd_users.length;i++){
            if(registerd_users[i].email===this.state.email){
                if(registerd_users[i].password===this.state.password){
                    found=true;
                    index=i;
                    break;
                }
            }
        }
        if(found){
            alert("Welcome user")
            let user=registerd_users[index]
            user['remember']=this.state.remember
            localStorage.setItem("logged_in",JSON.stringify(user));
        }
        else{
            e.preventDefault();
            alert('invalid login')
        }
    }

    handleChange = (e)=>{
        switch(e.target.id){
            case "login-email":
                this.setState({email:e.target.value})
                break;
            case "login-password":
                this.setState({password:e.target.value})
                break;
            case "remember-me":
                this.setState({remember:!this.state.remember})
                break;
            default:
                alert("Impossible Error!!!")
        }
    }
    logout = () => {
        localStorage.removeItem("logged_in");
        this.setState({});
    }
    badImage = (e)=>{
        e.target.onerror = null;
        e.target.src=tempMan
    }
    
  render() {
      if(!localStorage.getItem("logged_in"))
    return (
      <>
      <Hero title="Account Page"/>
      <div id="accounts-form-container">
        <div>
        <h1>Login</h1>
        {localStorage.getItem("redirectTo")?()=>{
          this.setState({redirectTo:localStorage.getItem("redirectTo")})
          localStorage.removeItem("redirectTo")
        }:null}
        <fieldset id="login-fieldset">
          <form id="login-form" onSubmit={this.handleSubmit} action={localStorage.getItem("redirectTo")?'/checkout':'/'}>
            <div>
              <label htmlFor="login-email">
                Username or email address
                <span className="accounts-important">*</span>
              </label>
              <br />
              <input type="email" id="login-email" onChange={this.handleChange} required />
            </div>
            <div>
              <label htmlFor="login-password">
                Password <span className="accounts-important">*</span>
              </label>
              <br />
              <input type="password" id="login-password" onChange={this.handleChange} required />
            </div>
            <div id="remember-me-container">
              <div><button type="submit" className="accounts-form-btn">Log in</button></div>
              <div><input type="checkbox" id="remember-me" onChange={this.handleChange} />
              <label htmlFor="remember-me">
                Rememeber Me
              </label></div>
            </div>
            <div>
        <Link to="/register">Don't have an account? Signup here!</Link>
        </div>
          </form>
        </fieldset>
      </div>
      </div>
      </>
    );
    else{
        let logged_user=JSON.parse(localStorage.getItem("logged_in"))
        return(
          <>
          <Hero title="Account Page"/>
          <div id="accounts-form-container">
          <div>
            <h1>Hello {logged_user.fname}</h1>
            <fieldset id="profileContainer">
                <div id="userProfile">
                    <div>
                <div><img src={logged_user.img} alt="user Profile" onError={this.badImage}/></div>
                </div>
                <div>
                <div><h2>Full Name : {logged_user.fname} {logged_user.lname}</h2></div>
                <div><p>Email Address: {logged_user.email}</p></div>
                <br/>
                <div>
                <button type="button" onClick={this.logout} id="logoutBtn">Log out !</button>
               </div>
            </div>
            </div>
            </fieldset>
            <br/>
            <div id="account-editData">
            <form id="changeData-form">
                <div>
                <label htmlFor="fname">First Name: <span className="accounts-important">*</span></label><br/>
                <input type="text" id="fname" value={logged_user.fname}/>
                </div>
                <div>
                <label htmlFor="lname">Last Name: <span className="accounts-important">*</span></label><br/>
                <input type="text" id="lname" value={logged_user.lname}/>
                </div>
                <div>
                    <label htmlFor="image-url">Image Url</label><br/>
                    <input type="url" id="image-url" value={logged_user.img} />
                </div>
                <div>
                <label htmlFor="email">Email Address : <span className="accounts-important">*</span></label><br/>
                <input type="text" id="email" value={logged_user.email} disabled/>
                <p className="error" id="account-email-rule"><i class="fas fa-times"></i> You can`t edit Email !</p>
                </div>
                <div>
                    <button type="submit">Submit !</button>
                </div>
            </form>
            </div>
            </div>
            </div>
            </>
        )
    }
  }
}
export default Login;
