import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'
describe('Test initial state', () => {
  it('Should have state title', () => {
    const wrapper = shallow(<Card />, { disableLifecycleMethods: true })
    expect(wrapper.state()).toHaveProperty('title', 'My Title')
  })

  it('Should have state body', () => {
    const wrapper = shallow(<Card />, { disableLifecycleMethods: true })
    expect(wrapper.state()).toHaveProperty('body', 'My Body')
  })

  it('Should have post state empty array', () => {
    const wrapper = shallow(<Card />, { disableLifecycleMethods: true })
    expect(wrapper.state()).toHaveProperty('post', [])
  })
})