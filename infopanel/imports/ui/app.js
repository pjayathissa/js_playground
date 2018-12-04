import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
 
//Styling
import 'tachyons'

//Import Other Views/Components
import HomeScreen from './homescreen/homescreen.js';

 
// App component - represents the whole app
class App extends Component {

 
  render() {
    return (
          <Router>
            <div className='open-sans vh-100 flex flex-column'>
              <Switch>
                <Route exact path='/' component={HomeScreen} />
                <Redirect to='/' />
              </Switch>
            </div>
          </Router>

    )
  }
}

export default App

