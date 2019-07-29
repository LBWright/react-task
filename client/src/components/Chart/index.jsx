import React from 'react'
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  Legend,
} from 'recharts'

function Chart({ data }) {
  return (
    <LineChart
      width={1080}
      height={800}
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
  )
}

export default Chart
