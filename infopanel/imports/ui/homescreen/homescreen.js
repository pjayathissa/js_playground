import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/react-meteor-data';
 
//Styling
import 'tachyons'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


//Databases

//ImportDatabase
import { UserTokenCollection } from '../../api/usertokens.js'

//Import function to display the tokens. For some reason when I run in App, it runs twice, once before the db call and once after
// This results in an error
// ASK Noar why this runs twice and why I need an external script
import UserToken from './usertokens.js'
import UserMatch from './usermatch.js'

 
// App component - represents the whole app
class HomeScreen extends Component {
  constructor() {
    super()
    this.state = {
      userInputToken:'',
      example: true
    }
  };

  renderUsers() {
    return this.props.usertokens.map((user) => (
      <UserToken key={user._id} usertoken={user} />
      ));
  }
 


  handleSubmit(event){
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim().toLowerCase();
    console.log("handle submit was clicked");
    var UserMatchObject= new UserMatch(this.props)

    //TODO: If true, go to next view
    if (UserMatchObject.userInDatabase(text)){
      this.props.history.push({
        pathname: `/${text}`,
        state: {usertoken: 'text'}
      });
    };

  }
    //TODO: check the user against the database and then enter next view



 
  render() {
    const { userInputToken, example } = this.state
    return (
      <div className="flex-column bb bg-buds-neptune white open-sans b tc">
        <header>
          <h1>Welcome</h1>
          <h3>Type your username below </h3>
          <div className='w-100'>
          <Card className='mw5 mw7-ns center'>
            <CardContent>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input className="pa2 input-reset ba bg-transparent w-70 "
              type="text"
              ref="textInput"
              placeholder="Type Your User Token"
              />
            <input className = "b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type ="submit" value="check my data" />
          </form>
              </CardContent>
              </Card>
           </div>
        </header>
 
        <h4>
          List of registered users - for debugging
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
})(HomeScreen);
