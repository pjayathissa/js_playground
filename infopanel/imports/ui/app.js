import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/react-meteor-data';
 
//Styling
import { MuiThemeProvider } from '@material-ui/core/styles'
import 'tachyons'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


//Databases

//ImportDatabase
import { UserTokenCollection } from '../api/usertokens.js'

//Import function to display the tokens. For some reason when I run in App, it runs twice, once before the db call and once after
// This results in an error
// ASK Noar why this runs twice and why I need an external script
import UserToken from './usertokens.js'

 
// App component - represents the whole app
class App extends Component {
  constructor() {
    super()
    this.state = {
      userInputToken:'',
      example: true
    }
  };

  renderUsers() {
    console.log(this.props)
    return this.props.usertokens.map((user) => (
      <UserToken key={user._id} usertoken={user} />
      ));
  }
 

  changeState(){
    var example = this.state.example
    this.setState({example: !example})
}

  handleClick(){
    var thisid = this.state.userInputToken
    console.log(thisid);
    this.setState({userInputToken: ""})
  }

  handleSubmit(e){
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    console.log(text);
    //TODO: check the user against the database and then enter next view


  }
 
  render() {
    const { userInputToken, example } = this.state
    return (
      <div className="flex-column bb bg-buds-neptune white open-sans b tc">
        <header>
          <h1>Welcome</h1>
          <h3>Type your username below </h3>
          <div className='w-100'>
          <Card className='w-40 center'>
            <CardContent>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input 
              type="text"
              ref="textInput"
              placeholder="Type Your User Token"
              />
            <input type ="submit" value="check my data" />
          </form>
              </CardContent>
              </Card>
           </div>
        </header>
 
        <h4>
          {this.renderUsers()}
        </h4>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    usertokens: UserTokenCollection.find({}).fetch(),
  };
})(App);

