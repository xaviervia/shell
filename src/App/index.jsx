import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

import Header from '../Header'
import Result from '../Result'

import './styles.css'

export default function App ({ actions, text, results, workingDirectory }) {
  return (
    <div>
      <Header
        onSubmit={actions.submit}
        onChange={(e) => actions.userInput(e.target.value)}
        value={text}
        workingDirectory={workingDirectory}
      />

      <main className=''>
        {[...results].reverse().map((result, index) => <Result key={index} {...result} />)}
      </main>
    </div>
  )
}

App.propTypes = {
  actions: PropTypes.shape({
    userInput: PropTypes.func,
    submit: PropTypes.func
  }),
  results: PropTypes.array,
  text: PropTypes.string,
  workingDirectory: PropTypes.string
}

const mapStateToProps = (x) => x

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...Actions }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
