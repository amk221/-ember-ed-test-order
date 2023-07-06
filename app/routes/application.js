import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  model() {
    return this.store.createRecord('foo', {
      id: 1,
    });
  }
}
