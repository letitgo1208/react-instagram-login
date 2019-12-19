import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './modules/App'
import Error from './modules/Error'
import Success from './modules/Success'

render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/error" component={Error}/>
      <Route path="/success" component={Success}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'));

