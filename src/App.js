import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Userbar from './UserBar.js';

import { Button, Collapse } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: 'Anonymous',
      pointscount: 0
    }
  }

componentWillMount() {
    console.log("COMPONENT WILL MOUNT")
    this.setState({
      username: 'Anonymous',
       pointscount: 0
    })
  }
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> New Earth's Information Hub</h1>
           <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
        </header>
        <p className="App-intro">
          An informed citizen is a good citizen
        </p>
         <Route exact path="/" component={UserBar}/>
      </div>
     </Router>
    );
  }
}

export default App;
