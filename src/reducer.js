const initialState = {
  key: undefined,
  text: 'echo Hola Mundo',
  workingDirectory: '/',
  server: undefined,
  results: [],
  suggestions: {
    context: undefined,
    entries: []
  }
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
        workingDirectory: action.payload.workingDirectory
          ? action.payload.workingDirectory
          : state.workingDirectory
      }

    case 'NEW_SUGGESTIONS':
      return {
        ...state,
        suggestions: action.payload
      }

    case 'SUBMIT':
      return {
        ...state,
        results: [ ...state.results ].concat({
          key: action.payload.key,
          command: state.text,
          raw: ''
        }),
        text: '',
        suggestions: initialState.suggestions
      }

    case 'SETUP_WEBSOCKET_CONNECTION':
      return {
        ...state,
        server: action.payload.url
      }

    case 'SET_SESSION':
      return {
        ...state,
        key: action.payload
      }

    case 'ACCEPT_SUGGESTION':
      return {
        ...state,
        text: action.payload.replacementCommand
      }

    default:
      return state
  }
}
