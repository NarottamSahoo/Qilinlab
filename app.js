import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import "@babel/polyfill";
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginform from './app/components/Qilin/loginform';
import Registerform from './app/components/Qilin/registerform';
import Forgotpswd from './app/components/Qilin/forgotpswd';
import Dashboard from './app/components/Qilin/dashboard';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import history from './app/components/history';


class App extends Component {
  render() 
  {
    return (
      
      <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/">
            <Loginform />
          </Route>
          <Route path="/registerform" render={(props) => <Registerform {...props} />} exact />
          
          <Route path="/forgotpswd" render={(props) => <Forgotpswd {...props} />} exact />
            
          <Route path="/dashboard" render={(props) => <Dashboard {...props} />} exact />
            
        </Switch>
      </div>
    </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
