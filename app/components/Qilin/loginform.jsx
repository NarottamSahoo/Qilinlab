import React, { Component } from "react";
import "../../style/loginformstyle.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { message ,Spin } from "antd";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Route,withRouter,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import history from '../history';



class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spin:false,
      email: "",
      password: "",
      successfulLogin: "",
      redirect: false
    };
  }

  inputname = name => {
    this.setState({ email: name.target.value });
  };

  inputpass = pass => {
    this.setState({ password: pass.target.value });
  };

  logIn = props => {
    this.setState({spin:true})
    axios
      .post("http://trial.qilinlab.com/api/login/", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        this.setState({
          spin:false
        })
        message.success("Login Successful");
        history.push('/dashboard', {first_name: response.data.first_name, email: response.data.email, access: response.data.access});
      })
      .catch(error => {
        message.error("Email or Password is Incorrect ! Please try Again !");
      });
  };
  render() {
    return (
      <div className="">
        <div className="container loginform">
        <Spin spinning={this.state.spin}  size="large" delay={200}>
          <div className="card margin-top-90 margin123 box-shadow-card">
            <div className='row'>
            <div className="leftside animated slideInLeft col-md-6 hhhh">
              <div className='text-left d-flex'>
                &nbsp;<img className='small-logo' src='https://qilinlab.com/wp-content/uploads/2019/07/MainLogoH-1.png'></img>
                </div>
              <div className="registerform text-center">
                <span className=" text-center ">
                  <span id="logintext">Login</span>
                  <p id="member">
                    New User...?
                    <Link to="/registerform">
                      {" "}
                      <span id="register">Register</span>
                    </Link>
                  </p>
                </span>
                <div className="card-body">
                  <form className="text-center">
                    <div className="md-form">
                      <input value={this.state.email} onChange={this.inputname} name="username" type="text" placeholder="Email" />
                    </div>
                    <div className="md-form">
                      <input
                        value={this.state.password}
                        onChange={this.inputpass}
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <div></div>
                      <div></div>
                    </div>
                    <div className="form-group">
                      {/* {this.renderRedirect()} */}
                      <button
                        onClick={this.logIn}
                        type="button"
                        className="btn btn-md logbtn"
                      >
                        Login
                      </button>
                    </div>

                    <Link to="/forgotpswd">
                      <span id="forgot">Forgot password?</span>
                    </Link>
                  </form>
                </div>
              </div>
            </div>

            <div className="animated slideInRight col-md-6 rightside2 right-div"><br/><br/>
              <span className='welcometop'> Welcome to QILIN-LAB </span>

              <div className='dropdown-divider welcome-dropdown-divider'></div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, adipisci?lorem10
            <div className='dropdown-divider'></div>
              <p>QILIN Software Lab &copy; 2020</p>
              <div className="log-form ">
                <img className="responsive loginimage" src="/app/images/login.png" />

              </div>
            </div>
            </div>
          </div>
          </Spin>
        </div>
      </div>
    );
  }
}
export default withRouter(LoginForm);
