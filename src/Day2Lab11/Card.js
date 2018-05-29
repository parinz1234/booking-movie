import React from 'react'

const Card = (props) => (
  <div id="card" onClick={props.onClick}>
    <h1 id="title">{ props.title }</h1>
    <p id="body">{ props.body }</p>
  </div>
)

export default Card