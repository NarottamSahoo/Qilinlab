import React, { Component } from "react";
import "../../style/registerform.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation
} from "react-router-dom";
import axios from "axios";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import { message } from "antd";
import { DatePicker, Space } from 'antd';
import { AutoComplete } from 'antd';
import { Select } from 'antd';

const { Option } = Select;
export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name:"",
      last_name:"",
      email: "",
      password: "",
      address:"",
      city:"",
      state:"",
      pincode:"",
      phone_no:"",
      dob:"",
      redirect: false,
      places: [{value:"HRBR Layout"},{value:"Kalyan Nagar"},{value:"Marathalli"},{value:"HSR Layout"}],
      place_details:[{id:"HRBR Layout",city:"Bangalore", state:"Karnataka", pin:"560043"},
      {id:"Kalyan Nagar",city:"Hyderabad", state:"Telengana", pin:"656578"},
      {id:"Marathalli",city:"Ahmedabad", state:"UP", pin:"234523"},
      {id:"HSR Layout",city:"Bhubaneswar", state:"Odisha", pin:"757036"}]
    };
  }
  
  onChange =(date, dateString)=> {
    this.setState({
      dob: dateString
    })
  }
  onChangeAdd = (value) =>{
    let data = this.state.place_details.find(e => e.id==value);
    console.log(data)
    this.setState({
      address: value,
      city: data.city,
      pincode: data.pin,
      state: data.state
    })
  }
  
  handleChange = (event) =>{ 
    this.setState({ 
      [event.target.name] : event.target.value 
    }) 
  }
  register = async() => {
  

  let data = {
        
    "email":this.state.email,
    "first_name":this.state.first_name,
    "last_name":this.state.last_name,
    "password":this.state.password,
    "address":this.state.address,
    "dob":this.state.dob,
    "city":this.state.city,
    "state":this.state.state,
    "pincode":this.state.pincode,
    "phone_no":this.state.phone_no

};

    this.state.email==="" ? message.error("Email is required !")
      : this.state.first_name==="" ? message.error("First Name is required !")
        : this.state.last_name==="" ? message.error("Last Name is required !")
          : this.state.password==="" ? message.error("Please enter Password !")
            : this.state.address==="" ? message.error("Address is required !")
              : this.state.dob==="" ? message.error("DOB is required !")
                : this.state.phone_no==="" ? message.error("Phone Number is required !")
                :
    
    /////////
    ///customer/places/
    ///customer/place_details/
    axios
      .post("http://trial.qilinlab.com/api/register/", data)
      .then(response => {
        console.log(response);
        
      })
      .catch(error => {
        message.error("Something went wrong !");
      });
     
  };
  render() {
    let {first_name, last_name, email, password, address, city, state, pincode, phone_no} = this.state
    let options = []
    this.state.places.map((e) => {
    options.push(<Option value={e.value}>{e.value}</Option>);
  });
  console.log(this.state.address)
    
    let formdata = [{type:"text",name:"first_name", value:first_name, placeholder:"First name"},
      {type:"text",name:"last_name", value:last_name, placeholder:"Last Name"},
      {type:"text",name:"email", value:email, placeholder:" Email"},
      {type:"password",name:"password", value:password, placeholder:"Password"},
      {type:"number",name:"phone_no", value:phone_no, placeholder:"Phone Number"}
      ];
    let formArray = []
    for(let i in formdata)
    {
      formArray.push(
      <div className="col-md-6 form-group-layer">
        <input type={formdata[i].type} name={formdata[i].name} value={formdata[i].value} onChange={this.handleChange} placeholder={formdata[i].placeholder} />
      </div>
      )
      
    }
    
    
    return (

      <div className="loginform1">
        <div className="container loginform">
          <div className="card margin-top-100 margin123 box-shadow-card">
            <div className='row'>
            <div className="leftside3 animated slideInLeft col-md-6">
              <div className="border-0  registerform text-center">
                <span className="text-center ">
                  <p id="registerheader">Register</p>
                  <p id="member">
                    Already an User?
                    <Link to="/">
                      <span id="logintxt"> Login!</span>
                    </Link>
                  </p>
                </span>
                <div className="">
                  <form>
                    <div className="formitem text-center row">
                      {formArray}
                      <div className="col-md-6 form-group-layer">
                      <DatePicker onChange={this.onChange} defaultValue={this.state.dob}/>
                      </div>
                      <div className="col-md-6 form-group-layer" style={{marginTop: '25px'}} >
                        <Select
                          showSearch
                          style={{ width: 150 }}
                          placeholder="Select a address"
                          optionFilterProp="children"
                          onChange={this.onChangeAdd}
                          filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {options}
                        </Select>
                      </div>
                      <div className="col-md-6 form-group-layer">
                        <input type="text" name="city" value={this.state.city} onChange={this.handleChange} placeholder="City" />
                      </div>
                      <div className="col-md-6 form-group-layer">
                        <input type="text" name="state" value={this.state.state} onChange={this.handleChange} placeholder="State" />
                      </div>
                      <div className="col-md-6 form-group-layer">
                        <input type="number" name="pincode" value={this.state.pincode} onChange={this.handleChange} placeholder="PIN" />
                      </div>
                      
                    </div>

                    

                    <div className="form-group">
                      <button type="button" onClick={this.register} className="btn  btn-md">
                        
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="animated slideInRight col-md-6 rightside2"><br/><br/>
            <span className='welcometop'> Welcome to QILIN-LAB </span> 
           
           <div className='dropdown-divider welcome-dropdown-divider'></div>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, adipisci?lorem10
           <div className='dropdown-divider'></div>
           <p>QILIN Software Lab &copy; 2020</p>
             <div className="log-form text-center">
               <img class="registerimg" src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" />
              
             </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
