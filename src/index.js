import 'regenerator-runtime/runtime'
import {sum, product, doubleAfterDelay} from './modules/math'
import './styles/app.scss'

const resultSum = document.getElementById('resultSum')
const resultProduct = document.getElementById('resultProduct')
const resultAwaitSum = document.getElementById('resultAwaitSum')

const a = 3
const b = 7

resultSum.textContent = `The sum of ${a} and ${b} is ${sum(a, b)}. ✨`
resultProduct.textContent = `The product of ${a} and ${b} is ${product(a, b)}. 🚀`

async function addAsync (x) {
  const a = await doubleAfterDelay(10)
  const b = await doubleAfterDelay(20)
  const c = await doubleAfterDelay(30)
  return x + a + b + c
}

addAsync(5).then((sum) => {
  resultAwaitSum.textContent = `The delayed sum of 5 and doubling 10, 20, and 30 is ${sum}`
})
