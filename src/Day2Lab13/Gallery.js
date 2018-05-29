import React, { Component } from 'react'

class Gallery extends Component {

  componentDidMount () {
    this.fetchImages(`http://localhost/images`)
  }

  fetchImages = (url) => {}

  render () {
    return <h1>Gallery</h1>
  }
}

export default Gallery
