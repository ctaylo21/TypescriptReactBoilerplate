import {sum, product} from '../../src/modules/math';
import {assert} from 'chai';

describe('module/math', () => {

  it('should properly calculate sum', () => {
    assert.strictEqual(sum(3, 7), 10, 'should have summed values');
  });

  it('should properly calculate product', () => {
    assert.strictEqual(product(3, 7), 21, 'should have calculated product');
  });

});
