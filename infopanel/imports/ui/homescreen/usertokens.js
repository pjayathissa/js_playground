import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class UserToken extends Component {
  render() {
  	console.log("usertokens.js was run");
    return (
      <li>{this.props.usertoken.user}</li>
    );
  }
}