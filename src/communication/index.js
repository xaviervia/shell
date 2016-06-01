import onSubmit from './onSubmit'
import Socket from '../lib/Socket'
import { newSuggestions } from '../actions'

let socket

const setupConnection = (url, dispatch) => {
  socket = new Socket(url)

  socket.on('message', ({ data }) => {
    const { type, payload } = JSON.parse(data)

    if (type === 'NEW_SUGGESTIONS') {
      dispatch(newSuggestions(payload))
    }
  })
}

export default ({ getState, dispatch }) => (next) => (action) => {
  // This should just be a subscriber instead, reacting to the
  // existance of a new command in the list
  if (action.type === 'SUBMIT') {
    onSubmit(action, getState(), dispatch)
  }

  if (action.type === 'SETUP_WEBSOCKET_CONNECTION') {
    setupConnection(action.payload.url, dispatch)
  }

  if (action.type === 'USER_INPUT' || action.type === 'ACCEPT_SUGGESTION') {
    setTimeout(() => {
      const { key, text, workingDirectory } = getState()
      socket.send(
        {
          type: 'USER_INPUT',
          payload: {
            workingDirectory,
            text,
            session: key
          }
        }
      )
    })
  }

  next(action)
}
