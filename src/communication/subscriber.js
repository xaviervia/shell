/* global WebSocket */
import uuid from 'uuid'
import { commandInput } from '../actions'

const submit = (url, action, callback) => {
  const ws = new WebSocket(url)

  ws.onmessage = callback

  ws.onopen = () => ws.send(JSON.stringify(action))
}

const handleMessage = (dispatch) => (message) =>
  dispatch(commandInput(JSON.parse(message.data)))

let prevResults = []

export default ({ getState, dispatch }) => () => {
  const { key, server, results, text } = getState()

  if (action.type === 'SUBMIT') {

    submit(
      server,
      {
        key: uuid.v4(),
        command: text,
        session: key
      },
      handleMessage(dispatch)
    )
  }

  next(action)
}
