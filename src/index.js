import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'

// Redux stuff
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers/charReducer.js'

// Store for all our state
const store = createStore(reducer)

render(
  // Give access to our store
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)