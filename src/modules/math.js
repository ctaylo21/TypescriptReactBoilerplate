/**
 * Calculates the sum of two numbers
 *
 * @param {number} a - first number to sum
 * @param {number} b - second number to sum
 * @returns {number} - sum of two numbers
 */
export function sum(a, b) {
  return a + b;
}

/**
 * Calculates the product of two numbers
 *
 * @param {number} a - first number to multiply
 * @param {number} b - second number to multiply
 * @returns {number} - product of two numbers
 */
export function product(a, b) {
  return a * b;
}

/**
 * Doubles a given number after a delay with a Promise.
 *
 * @param {number} x - number to double
 * @param {number} [delay=2000] - time in ms to delay
 * @returns {Promise} - a promise that will resolve to result
 */
export function doubleAfterDelay(x, delay = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, delay);
  });
}
