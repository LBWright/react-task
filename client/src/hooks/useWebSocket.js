import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import moment from 'moment'

function useWebSocket(URL) {
  // [socket, setSocket] could probably be a ref since it doesn't
  // actually need to be part of state - would refactor. But -
  // I could see a use-case for putting it on state in the event that
  // this is a dashboard and the user is swapping between views
  // Would then throw it in a Redux store
  const [socket, setSocket] = useState(io(URL))
  const [data, setData] = useState([])
  const [currentData, setCurrentData] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      socket.on('connect', () => {
        console.log('connected')
      })
      setSocket(socket)
      socket.on('data', ({ timestamp, ...rest }) => {
        // Format data in a way that makes sense to the reader
        // If data needed more processing, I would abstract this out
        const readableTime = moment(timestamp).format('LTS')
        const processedData = { ...rest, timestamp: readableTime }
        setCurrentData(processedData)
        setData(prevData => prevData.concat(processedData))
      })
    } catch (e) {
      setError(e)
      console.log(e)
    }
    return socket.close
  }, [URL])

  return { data, currentData, error }
}

export default useWebSocket
