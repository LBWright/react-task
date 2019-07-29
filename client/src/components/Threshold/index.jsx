import React, { useState } from 'react'
import { func, number } from 'prop-types'

function Threshold({ setThreshold, threshold }) {
  const [input, setInput] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setThreshold(input)
  }
  return (
    <div style={{ margin: 20 }}>
      <h2>Threshold Controls</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Set Alert Threshold"
          value={input}
          onChange={({ target: { value } }) => setInput(value)}
          type="number"
          onBlur={handleSubmit}
          defaultValue={threshold}
        />
        <button type="submit">Set Threshold</button>
      </form>
      <div>
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
