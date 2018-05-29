import React, { Component } from 'react'

class Card extends Component {
  state = {
    title: 'My Title',
    body: 'My Body',
    post: []
  }
  render () {
    <div id="card">
      <h1 id="title">{ this.state.title }</h1>
      <p id="body">{ this.state.body }</p>
    </div>
  }
}

export default Card