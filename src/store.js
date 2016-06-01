import { applyMiddleware, createStore, compose } from 'redux'
import reducer from './reducer'
import communication from './communication'
import { setupWebsocketConnection } from './actions'

const finalCreateStore = compose(
  applyMiddleware(
    communication
  ),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore)

export default (initialState) => {
  const store = finalCreateStore(reducer, initialState)

  store.dispatch(setupWebsocketConnection('ws://localhost:8080'))

  return store
}
