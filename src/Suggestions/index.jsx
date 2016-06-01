import React from 'react'
import styles from './styles.css'

export default function Suggestions ({ entries, onSelect }) {
  return (
    <ul className={styles.suggestions}>
      {entries.map((entry) => (
        <li
          onClick={() => onSelect(entry)}
          className={styles.entry}
          key={entry.key}>
          {entry.name}
        </li>
      ))}
    </ul>
  )
}
