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
  	return this.state.matchesDatabse;
  };

  // redundant render() to be deleted
  render() {
    return (
      <li>blah blah</li>
    );
  }
}