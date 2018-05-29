import { sum, sub, multi, div } from './calculator'

it('Should return 3 when input is 1 and 2', () => {
  const actual = sum(1, 2)
  expect(actual).toEqual(3)
})

it('Should return 1 when input is 2 and 1', () => {
  const actual = sub(2, 1)
  expect(actual).toEqual(1)
})

it('Should return 2 when input is 2 and 1', () => {
  const actual = multi(2, 1)
  expect(actual).toEqual(2)
})

it('Should return Infinity when input is 4 and 0', () => {
  const actual = div(4, 0)
  expect(actual).toEqual(Infinity)
})