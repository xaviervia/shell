/* global WebSocket */
import { commandStdOutput } from '../actions'

export default (action, { key, server, text, workingDirectory }, dispatch) => {
  submit(
    server,
    {
      type: 'SUBMIT',
      payload: {
        key: action.payload.key,
        command: text,
        session: key,
        workingDirectory
      }
    },
    handleStdOutput(dispatch)
  )
}

const submit = (url, action, callback) => {
  const ws = new WebSocket(url)

  ws.onmessage = (...xs) => {
    callback(...xs)
  }

  ws.onopen = () => ws.send(JSON.stringify(action))
}

const handleStdOutput = (dispatch) => (message) =>
  dispatch(commandStdOutput(JSON.parse(message.data)))
