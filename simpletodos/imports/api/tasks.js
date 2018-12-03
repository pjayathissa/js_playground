import { Mongo } from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import { check } from 'meteor/check';
 
export const TasksContainer = new Mongo.Collection('tasks');

if (Meteor.isServer) {
	Meteor.publish('tasks', function tasksPublication(){
		return TasksContainer.find();
	})
}

Meteor.methods({
  'tasks.insert'(text) {
    check(text, String);
 

    TasksContainer.insert({
      text,
      createdAt: new Date(),
    });
  },
  'tasks.remove'(taskId) {
    check(taskId, String);
 
    TasksContainer.remove(taskId);
  },
  'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);
 
    TasksContainer.update(taskId, { $set: { checked: setChecked } });
  },
});