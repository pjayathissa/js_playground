import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class UserMatch extends Component {
	constructor(props) {
    super(props)
    this.state = {
      matchesDatabse: false
    }
  };

  userInDatabase(text){
  	const users = this.props.usertokens.map(x => x.user.toLowerCase())
  	this.state.matchesDatabse = users.includes(text.toLowerCase());
  	console.log(this.state.matchesDatabse);
  	return this.state.matchesDatabse;
  };

  // redundant render() to be deleted
  render() {
  	console.log("pj is active")
    return (
      <li>{this.props.usertoken.user}</li>
    );
  }
}