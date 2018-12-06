import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/react-meteor-data';
 
//Styling
import 'tachyons'

import BarChart from './barchart.js';
import BulletChart from './bulletchart.js';

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

        <div className="mw5 mw7-ns wt-50 fl white pa3 ph5-ns">
        	<div className="row">
        		<BulletChart />
        		<h3></h3>
        	</div>
        </div>
        <div className='mw5 mw7-ns wt-50  fl pa3 ph5-ns'>
        	<div>
        		<p>This is some text explaining the data shown on the left</p>
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