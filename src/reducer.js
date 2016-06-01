import uuid from 'uuid'

const initialState = {
  key: uuid.v4(),
  text: 'echo Hola Mundo',
  workingDirectory: '/',
  server: 'ws://localhost:8080',
  results: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'USER_INPUT':
      return {
        ...state,
        text: action.payload
      }

    case 'COMMAND_STD_OUTPUT':
      return {
        ...state,
        results: state.results.map((result) =>
          result.key === action.payload.command
            ? { ...result, raw: result.raw + action.payload.data }
            : result
        ),
        workingDirectory: action.payload.currentWorkingDirectory
          ? action.payload.currentWorkingDirectory
          : state.workingDirectory
      }

    case 'SUBMIT':
      return {
        ...state,
        results: [ ...state.results ].concat({
          key: action.payload.key,
          command: state.text,
          raw: ''
        }),
        text: ''
      }

    default:
      return state
  }
}
