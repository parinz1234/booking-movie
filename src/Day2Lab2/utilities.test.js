import { checkNot, checkToHaveLength, checkToHaveProperty } from './utilities'

it('the best flavor is not coconut', () => {
  expect(checkNot).not.toBe('coconut')
})

it('input array have length equal 3', () => {
  expect(checkToHaveLength).toHaveLength(3)
})

it('input array have property age', () => {
  expect(checkToHaveProperty).toHaveProperty('age')
})

it('variable is undefined', () => {
  expect().toBeUndefined()
})