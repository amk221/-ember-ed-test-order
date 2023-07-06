import Model, { attr } from '@ember-data/model';

export default class FooModel extends Model {
  @attr name;

  complete() {
    return this.store.adapterFor('foo').complete(this);
  }
}
