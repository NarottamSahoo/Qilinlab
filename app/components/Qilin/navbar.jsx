import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/navbarstyle.css';
import { withRouter } from 'react-router-dom';
import 'react-rater/lib/react-rater.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link, Redirect
} from "react-router-dom";


class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirects: false,
            navbarMessage: [
                { img: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg', name: 'Henry',    messages: '1', },
                { img: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg', name: 'Ashley',   messages: '4', },
                { img: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-7.jpg', name: 'David',    messages: '2', },
                { img: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-14.jpg',name: 'Nikolai',  messages: '1', },
            ],
            navbarNotification: [
                { icon: 'mdi mdi-account-plus',         name: 'Henry',  paragraph: 'sent you request'                                           },
                { icon: 'mdi mdi-cast-connected',       name: 'Ashley', paragraph: 'Lorem ipsum dolor sit amet.'                                },
                { icon: 'mdi mdi-alert-circle-outline', name: 'David',  paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'   },
                { icon: 'mdi mdi-image-filter',         name: 'Nikolai',paragraph: 'Lorem ipsum dolor sit amet.'                                },
            ]

        }
    }

    render() {
        const value = 4;
        let navbarMessageArr = [];
        let navbarNotificationArr = [];
        for (let i in this.state.navbarMessage) {
            navbarMessageArr.push(
                <div className="mb-1  navbar-expand-lg mainnavitem " key={i}>
                    <div className='navbar-expand-lg1'>
                        <a className="navbar-brand" href="#">
                            <img src={this.state.navbarMessage[i].img} className="rounded-circle z-depth-0" alt="avatar image" height="40" />
                        </a>
                        <p>{this.state.navbarMessage[i].name}<br /><small>{this.state.navbarMessage[i].messages + ' ' + 'message'}</small></p>
                    </div>
                </div>
            )
        }
        for (let j in this.state.navbarNotification) {
            navbarNotificationArr.push(
                <div className="mb-1  navbar-expand-lg mainnavitem " key={j}>
                    <div className='navbar-expand-lg1'>
                        <a className="navbar-brand" href="#">
                            <i className={" drop-down-noti-icons" + " " + this.state.navbarNotification[j].icon}></i>
                        </a><p>{this.state.navbarNotification[j].name} <br /><small>{this.state.navbarNotification[j].paragraph}</small></p>
                    </div>
                </div>
            )
        }
        return (


            <div>

                <nav className='nav-bar'>
                    <ul className='nav-bar-items'>
                        
                        <li>
                            <div className='logo'>
                                <img src='https://qilinlab.com/wp-content/uploads/2019/07/MainLogoH-1.png'></img>
                            </div>
                        </li>
                    </ul>
                    <ul className='right1'>
                        <li>
                            <div className='icons'>
                                <div className='navbaritems'>
                                    <a className="waves-effect waves-light button-badge"><div className='dot'></div>
                                        {/* <span className="mdi iconsclassName mdi-email-outline"></span> */}
                                        <div className="dropdown">
                                            <a id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="mdi iconsclassName mdi-email-outline"></span>
                                            </a>
                                            <div className="dropdown-menu dropdownmsg">
                                                {navbarMessageArr}
                                                <span className='newmsgs'> 4 new messages</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className='navbaritems'>
                                    <a className="waves-effect waves-light"><div id='notificationdot' className='dot'></div>
                                        <div className="dropdown">
                                            <a id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="mdi iconsclassName mdi-bell-outline"></span>
                                            </a>
                                            <div className="dropdown-menu dropdownnoti">
                                                {navbarNotificationArr}
                                                <span className='newmsgs'>see more</span>
                                            </div>
                                        </div>
                                    </a>
                                </div >&nbsp;&nbsp;&nbsp;
                                <div className="nav-item navbaritems dropdown2 text-left">
                                    <a className="nav-link" id="navbarDropdownMenuLink-555" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img id='userpic' src='https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png' />
                                    </a>
                                    <div className="dropdown-menu">

                                        <div className='ratings text-left'>
                                            <strong>
                                                <span className='userrating'>Hello,</span> &nbsp;
                                            <span className='userrating'>{this.props.name} </span>
                                            </strong>
                                            <span className='userrating'>{this.props.email} </span>
                                        </div>
                                        <div className="dropdown-divider"></div>
                                        <div className='inout'>


                                            
                                                <span className="dropdown-item" >
                                                    <span>
                                                        <i className="lnricon mdi mdi-settings"></i>
                                                    </span>
                                                    <span className='dropdowndetails'>Profile setting</span>
                                                </span>
                                            <br />

                                            <span className="dropdown-item" >
                                                <span>
                                                    <i className="lnricon mdi mdi-sync"></i>
                                                </span>
                                                <span className='dropdowndetails'>Activity Log</span>
                                            </span><br />
                                            <span className="dropdown-item" onClick={this.props.goTo} >
                                                <span>
                                                    <i className="lnricon mdi mdi-logout"></i>
                                                </span>
                                                <span className='dropdowndetails'>Signout</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='navbaritems'>
                                    <a onClick={this.props.gofullscreen} className="nav-link waves-effect waves-light">
                                        <span className="mdi mdi-crop-free"></span>
                                    </a>
                                </div>

                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}
export default withRouter(navbar);