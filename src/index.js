import { sum, product, doubleAfterDelay } from './modules/math';
import './styles/app.scss';

const resultSum = document.getElementById('resultSum');
const resultProduct = document.getElementById('resultProduct');
const resultAwaitSum = document.getElementById('resultAwaitSum');

const a = 3;
const b = 7;

resultSum.textContent = `The sum of ${a} and ${b} is ${sum(a, b)}.`;
resultProduct.textContent = `The product of ${a} and ${b} is ${product(a, b)}.`;

async function addAsync(x) {
  const v1 = await doubleAfterDelay(10);
  const v2 = await doubleAfterDelay(20);
  const v3 = await doubleAfterDelay(30);
  return x + v1 + v2 + v3;
}

addAsync(5).then((asyncSum) => {
  resultAwaitSum.textContent = `The delayed sum of 5 and doubling 10, 20, and 30 is ${asyncSum}`;
});
