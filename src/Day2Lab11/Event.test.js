import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Card from './Card'

it('Should call props.onClick when #card is clicked', () => {
  const props = {
    title: 'My Title',
    body: 'My Body',
    onClick: sinon.spy()
  }
  const wrapper = shallow(<Card {...props} />)
  wrapper.find('#card').simulate('click')
  // expect(wrapper.find('#card'))
  expect(props.onClick.calledOnce).toEqual(true)
  expect(props.onClick.callCount).toEqual(1)
})