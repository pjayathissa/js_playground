import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/react-meteor-data';
 
//Styling
import 'tachyons'

class DataScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInputToken:'',
      example: true
    }
  };


  render(){
  	console.log("Datascreen was rendered");
  	return(
  	 <div className="flex-column open-sans buds-neptune mt5 cf">
        <header>
        </header>

        <div className="wt-50 bg-near-white fl tc">
        	<div className="center fr">
        		<h3>testfffffffffffffffffffffff fff </h3>
        	</div>
        </div>
        <div className='wt-50 bg-light-gray fl tc'>
        	<div>
        		<h3>testfffffffffffffffffffffffffffffffffff </h3>
        	</div>
        </div>
     </div>

     )
  };



};


export default withTracker(() => {
  return {
  };
})(DataScreen);