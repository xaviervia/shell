import React, { PropTypes } from 'react'

import './styles.css'

export default function Result ({ command, raw }) {
  return (
    <section>
      <h2>{command}</h2>
      <code aria-multiline>
        {raw}
      </code>
    </section>
  )
}

Result.propTypes = {
  command: PropTypes.string,
  raw: PropTypes.string
}
