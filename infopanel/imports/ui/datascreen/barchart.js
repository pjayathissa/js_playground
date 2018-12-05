import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/react-meteor-data';
 
//Styling
import 'tachyons'



class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };

  updateChart(el){
  		var data = [20, 40, 30 , 20];
  		let max = Math.max(data);
  		//todo: Change range to props.height
  		//todo: see how props are funcitoning here
  		//todo: scale graph to match screensize
  		var yScale = d3.scale.linear()
  								.domain([0, max])
  								.range([0, 40]);
  	  	d3.select(el)
  				.selectAll("div")
  				.data(data)
  					.enter()
  					.append("div")
  					.style("width", function(d){return d + 'px'});


  }

  //in the event that props aren't passed
  getDefaultProps(){
  	return {
  		width: 640,
  		height: 480
  		}
  }

  //Will be run the moment the comoment is mounted to the DOM tree
  componentDidMount(){
  	console.log("Bar Chart Mounted")
  	var el = ReactDOM.findDOMNode(this); //the dev we are rendering
  	this.updateChart(el);

  }

  render(){
  	return(
  		<div className="chart"></div>
  		)
  }



}  

export default BarChart