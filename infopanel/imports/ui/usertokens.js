import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class UserToken extends Component {
  render() {
    return (
      <li>{this.props.usertoken.user}</li>
    );
  }
}