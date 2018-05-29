import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Gallery from './Gallery'

describe('Test componentDidMount', () => {
  it('Should call fetchImage', () => {
    const wrapper = shallow(<Gallery />, { disableLifecycleMethods: true })
    const instance = wrapper.instance()
    const mockFetchImage = sinon.mock(instance).expects('fetchImages').once()
    // expect(wrapper.state()).toHaveProperty('title', 'My Title')

    instance.componentDidMount()
    mockFetchImage.verify()
  })

})