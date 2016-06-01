import React, { Component, PropTypes } from 'react'

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

export default class Input extends Component {
  componentDidUpdate (prevProps) {
    if (prevProps.value !== this.props.value) {
      this.refs.input.focus()
    }
  }

  render () {
    const { onChange, value, onEnter } = this.props

    return (
      <input
        autofocus
        id='command'
        ref='input'
        role='search'
        type='text'
        onChange={onChange}
        onKeyDown={handleKeyDown({ onEnter })}
        value={value || ''}
      />
    )
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  value: PropTypes.string
}
