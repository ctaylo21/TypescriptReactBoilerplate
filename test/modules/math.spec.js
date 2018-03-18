import {sum, product} from '../../src/modules/math'

describe('module/math', () => {
  'use strict'

  it('should properly calculate sum', () => {
    expect(sum(3, 7)).toBe(10)
  })

  it('should properly calculate product', () => {
    expect(product(3, 7)).toBe(21)
  })
})
