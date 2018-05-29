import getRandomNumber from './mock'
import sinon from 'sinon'

it('Should call Math.random and Math.floor correctly', () => {
  const mockRandom = sinon.mock(Math).expects('random').once().returns(0.55)
  const mockFloor = sinon.mock(Math).expects('floor').once().withExactArgs(6.5).returns(6)

  const number1 = getRandomNumber()
  const number2 = getRandomNumber()

  mockRandom.verify()
  mockFloor.verify()
})