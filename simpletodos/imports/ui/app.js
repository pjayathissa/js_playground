import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor'
 
import { TasksContainer } from '../api/tasks.js';


import TaskPJ from './task.js';
 
// App component - represents the whole app
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      hideCompleted: true
    };
  }

  componentWillMount(){
   Tracker.autorun(()=>{
   var tasks = TasksContainer.find({}).fetch()
   //this.setState({list: todos})
 })
}

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = this.props.tasks.filter(x => !x.checked);
    }
    return filteredTasks.map((task) => (
      <TaskPJ key={task._id} task={task} />
    ));
  }

  handleSubmit(event){
    event.preventDefault();

    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('tasks.insert', text);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted(){
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List ({this.props.incompleteCount})</h1>

          <label className="hide-completed">
            <input
              type = "checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            /> Hide Completed Tasks
            </label>



          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
          </form>
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('tasks');
  return {
    tasks: TasksContainer.find({}, {sort: {createdAt: -1 } }).fetch(),
    incompleteCount: TasksContainer.find({ checked: {$ne: true}}).count(),
  };
})(App);