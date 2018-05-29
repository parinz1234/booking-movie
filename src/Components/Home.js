import React, { Component } from 'react'
import { Form, Input, Select } from 'antd'
import { Link } from 'react-router-dom'

const FormItem = Form.Item;
const Option = Select.Option;

export default class Home extends Component {
  state = {
    selectMovie: null,
    total: 0,
    money: 0,
    movies: []
  }

  onChangeTotal = (e) => {
    let total = 0
    if (e.target.value) {
      total = parseInt(e.target.value)
    }
    this.setState({ total: total})
  }

  onChangeMoney = (e) => {
    let money = 0
    if (e.target.value) {
      money = parseInt(e.target.value)
    }
    this.setState({ money: money })
  }

  onChangeMovie = (e) => {
    this.setState({ selectMovie: e })
  }

  onSubmit = (e) => {
    console.log(this.state)
    e.preventDefault()
  }

 componentDidMount () {
   fetch(`https://www.mocky.io/v2/5b07eec23200005400700107`)
    .then(response => response.json())
    .then(movies => this.setState({ movies: movies.data }))
 }

  render () {
    return (
      <div>
        Home Page
        <Form>
          <FormItem
            label="Select"
            hasFeedback
          >
            <Select 
              placeholder="Please select a movie"
              value={this.state.selectMovie}
              onChange={this.onChangeMovie}
              >
              {
                this.state.movies.filter(value => value.showing).map(value => {
                  return (
                    <Option key={value.id} value={value.id}>{`${value.name} (${value.price})`}</Option>
                  )
                })
              }
            </Select>
          </FormItem>

          <FormItem label="Total">
            <Input 
              placeholder="Please input your total ticket"
              value={this.state.total}
              onChange={this.onChangeTotal}
              />
          </FormItem>

          <FormItem label="Money">
            <Input
              placeholder="Please input your money"
              value={this.state.money}
              onChange={this.onChangeMoney}
              />
          </FormItem>

          <FormItem>
            <Link 
              className="ant-btn ant-btn-primary"
              to={`/calculate/${this.state.selectMovie}?total=${this.state.total}&money=${this.state.money}`}
                >Buy</Link>
          </FormItem>

        </Form>
      </div>
    )
  }
}