import React, { Component } from 'react'
import axios from 'axios'

class Gallery extends Component {
  state = {
    posts: [],
    errorStatus: null
  }
  fetchPosts = (url) => {
    return axios.get(url)
      .then(response => this.setState({ posts: response.data }))
      .catch(err => this.setState({ errorStatus: err.status }))
  }

  render () {
    return <h1>Gallery</h1>
  }
}

export default Gallery
