export function sum (a, b) {
  return a + b
}

export function product (a, b) {
  return a * b
}

export function doubleAfterDelay (x, delay = 2000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2)
    }, delay)
  })
}
