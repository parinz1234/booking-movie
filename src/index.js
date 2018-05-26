import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import 'antd/dist/antd.css'

// import Layout from './Components/Layout'
import Home from './Components/Home'
import Calculate from './Components/Calculate'

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculate/:movieId" component={Calculate} />
    </div>
  </BrowserRouter>
)


ReactDOM.render(<Routes />, document.getElementById('root'));
