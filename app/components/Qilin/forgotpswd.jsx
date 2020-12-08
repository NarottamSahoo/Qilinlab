import React, { Component } from "react";
import "../../style/forgotpaswd.css";
import Loginform from "./loginform";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation
} from "react-router-dom";
import {message} from 'antd';



export default class ForgotPwd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: "",
      reset: false,
    };
  }
  handleChange = (event) =>{ 
    this.setState({ 
      [event.target.name] : event.target.value 
    }) 
  }
  sendToMail = () =>{
    axios
      .post("http://trial.qilinlab.com/api/password_reset/", {
        email: this.state.email
      })
      .then(response => {
        console.log(response);
        this.setState({
          reset: true
        })
        message.success(response.data.msg);

      })
      .catch(error => {
        message.error("Email or Password is Incorrect ! Please try Again !");
      });
  }
  resetPass = () =>{
    axios
      .post("http://trial.qilinlab.com/api/password_reset/confirm/", {
        password: this.state.password,
        token: this.state.token
      })
      .then(response => {
        console.log(response);
        this.setState({
          reset: false
        })
        
        message.warning(response.data.password);
        message.warning(response.data.status);

      })
      .catch(error => {
        message.error("Your Password must be 8 Characters and shouldnot similar to your name");
      });
  }
  render() {
    let x = []
    if(this.state.reset)
    {
      x.push(<div>
        <div className="md-form">
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter New Password" />
          </div>
          <div className="md-form">
            <input type="text" name="token" value={this.state.token} onChange={this.handleChange} placeholder="Token" />
          </div>
          
          <div className="d-flex justify-content-center"></div>
          <button className="btn  btn-md my-4" onClick={this.resetPass} type="button">
            Reset
        </button></div>)
    }
    else{
      x.push(<div>
      <div className="md-form">
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
        </div>
        
        <div className="d-flex justify-content-center"></div>
        <button className="btn  btn-md my-4" onClick={this.sendToMail} type="button">
          Send
      </button></div>)
    }
    return (
      <div className="loginform1">
        <div className="container loginform">
          <div className="card margin-top-100 margin123 margin-bottom-150 box-shadow-card">
            <div className='row'>
              <div className="leftside4 animated slideInLeft col-md-6">
                <div className="border-0 registerform text-center">
                  <h3>
                    <i className="fa fa-lock ffff color-techno"></i>
                  </h3>
                  <h4 className="text-center">Forgot Password?</h4>
                  <p>You can reset your password here.</p>
                  <div className="card-body">
                    <form className="text-center">
                      
                      {x}
                      <Link to="/">
                        <span id="gotolg">Go to Login page!</span>
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
              <div className="right-div animated slideInRight col-md-6 rightside2"><br /><br />
                <span className='welcometop'> Welcome to QILIN-LAB </span>

                <div className='dropdown-divider welcome-dropdown-divider'></div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, adipisci?lorem10
                <div className='dropdown-divider'></div>
                <p>QILIN Software Lab &copy; 2020</p>
                <div className="log-form text-center">
                  <br /><br /><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
