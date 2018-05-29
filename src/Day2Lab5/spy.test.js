import runCallback from './spy'
import sinon from 'sinon'

beforeEach (() => {
  console.log('Before')
})

afterEach (() => {
  console.log('After')
})

it('Shoud return spy correctly', () => {
  const spyCallBack = sinon.spy()
  runCallback(spyCallBack)
  expect(spyCallBack.callCount).toEqual(0)
})

// it('Shoud return spy correctly', () => {
//   const spyCallBack = sinon.spy()
//   runCallback(spyCallBack)
//   expect(spyCallBack.callCount).toEqual(2)
// })
