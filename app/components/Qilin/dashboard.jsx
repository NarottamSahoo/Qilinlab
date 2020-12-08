import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Doughnut } from "react-chartjs-2";
import "../../style/maincontentstyle.css";
import Navbar from './navbar';
import Fullscreen from "react-full-screen";
import {
    BrowserRouter as Router,
    Route,withRouter,
    Switch,
    Link, NavLink, Redirect
  } from "react-router-dom";
  import history from '../history';

class Contentmain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      access:'',
        isFull: false,
      redirects: false,
      podata: [
        { slno: "1", title: "po-1", amount: "100" },
        { slno: "2", title: "po-2", amount: "200" },
        { slno: "3", title: "po-3", amount: "300" },
        { slno: "4", title: "po-4", amount: "400" },
        { slno: "5", title: "po-5", amount: "500" }
      ],
      accepteddata: [
        { slno: "1", title: "accept-1", amount: "100" },
        { slno: "2", title: "accept-2", amount: "200" },
        { slno: "3", title: "accept-3", amount: "300" },
        { slno: "4", title: "accept-4", amount: "400" },
        { slno: "5", title: "accept-5", amount: "500" }
      ],
      invoicedata: [
        { slno: "1", title: "invoice-1", amount: "100" },
        { slno: "2", title: "invoice-2", amount: "200" },
        { slno: "3", title: "invoice-3", amount: "300" },
        { slno: "4", title: "invoice-4", amount: "400" },
        { slno: "5", title: "invoice-5", amount: "500" }
      ],
      chartData: {}
    };
  }
  componentWillMount() {
    this.getchartdata();
  }
  getchartdata = () => {
    let data = this.props.history.location.state

    this.setState({
      chartData: {
        labels: ["Po", "Grn", "Invoice"],
        datasets: [
          {
            data: [40, 40, 20],
            backgroundColor: ["#EC7063", "#58D68D", "#48C9B0"]
          }
        ]
      },
      name: data.first_name,
      email: data.email,
      access: data.access
    });
  };
  goToLoginPage = () => {
    this.setState({
      name: '',
      email: '',
      access: ''
    });
    history.push("/")
  }

  goFull = () => {
    this.setState({ isFull: this.state.isFull ? false : true });
  }
  render() {
    return (
      <div>
        <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setState({ isFull })}>
            <div className="full-screenable-node">
              <Navbar gofullscreen={this.goFull} goTo={this.goToLoginPage} name={this.state.name} email={this.state.email} access={this.state.access} gotoToggleSideBar={this.toggleBar} /><br/><br/><br/>
              
                <div className="container-fluid main-body-content">
                <div className="">
                    <div className="row ">
                    <div className="container-fluid col-md-6 col-sm-12 chart padding-0 ">
                        <div className=" editpai">
                        <span className="headertable float-left">Chart view</span>
                        <Doughnut
                            data={this.state.chartData}
                            width={160}
                            height={50}
                            options={{
                            legend: {
                            display: false
                            }
                            }}
                        />
                        <div className="rounded-legend ">
                            <ul>
                            <li>
                                <span className="legend-dots" id="po"></span>
                                <span className="float-right">
                                {this.state.chartData.datasets[0].data[0]}%
                                </span>
                                <span>Purchase order</span>
                            </li>
                            <li>
                                <span className="legend-dots" id="grn"></span>
                                <span>GRN</span>
                                <span className="float-right">
                                {this.state.chartData.datasets[0].data[1]}%
                                </span>
                            </li>
                            <li>
                                <span className="legend-dots" id="invoice"></span>
                                Invoice
                                <span className="float-right">
                                {this.state.chartData.datasets[0].data[2]}%
                                </span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className=" col-md-6 col-sm-12 text-left margintop padding-0">
                        <div className="tagole1">
                        <div className="grid-container">
                            <div className="grid-item item1">
                            <div className="makemargintop">
                                <span className="mdi mdi-gavel"></span>
                            </div>
                            <span className="bidtype">Open RFQ's</span>
                            <br />
                            <span className="rfqnum">30</span>
                            </div>
                            <div className="grid-item item2">
                            <div className="makemargintop">
                                <span className="mdi mdi-gavel"></span>
                            </div>
                            <span className="bidtype">Unparticipated RFQ's</span>
                            <br />
                            <span className="rfqnum">30</span>
                            </div>
                            <div className="grid-item item3">
                            <div className="makemargintop">
                                <span className="mdi mdi-gavel"></span>
                            </div>
                            <span className="bidtype">Live RFQ's</span>
                            <br />
                            <span className="rfqnum">10</span>
                            </div>
                            <div className="grid-item item4">
                            <div className="makemargintop">
                                <span className="mdi mdi-gavel"></span>
                            </div>
                            <span className="bidtype">Closed RFQ's</span>
                            <br />
                            <span className="rfqnum">25</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row  ola">
                    <div className="container col-md-6 col-sm-12 padding-0 text-left">
                        <div className="tagole">
                        <span className="headertable float-left">Accepted order</span>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>sl no.</th>
                                <th>Title</th>
                                <th>Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>title-1</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>title-2</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>title-3</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>title-4</td>
                                <td>400</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>title-5</td>
                                <td>500</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="container-fluid col-md-6 margintop col-sm-12 padding-0 text-left">
                        <div className="tagole">
                        <span className="headertable float-left">Invoiced</span>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>sl no.</th>
                                <th>Title</th>
                                <th>Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>title-1</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>title-2</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>title-3</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>title-4</td>
                                <td>400</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>title-5</td>
                                <td>500</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div><br/>
                </div>
                </div>
                </div>
            </Fullscreen>
      </div>
    );
  }
}
export default withRouter(Contentmain);
