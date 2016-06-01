/* global WebSocket */
import { commandStdOutput } from '../actions'

const submit = (url, action, callback) => {
  const ws = new WebSocket(url)

  ws.onmessage = (...xs) => {
    console.log('HELLO?')
    callback(...xs)
  }

  ws.onopen = () => ws.send(JSON.stringify(action))
}

const handleMessage = (dispatch) => (message) =>
  dispatch(commandStdOutput(JSON.parse(message.data)))

export default ({ getState, dispatch }) => (next) => (action) => {
  // This should just be a subscriber instead, reacting to the
  // existance of a new command in the list
  if (action.type === 'SUBMIT') {
    const { key, server, text } = getState()

    submit(
      server,
      {
        key: action.payload.key,
        command: text,
        session: key,
        currentWorkingDirectory: getState().workingDirectory
      },
      handleMessage(dispatch)
    )
  }

  next(action)
}
