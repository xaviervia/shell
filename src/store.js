import { applyMiddleware, createStore, compose } from 'redux'
import reducer from './reducer'
import communication from './communication'

const finalCreateStore = compose(
  applyMiddleware(
    communication
  ),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore)

export default (initialState) => {
  const store = finalCreateStore(reducer, initialState)

  return store
}
