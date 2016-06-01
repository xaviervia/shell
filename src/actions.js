import uuid from 'uuid'

export const userInput = (text) => ({
  type: 'USER_INPUT',
  payload: text
})

export const submit = () => ({
  type: 'SUBMIT',
  payload: {
    key: uuid.v4()
  }
})

export const commandStdOutput = (payload) => ({
  type: 'COMMAND_STD_OUTPUT',
  payload
})

export const setupWebsocketConnection = (url) => ({
  type: 'SETUP_WEBSOCKET_CONNECTION',
  payload: {
    url
  }
})

export const newSuggestions = (suggestions) => ({
  type: 'NEW_SUGGESTIONS',
  payload: suggestions
})

export const acceptSuggestion = (suggestion) => ({
  type: 'ACCEPT_SUGGESTION',
  payload: suggestion
})
