import React from 'react'

import { Provider } from 'react-redux'

import Index from './components/Index'
import * as actions from './actions'
import store from './store'

class App extends React.Component {
  constructor(props, railsContext) {
    super(props)
  }

  componentWillMount() {
    store.dispatch(actions.initialize(this.props))
  }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

export default App
