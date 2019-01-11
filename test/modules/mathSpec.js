import { sum, product, doubleAfterDelay } from '../../src/modules/math';

describe('module/math', () => {
  it('should properly calculate sum', () => {
    assert.strictEqual(sum(3, 7), 10, 'should have summed values');
  });

  it('should properly calculate product', () => {
    assert.strictEqual(product(3, 7), 21, 'should have calculated product');
  });

  describe('doubleAfterDelay', () => {
    let clock;

    afterEach(() => {
      if (clock) {
        clock.restore();
      }
    });

    it('should double value after delay', async () => {
      const result = await doubleAfterDelay(2);
      assert.strictEqual(result, 4, 'should have double value');
    }).timeout(2100);

    it('should default to 2000ms delay and not resolve at 1999ms', (done) => {
      clock = sinon.useFakeTimers();

      let promiseError;
      doubleAfterDelay(2)
        .then(() => {
          promiseError = new Error('Promise resolved too early');
        });

      // Restore required after tick because of quirk with sinon
      // See: https://github.com/sinonjs/sinon/issues/738
      clock.tick(1999);
      clock.restore();

      setTimeout(() => {
        done(promiseError);
      }, 0);
    }).timeout(2100);

    it('should use delay param if set', () => {
      clock = sinon.useFakeTimers();

      const doublePromise = doubleAfterDelay(6, 400);

      // Restore required after tick because of quirk with sinon
      // See: https://github.com/sinonjs/sinon/issues/738
      clock.tick(400);
      clock.restore();

      return assert.eventually.strictEqual(doublePromise, 12, 'should have doubled value');
    });
  });
});
