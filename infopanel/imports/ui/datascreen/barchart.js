import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/react-meteor-data';
 
//Styling
import 'tachyons'

//TODO: https://bl.ocks.org/mbostock/4061961

class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };

  updateChart(el){
  		var data = [20, 40, 30 , 20];

      var width = 420
      var barHeight=20

  		let max = Math.max(...data);

  		var xScale = d3.scale.linear()
  								.domain([0, max])
  								.range([0, this.props.width]);

      var yScale = d3.scale.ordinal()
                  .domain(d3.range(data.length))
                  .rangeRoundBands([0, this.props.height], 0.05);


      d3.select(el)
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height);

      var svg = d3.select("svg")

      var bar = svg.selectAll("g")
            .data(data)
            .enter()
              .append("g")
              .attr("transform", function(d,i){return "translate(0," +i * barHeight + ")"});

      bar.append("rect")
        .attr("width", xScale)
        .attr("height", barHeight -1)
        .style("fill", "steelblue");


  }

  

  //Will be run the moment the comoment is mounted to the DOM tree
  componentDidMount(){
  	console.log("Bar Chart Mounted")
  	var el = ReactDOM.findDOMNode(this); //the dev we are rendering
  	console.log(el);
    this.updateChart(el);

  }

  render(){
  	return(
  		<div className="chart"></div>
  		)
  }



}  

//in the event that props aren't passed
BarChart.defaultProps= {
      width: 440,
      height: 480

}

export default BarChart