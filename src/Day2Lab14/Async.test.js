import axios from 'axios'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Gallery from './Gallery'

describe('Test Async', () => {
  it('Should call async then', () => {
    const wrapper = shallow(<Gallery />, { disableLifecycleMethods: true })
    const instance = wrapper.instance()
    const mockGet = sinon.mock(axios).expects(`get`).once().withExactArgs(`http://localhost:3000/posts?_sort=id&_order=desc`).resolves({ data: [] })
    const mockSetState = sinon.mock(instance).expects('setState').once().withExactArgs({ posts: [] })

    return instance.fetchPosts(`http://localhost:3000/posts?_sort=id&_order=desc`)
      .then(() => {
        mockGet.verify()
        mockSetState.verify()
        mockGet.restore()
        mockSetState.restore()
      })
  })
  it('Should call async catch', () => {
    const wrapper = shallow(<Gallery />, { disableLifecycleMethods: true })
    const instance = wrapper.instance()
    const mockGet = sinon.mock(axios).expects(`get`).once().withExactArgs(`http://localhost:3000/posts?_sort=id&_order=desc`).rejects({ status: 400 })
    const mockSetState = sinon.mock(instance).expects('setState').once().withExactArgs({ errorStatus: 400 })

    return instance.fetchPosts(`http://localhost:3000/posts?_sort=id&_order=desc`)
      .catch(() => {
        mockGet.verify()
        mockSetState.verify()
        mockGet.restore()
        mockSetState.restore()
      })
  })
})