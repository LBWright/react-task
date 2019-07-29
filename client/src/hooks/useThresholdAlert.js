import { useEffect } from 'react'
import { toast } from 'react-toastify'

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

function useAlert(data, threshold) {
  useEffect(() => {
    const { value } = data
    if (!satisfiesThreshold(threshold, value)) {
      alert(data)
    }
  }, [data, threshold])
}

export default useAlert
