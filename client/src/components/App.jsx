import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Chart from './Chart'
import Threshold from './Threshold'
import './App.css'
// Working with CSS to keep consistency with react-toastify
// prefer CSS-in-JS or preprocessor - would refactor

const URL = 'http://localhost:8000'

const alert = ({ timestamp, value }) => {
  toast.warn(`${timestamp} - Threshold limit reached: ${value}`, {
    position: toast.POSITION.TOP_LEFT,
    bodyClassName: 'warning-toast',
  })
}

const satisfiesThreshold = (condition, value) => {
  if (condition && value) return value < condition
  return true
}

// use of function keyword preferred over arrow func in functional components
function App() {
  // [socket, setSocket] could also be a ref since it doesn't actually need to be part of state
  // Would refactor
  const [socket, setSocket] = useState(io(URL))
  const [data, setData] = useState([])
  const [threshold, setThreshold] = useState()
  const [currentData, setCurrentData] = useState({})

  // can create a useWebSocket hook with this
  useEffect(() => {
    try {
      socket.on('connect', () => {
        console.log('connected')
      })
      setSocket(socket)
      socket.on('data', response => {
        const { timestamp } = response
        const readableTime = moment(timestamp).format('LTS')
        // Format data in a way that makes sense to the reader
        // If data needed more processing, I would abstract this out
        const processedData = { ...response, timestamp: readableTime }
        setCurrentData(processedData)
        setData(prevData => prevData.concat(processedData))
      })
    } catch (e) {
      console.log(e)
    }
    return socket.close
  }, [URL])

  // can be a useAlert custom hook
  useEffect(() => {
    const { value } = currentData
    if (!satisfiesThreshold(threshold, value)) {
      alert(currentData)
    }
  }, [currentData, threshold])

  return (
    <div className="container">
      <Chart data={data} />
      <Threshold setThreshold={setThreshold} threshold={threshold} />
      <ToastContainer />
    </div>
  )
}

export default App
