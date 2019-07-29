import React, { useState } from 'react'
import { func, number } from 'prop-types'
import './Threshold.css'

function Threshold({ setThreshold, threshold }) {
  const [input, setInput] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setThreshold(input)
  }
  return (
    <div className="threshold-container">
      <h2>Threshold Controls</h2>
      <form onSubmit={handleSubmit} id="threshold-form">
        <input
          placeholder="Set Alert Threshold"
          value={input}
          onChange={({ target: { value } }) => setInput(value)}
          type="number"
          onBlur={handleSubmit}
          id="threshold-input"
        />
        <button onClick={handleSubmit} id="threshold-submit" type="submit">
          Set
        </button>
      </form>
      <div className="threshold-reporter">
        {threshold ? (
          <p>Current Alert Threshold: {threshold}</p>
        ) : (
          <p>No Alert Threshold Specified</p>
        )}
      </div>
    </div>
  )
}

Threshold.propTypes = {
  setThreshold: func.isRequired,
  threshold: number,
}

export default Threshold
