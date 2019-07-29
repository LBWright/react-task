import React, { useState } from 'react'
import useThresholdAlert from '../../hooks/useThresholdAlert'
import useWebSocket from '../../hooks/useWebSocket'
import { Chart, Threshold, Toast } from '..'

import './App.css'
// Working with CSS to keep consistency with react-toastify
// prefer CSS-in-JS or preprocessor - would refactor

const URL = 'http://localhost:8000'

// use of function keyword preferred over arrow func in functional components
// faster in most cases - doesn't matter for closure.
function App() {
  const [threshold, setThreshold] = useState()

  const { data, currentData, error } = useWebSocket(URL)
  useThresholdAlert(currentData, threshold)
  return (
    <div className="container">
      <Chart data={data} />
      <Threshold setThreshold={setThreshold} threshold={threshold} />
      <Toast />
    </div>
  )
}

export default App
