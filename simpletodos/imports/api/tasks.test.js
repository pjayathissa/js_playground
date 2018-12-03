import {Meteor} from 'meteor/meteor';

import { Random } from 'meteor/random';
 
import { TasksCollection } from './tasks.js';

import { assert } from 'chai';

if (Meteor.isServer) {
  describe('TasksCollection', () => {
    describe('methods', () => {

    	let taskId
    	beforeEach(() =>{
    		TasksCollection.remove({});
    		taskId = Task.insert({
    			text: 'test task',
    			createdAt: new Date(),
    		})
    	})

      it('can delete owned task', () => {
      	const deleteTask = Meteor.server.method_handlers['tasks.remove'];
      	deleteTask.apply([taskId]);
      	assert.equal(TasksCollection.find().count(),3);
      });
    });
  });
}