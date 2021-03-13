import Model, { attr } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') title;
  @attr('date') date;
  @attr('string') description;
  @attr('date', {
    defaultValue() {
      return new Date();
    },
  })
  createdAt;
}
