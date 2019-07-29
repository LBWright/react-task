import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import moment from 'moment'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import Chart from './Chart'
import Threshold from './Threshold'
import useAlert from '../hooks/useAlert'
import './App.css'
// Working with CSS to keep consistency with react-toastify
// prefer CSS-in-JS or preprocessor - would refactor

const URL = 'http://localhost:8000'

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

  useAlert(currentData, threshold)
  return (
    <div className="container">
      <Chart data={data} />
      <Threshold setThreshold={setThreshold} threshold={threshold} />
      <ToastContainer />
    </div>
  )
}

export default App
