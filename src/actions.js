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

export const commandInput = (payload) => ({
  type: 'COMMAND_INPUT',
  payload
})
