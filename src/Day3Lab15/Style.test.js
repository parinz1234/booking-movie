import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'

it('Should match snapshot style component', () => {
  const wrapper = shallow(<Card />)
  expect(wrapper).toMatchSnapshot()
})