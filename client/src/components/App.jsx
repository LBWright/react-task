import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Chart from './Chart'
import Threshold from './Threshold'
import useThresholdAlert from '../hooks/useThresholdAlert'
import useWebSocket from '../hooks/useWebSocket'
import './App.css'
// Working with CSS to keep consistency with react-toastify
// prefer CSS-in-JS or preprocessor - would refactor

const URL = 'http://localhost:8000'

// use of function keyword preferred over arrow func in functional components
// faster in most cases - doesn't matter for closure.
function App() {
  const [threshold, setThreshold] = useState()

  const { data, currentData } = useWebSocket(URL)
  useThresholdAlert(currentData, threshold)
  return (
    <div className="container">
      <Chart data={data} />
      <Threshold setThreshold={setThreshold} threshold={threshold} />
      <ToastContainer />
    </div>
  )
}

export default App
