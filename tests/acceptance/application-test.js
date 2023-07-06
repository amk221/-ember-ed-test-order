import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'example/tests/helpers';
import Pretender from 'pretender';

module('Acceptance | application', function (hooks) {
  setupApplicationTest(hooks);

  hooks.afterEach(function () {
    console.log('test finished');
  });

  test('foo', async function () {
    const server = new Pretender();

    server.post('/foos/1/complete', () => {
      return [204, {}];
    });

    await visit('/');
    await click('button');
  });
});
