import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'

it('Should contain one #title', () =>{
  const wrapper = shallow(<Card />)
  expect(wrapper.find('#title')).toHaveLength(1)
})

it('Should contain one <p>', () => {
  const wrapper = shallow(<Card />)
  expect(wrapper.contains(<p id="body">body</p>)).toEqual(true)
})