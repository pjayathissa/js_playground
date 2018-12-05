import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/react-meteor-data';
 
//Styling
import 'tachyons'

import BarChart from './barchart.js';

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

        <div className="mw5 mw7-ns wt-50 fl bg-near-white pa3 ph5-ns">
        	<div className="row">
        		<BarChart />
        		<h3></h3>
        	</div>
        </div>
        <div className='mw5 mw7-ns wt-50 bg-light-gray fl pa3 ph5-ns'>
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