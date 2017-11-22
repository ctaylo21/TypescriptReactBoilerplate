import {sum, product} from './modules/math'

const resultSum = document.getElementById('resultSum')
const resultProduct = document.getElementById('resultProduct')

const a = 3
const b = 7

resultSum.textContent = `The sum of ${a} and ${b} is ${sum(a, b)}. ✨`
resultProduct.textContent = `The product of ${a} and ${b} is ${product(a, b)}. 🚀`
