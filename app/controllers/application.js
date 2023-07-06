import Controller from '@ember/controller';
import { action } from '@ember/object';
import validate from '@zestia/ember-validation';
import { present } from '@zestia/ember-validation/constraints';

export default class ApplicationController extends Controller {
  @action
  async signup() {
    // Validation the ED model...

    console.log('before validation');

    const errors = await validate(this.model, {
      name() {
        return [present()];
      },
    });

    console.log('after validation', errors);

    // Complete the sign up...

    console.log('before sign up');

    await this.model.complete();

    console.log('after sign up');

    // this.model.name = 'Foo 1';

    console.log(this.model.serialize({ includeId: true }));
  }
}
