import { Link } from 'react-router-dom'
import React, { Component } from 'react'
export default class Calculate extends Component {

  state = {
    movies: []
  }

  // onClickBtnHome = () => {
  //   this.props.history.push('/')
  // }

  componentDidMount () {
    fetch(`https://www.mocky.io/v2/5b07eec23200005400700107`)
    .then(response => response.json())
    .then(movies => this.setState({ movies: movies.data }))
  }

  render () {
    const movieId = parseInt(this.props.match.params.movieId)
    const params = new URLSearchParams(this.props.location.search)
    const total = params.get('total')
    const money = parseInt(params.get('money'))
    return (
      <div>
        Calculate Page
        <Link
          className="ant-btn ant-btn-primary"
          to="/"
          >Home</Link>
        {
          movieId
            &&
            this.state.movies.filter(value => movieId === value.id).map(value =>
              <div key={value.id}>
                <img 
                  src={value.image}
                  alt=''
                  />
                <p>Total Pay: { total * value.price }</p>
                <p>Change: </p>
                <p>1000: { Math.floor((money - (total * value.price)) / 1000) }</p>
                <p>500: { Math.floor((money - (total * value.price)) % 1000 / 500) } </p>
                <p>100: { Math.floor((money - (total * value.price)) % 1000 % 500 / 100) } </p>
                <p>50: { Math.floor((money - (total * value.price)) % 1000 % 500 % 100 / 50) } </p>
                <p>20: { Math.floor((money - (total * value.price)) % 1000 % 500 % 100 % 50 / 20) } </p>
                <p>10: { Math.floor((money - (total * value.price)) % 1000 % 500 % 100 % 50 % 20 / 10) } </p>
                <p>5: { Math.floor((money - (total * value.price)) % 1000 % 500 % 100 % 50 % 20 % 10 / 5) } </p>
                <p>2: { Math.floor((money - (total * value.price)) % 1000 % 500 % 100 % 50 % 20 % 10 % 5 / 2) } </p>
                <p>1: { Math.floor((money - (total * value.price)) % 1000 % 500 % 100 % 50 % 20 % 10 % 5 % 2 / 1) } </p>
              </div>
            )
        }
      </div>
    )
  }
}