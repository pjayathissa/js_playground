import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/react-meteor-data';

//Not sure if this is the right way to import the d3 file
import bullet from './bullet.js'
 
//Styling
import 'tachyons'

//TODO: https://bl.ocks.org/mbostock/4061961

class BulletChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };

  //To Be Replaced By A Database call
  getData(){
  	return (
  		[
  {"title":"Temperature","subtitle":"Degrees Celcius","ranges":[15,22,30],"measures":[22,27],"markers":[25]},
  {"title":"Noise","subtitle":"Decibels","ranges":[0,25,200],"measures":[21,23],"markers":[26]},
  {"title":"Light","subtitle":"Lux","ranges":[350,500,1000],"measures":[100,320],"markers":[550]}
		]
	)
  }

  updateChart(el, mydata){

  	console.log(this.props)
  	// TODO MAke responsive
  	var margin = {top: 5, right: 40, bottom: 20, left: 120}

   var  width = this.props.width
    var height = this.props.height;


    //  // This would be the correct way to get d3 data but its not workng
  	// d3.json("bullets.json", function(error, data) {
  	// 	if (error) {throw error};

  	// // Rest of the scrpt below goes here
  	// })

  	var chart = d3.bullet()
  					.width(width)
  					.height(height)

  	var svg = d3.select(el).selectAll("svg")
  					.data(mydata)
  					.enter()
  						.append("svg")
  							.attr("class", "bullet")
  							.attr("width", width + margin.left + margin.right)
  							.attr("height", height + margin.top + margin.bottom)
  						.append("g")
  							.attr("transform", "translate(" +margin.left + "," + margin.top + ")")
  							.call(chart);

	var title = svg.append("g")
	.style("text-anchor", "end")
	.attr("transform", "translate(-6," + height / 2 + ")");

	title.append("text")
	.attr("class", "title")
	.text(function(d) { return d.title; });

	title.append("text")
	.attr("class", "subtitle")
	.attr("dy", "1em")
	.text(function(d) { return d.subtitle; });

	d3.selectAll("button").on("click", function() {
    svg.datum(randomize).call(chart.duration(1000)); // TODO automatic transition
  		});

	function randomize(d){
		  if (!d.randomizer) d.randomizer = randomizer(d);
		  d.ranges = d.ranges.map(d.randomizer);
		  d.markers = d.markers.map(d.randomizer);
		  d.measures = d.measures.map(d.randomizer);
		  return d;
	  };

	 function randomizer(d){
	  	var k = d3.max(d.ranges) * .2;
	  	return function(d) {
	    	return Math.max(0, d + k * (Math.random() - .5));
	 		 };
	 	};

  }

 

    //Will be run the moment the comoment is mounted to the DOM tree
  componentDidMount(){
  	console.log("Bullet Chart Mounted")
  	var el = ReactDOM.findDOMNode(this); //the dev we are rendering
  	console.log(el);
  	var mydata = this.getData()
    this.updateChart(el, mydata, this.props);

	}
  render(){
  	return(
  	<div>	
  		<div className="bullet-chart"></div>
  		<div>
  			<button> Next </button>
  		</div>
  	</div>
  	);
  };

};

//in the event that props aren't passed
BulletChart.defaultProps= {
      width: 440,
      height: 30

}

export default BulletChart