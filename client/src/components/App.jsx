import React, { Component, useEffect, useState } from 'react'
import io from 'socket.io-client'
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  Legend,
} from 'recharts'

const URL = 'http://localhost:8000'

function App() {
  const [socket, setSocket] = useState(io(URL))
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      socket.on('connect', () => {
        console.log('connected')
      })
      setSocket(socket)
    } catch (e) {
      console.log(e)
    }
    return socket.close
  }, [])

  useEffect(() => {
    socket.on('data', data => {
      setData(oldData => oldData.concat(data))
    })
  }, [socket])

  return (
    <div>
      <LineChart
        width={700}
        height={700}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}>
        <CartesianGrid />
        <XAxis dataKey="timestamp" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  )
}

export default App
