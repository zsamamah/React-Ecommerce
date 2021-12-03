import React from "react";
import { Link } from "react-router-dom";
import '../accounts.css'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            remember:false
        }
    }

    handleSubmit = (e)=>{
        let found=false;
        let index;
        let registerd_users=JSON.parse(localStorage.getItem("users"));
        for(let i=0;i<registerd_users.length;i++){
            if(registerd_users[i].email===this.state.email){
                // console.log("email found");
                if(registerd_users[i].password===this.state.password){
                    // console.log("password true");
                    found=true;
                    index=i;
                    break;
                }
            }
        }
        // console.log(found)
        // console.log(registerd_users[index])

        

        if(found){
            alert("Welcom user")
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
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <fieldset>
          <form id="login-form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="login-email">
                Username or email address{" "}
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
      </React.Fragment>
    );
  }
}

export default Login;
