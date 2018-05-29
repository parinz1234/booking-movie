import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  padding: 20px;
`
Div.displayName = 'Div'

const Title = styled.h1`
  color: green;
  font-size: 20px;
`

const Content = styled.p`
  color: green;
`

const Card = () => (
  <Div>
    <Title>My Title</Title>
    <Content>My Body</Content>
  </Div>
)

export default Div