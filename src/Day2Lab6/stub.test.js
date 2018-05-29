import { getRandomNumber, getPow } from './stub'
import sinon from 'sinon'

it('Should return stub correctly', () => {
  const stubRandom = sinon.stub(Math, `random`).callsFake(() => 0.55)
  const stubFloor = sinon.stub(Math, `floor`).withArgs(6.5).returns(6)
  const number = getRandomNumber()

  expect(stubRandom.callCount).toEqual(1)
  expect(stubFloor.callCount).toEqual(1)
  expect(stubFloor.withArgs(6.5).callCount).toEqual(1)
  expect(stubFloor.calledWith(6.5)).toEqual(true)
  expect(stubFloor.calledOnceWith(6.5)).toEqual(true)
})


it('Should return stub pow', () => {
  const stubPow = sinon.stub(Math, `pow`)
  stubPow.withArgs(2).returns(10)
  stubPow.withArgs(5).returns(100)
  const result1 = getPow(2)
  const result2 = getPow(5)
  

  expect(stubPow.callCount).toEqual(2)
  expect(stubPow.calledWith(2)).toEqual(true)
  // expect(stubFloor.callCount).toEqual(1)
  // stubPow.withArgs(3).return(15)
  // expect(stubRandom.callCount).toEqual(1)
  // console.log(result1)
  // console.log(result2)
})