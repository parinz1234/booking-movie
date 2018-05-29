import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'

it('Should contain one #title', () =>{
  const wrapper = shallow(<Card />)
  expect(wrapper.find('#title')).toHaveLength(1)
})

it('Should contain one <p>', () => {
  const wrapper = shallow(<Card />)
  expect(wrapper.contains(<p id="body"></p>)).toEqual(true)
})

it('Should render props correctly', () => {
  const props = {
    title: 'My Title',
    body: 'My Body'
  }
  const wrapper = shallow(<Card {...props} />)
  expect(wrapper.find('#title').props()).toHaveProperty('children', 'My Title')
  expect(wrapper.find('#body').props()).toHaveProperty('children', 'My Body')
})

