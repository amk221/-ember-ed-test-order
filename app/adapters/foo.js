import RESTAdapter from '@ember-data/adapter/rest';

export default class FooAdapter extends RESTAdapter {
  complete(model) {
    const url = `${this.buildURL('foo', model.id)}/complete`;
    const foo = model.serialize();

    return this.ajax(url, 'POST', { data: { foo } });
  }
}
