import { applyMiddleware, createStore, compose } from 'redux'
import reducer from './reducer'
import communication from './communication'
import { setupWebsocketConnection, setSession } from './actions'
import uuid from 'uuid'

const finalCreateStore = compose(
  applyMiddleware(
    communication
  ),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore)

export default (initialState) => {
  const store = finalCreateStore(reducer, initialState)

  store.dispatch(setupWebsocketConnection('ws://localhost:8080'))
  const sessionHashMatches = window.location.hash.match(/#session\/(.+)$/)
  store.dispatch(
    setSession(
      sessionHashMatches
        ? sessionHashMatches[1]
        : uuid.v4()
    )
  )

  return store
}
