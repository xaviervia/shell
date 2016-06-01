import React, { PropTypes } from 'react'
import Suggestions from '../Suggestions'
import Input from '../Input'
import './styles.css'

export default function Header ({ onChange, onSubmit, onSuggestionSelect, value, workingDirectory, suggestions }) {
  return (
    <header className='' role='banner'>
      <label htmlFor='command' role='heading'>{workingDirectory}</label>

      <Input
        onChange={onChange}
        onEnter={onSubmit}
        value={value}
      />

      {suggestions && <Suggestions onSelect={onSuggestionSelect} entries={suggestions} />}
    </header>
  )
}

Header.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onSuggestionSelect: PropTypes.func,
  value: PropTypes.string,
  workingDirectory: PropTypes.string,
  suggestions: PropTypes.array
}
