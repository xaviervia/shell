import React, { PropTypes } from 'react'
import './styles.css'

const KEYS = {
  ENTER: 13,
  TAB: 9
}

const handleKeyDown = ({ onEnter, onTab }) => (e) => {
  switch (e.keyCode) {
    case KEYS.TAB: {
      const direction = e.shiftKey ? -1 : 1
      return onTab && onTab(direction, e)
    }
    case KEYS.ENTER: {
      return onEnter && onEnter(e)
    }
  }
}

export default function Header ({ onChange, onSubmit, value, workingDirectory }) {
  return (
    <header className='' role='banner'>
      <label htmlFor='command' role='heading'>{workingDirectory}</label>
      <input
        autofocus
        id='command'
        role='search'
        type='text'
        onChange={onChange}
        onKeyDown={handleKeyDown({ onEnter: onSubmit })}
        value={value}
      />
    </header>
  )
}

Header.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  workingDirectory: PropTypes.string
}
