import PropTypes from 'prop-types'
import { useState } from 'react'
import { AUTHOR } from '../../constants'

import styles from './Form.module.css'

export function Form({ addMessage }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    //todo...
    addMessage({
      author: AUTHOR.user,
      text
    })

    setText('')
  }

  console.log('input', text)

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={text}
          placeholder='input message'
          onChange={(event) => setText(event.target.value)}
        />
        <button className={styles.button} type='submit'>submit message</button>
      </form>
    </>
  )
}

Form.propTypes = {
  addMessage: PropTypes.func
}