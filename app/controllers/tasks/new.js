/* eslint-disable ember/classic-decorator-no-classic-methods */
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class TasksNewController extends Controller {
  @action
  addTask() {
    const title = this.title;
    const date = this.date;
    const description = this.description;

    // Create new task
    const newTask = this.store.createRecord('task', {
      title: title,
      date: new Date(date),
      description: description,
    });

    // Save to database
    newTask.save();

    // Clear form
    this.setProperties({
      title: '',
      date: '',
      description: '',
    });
  }
}
